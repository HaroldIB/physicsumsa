import { connect } from "mongoose";
import { MONGODB_URI } from "./config";

(async () => {
  try {
    const db = await connect(MONGODB_URI);
    console.log("Conectado a MONGO ATLAS", db.connect.name);
  } catch (error) {
    console.log(error);
  }
})();
