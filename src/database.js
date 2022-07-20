import { connect } from "mongoose";

(async () => {
  try {
    const db = await connect(
      "mongodb+srv://harold:1234@cluster0.pwgpa.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Conectado a MONGO ATLAS", db.connect.name);
  } catch (error) {
    console.log(error);
  }
})();
