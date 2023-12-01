import express from "express";
import usersRoute from "./routes/users.js";
import authRoute from "./routes/auth.js";

const app = express();

app.use(express.json());

app.use("/api/users", usersRoute);
app.use("/api/auth", authRoute);

app.listen(5000, () => {
  console.log("Server connected");
});
