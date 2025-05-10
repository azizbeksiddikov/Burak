<<<<<<< HEAD
/*
Architectural pattern: MVC, Dependency Injection, MVP

MVC = Model View Controller

Design pattern: Middleware, Decotar

*/
=======
import dotenv from "dotenv";
dotenv.config({
  path: process.env.NODE_ENV === "production" ? ".env.production" : ".env",
});
import mongoose from "mongoose";
import server from "./app";

mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.MONGO_URL as string, {})
  .then((data) => {
    // TCP1
    console.log("MongoDB connection succeed");
    const PORT = process.env.PORT ?? 3000;
    server.listen(PORT, function () {
      console.log(`The server is running successfully on port: ${PORT}`);
      console.info(`Admin project on http://localhost:${PORT}/admin\n`);
    });
  })
  .catch((err) => console.log("ERROR on connection MongoDB", err));
>>>>>>> develop
