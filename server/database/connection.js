const mongoose = require('mongoose')
const databaseUrl =
  'mongodb://localhost/argentBankDB'

// module.exports = async () => {
//   try {
//     await mongoose.connect(databaseUrl, {})
//     console.log('Database successfully connected')
//   } catch (error) {
//     console.error(`Database Connectivity Error: ${error}`)
//     throw new Error(error)
//   }
// }

module.exports = async () => {
  try {
      await mongoose.connect(process.env.DATABASE_URL, {});
      console.log("CONNECTED TO DATABASE SUCCESSFULLY");
  } catch (error) {
      console.error('COULD NOT CONNECT TO DATABASE:', error.message);
  }
};