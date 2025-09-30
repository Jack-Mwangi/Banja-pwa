import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import User from '../models/user.js';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Debug environment variables
console.log('🔍 Environment Variables Check:');
console.log('  GOOGLE_CLIENT_ID:', process.env.GOOGLE_CLIENT_ID ? 'SET' : 'NOT SET');
console.log('  GOOGLE_CLIENT_SECRET:', process.env.GOOGLE_CLIENT_SECRET ? 'SET' : 'NOT SET');
console.log('  CALLBACK_URL:', process.env.CALLBACK_URL);

/**
 * Passport Google OAuth 2.0 Configuration
 * Handles Google authentication strategy and user serialization
 */

/**
 * Configure Google OAuth 2.0 Strategy
 */
passport.use(
  new GoogleStrategy(
    {
      // Google OAuth credentials from environment variables
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.CALLBACK_URL,
      
      // Request access to user profile and email
      scope: ['profile', 'email'],
      
      // Additional options
      passReqToCallback: false
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        console.log('🔍 Google OAuth Profile Received:');
        console.log(`   ID: ${profile.id}`);
        console.log(`   Name: ${profile.displayName}`);
        console.log(`   Email: ${profile.emails?.[0]?.value}`);
        console.log(`   Avatar: ${profile.photos?.[0]?.value}`);
        
        // Find or create user in database
        const user = await User.findOrCreateFromGoogle(profile);
        
        console.log('✅ User authenticated successfully:', user.email);
        
        // Return user to passport
        return done(null, user);
        
      } catch (error) {
        console.error('❌ Google OAuth Strategy Error:', error);
        return done(error, null);
      }
    }
  )
);

/**
 * Serialize user for session
 * This determines what data should be stored in the session
 */
passport.serializeUser((user, done) => {
  console.log('📝 Serializing user:', user._id);
  done(null, user._id);
});

/**
 * Deserialize user from session
 * This retrieves the full user object from the session data
 */
passport.deserializeUser(async (id, done) => {
  try {
    console.log('🔍 Deserializing user:', id);
    const user = await User.findById(id);
    
    if (!user) {
      console.warn('⚠️  User not found during deserialization:', id);
      return done(null, false);
    }
    
    console.log('✅ User deserialized successfully:', user.email);
    done(null, user);
    
  } catch (error) {
    console.error('❌ Error deserializing user:', error);
    done(error, null);
  }
});

// Export configured passport
export default passport;