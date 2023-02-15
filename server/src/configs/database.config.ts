import { connect, ConnectOptions } from "mongoose";
import colors from "colors";

// Uses the async-await keywords because the app shouldn't stall anytime it needs to connect to the database.
export const dbConnect = async () => {
  console.log(process.env.MONGO_URI);

  try {
    const conn = await connect(process.env.MONGO_URI!, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);
    console.log(
      colors.black.bgGreen.italic(`MongoDB Connected: ${conn.connection.host}`)
    );
  } catch (err) {
    console.log(err);
    // Ends the process with some failure in Node.js.
    process.exit(1);
  }
};
