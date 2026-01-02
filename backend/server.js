
require('dotenv').config();

const app = require('./app');
const connectDB = require('./config/db'); // Adjust path as needed

const PORT = process.env.PORT || 5000;

// Connect to MongoDB first, then start server
const startServer = async () => {
    try {
        await connectDB();
        
        app.listen(PORT, () => {
            console.log(`🚀 Server running on port ${PORT}`);
            console.log(`📝 API endpoint: http://localhost:${PORT}/reviewme/posts/new`);
        });
    } catch (error) {
        console.error('❌ Failed to start server:', error);
        process.exit(1);
    }
};

startServer();