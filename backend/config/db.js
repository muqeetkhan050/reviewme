// // // const mongoose = require('mongoose');

// // // const connectDB = async () => {
// // //     try {
// // //         // Use the MONGO_URI from environment variables
// // //         const con = await mongoose.connect(process.env.MONGO_URI, {
// // //             useNewUrlParser: true,
// // //             useUnifiedTopology: true,
// // //         });
// // //         console.log(`✅ MongoDB connected: ${con.connection.host}`);
// // //     } catch (error) {
// // //         console.error(`❌ Error: ${error.message}`);
// // //         process.exit(1);
// // //     }
// // // }

// // // // Change from export default to module.exports for CommonJS
// // // module.exports = connectDB;

// // const mongoose = require('mongoose');

// // const connectDB = async () => {
// //     try {
// //         const con = await mongoose.connect(process.env.MONGO_URI);
// //         console.log(`✅ MongoDB connected: ${con.connection.host}`);
// //     } catch (error) {
// //         console.error(`❌ MongoDB connection error: ${error.message}`);
// //         process.exit(1);
// //     }
// // }

// // module.exports = connectDB;
// const mongoose = require('mongoose');

// const connectDB = async () => {
//     try {
//         console.log('🔗 Attempting MongoDB connection...');
        
//         // Mongoose v9 - NO options needed
//         await mongoose.connect(process.env.MONGO_URI);
        
//         console.log('✅ MongoDB connected successfully!');
//         console.log(`📊 Database: ${mongoose.connection.db.databaseName}`);
        
//     } catch (error) {
//         console.error('❌ MongoDB connection failed:', error.message);
//         console.error('Full error:', error);
//         process.exit(1);
//     }
// }

// module.exports = connectD

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        console.log('🔗 Connecting to MongoDB Atlas...');
        
        // For Mongoose v9, just pass the URI - NO options needed
        await mongoose.connect(process.env.MONGO_URI);
        
        console.log('✅ MongoDB connected successfully!');
        console.log(`📊 Database: ${mongoose.connection.name}`);
        console.log(`🏠 Host: ${mongoose.connection.host}`);
        
    } catch (error) {
        console.error('❌ MongoDB connection failed:');
        console.error('Error message:', error.message);
        console.error('Error name:', error.name);
        
        // Provide helpful hints
        if (error.message.includes('ENOTFOUND')) {
            console.error('\n💡 Tip: Check your internet connection');
        } else if (error.message.includes('Authentication failed')) {
            console.error('\n💡 Tip: Check your MongoDB Atlas username/password');
        } else if (error.message.includes('bad auth')) {
            console.error('\n💡 Tip: Invalid credentials in connection string');
        }
        
        process.exit(1);
    }
}

module.exports = connectDB;