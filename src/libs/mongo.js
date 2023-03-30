import mongoose from "mongoose"

async function connect() {
  try {
    await mongoose.connect(process.env.DB_URL)
    console.log("Connected to the database")
  } catch (e) {
    console.log(e)
    console.log("Error connecting to the database")
  }
}

export default connect
