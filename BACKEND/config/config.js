// Example configuration file

module.exports = {
    jwtSecret: process.env.JWT_SECRET || 'MyScretKey',
    mongoURI: process.env.MONGODB_URI 
};
