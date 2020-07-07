const config = {
  admin_id: '32112323413253',
  admin_name: '1',
  admin_pass: '1',
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "Jaghoor1Baghoor2",
  mongoUri: process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
    'mongodb://' + (process.env.IP || 'localhost') + ':' +
    (process.env.MONGO_PORT || '27017') +
    '/mernproject',
  serverUrl: process.env.serverUrl || 'http://localhost:3000'

}

export default config
