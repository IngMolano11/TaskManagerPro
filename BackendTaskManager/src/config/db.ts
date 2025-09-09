const mongoose = require("mongoose");

const connect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || "");
    console.log("✅ MongoDB conectado:", conn.connection.name);
  } catch (error) {
    console.error("❌ Error conectando a MongoDB:", error);
    process.exit(1);
  }
};

module.exports = { connect };
