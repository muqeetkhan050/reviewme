

// const mongoose = require('mongoose');

// const connectDB = async () => {
//     try {
//         console.log('🔗 Connecting to MongoDB Atlas...');
        

//         await mongoose.connect(process.env.MONGO_URI);
        
//         console.log('✅ MongoDB connected successfully!');
//         console.log(`📊 Database: ${mongoose.connection.name}`);
//         console.log(`🏠 Host: ${mongoose.connection.host}`);
        
//     } catch (error) {
//         console.error('❌ MongoDB connection failed:');
//         console.error('Error message:', error.message);
//         console.error('Error name:', error.name);
        
//         // Provide helpful hints
//         if (error.message.includes('ENOTFOUND')) {
//             console.error('\n💡 Tip: Check your internet connection');
//         } else if (error.message.includes('Authentication failed')) {
//             console.error('\n💡 Tip: Check your MongoDB Atlas username/password');
//         } else if (error.message.includes('bad auth')) {
//             console.error('\n💡 Tip: Invalid credentials in connection string');
//         }
        
//         process.exit(1);
//     }
// }

// module.exports = connectDB;

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        console.log('🔗 Connecting to MongoDB Atlas...');
        await mongoose.connect(process.env.MONGO_URI);
        console.log('✅ MongoDB connected successfully!');
        console.log(`📊 Database: ${mongoose.connection.name}`);
    } catch (error) {
        console.error('❌ MongoDB connection failed:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
