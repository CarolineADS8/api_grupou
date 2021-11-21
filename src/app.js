import express from "express";
import morgan from "morgan";
import cors from "cors";
import routes from "./routes";
import db from "./db/models";

const app = express();
const port = process.env.PORT || 3000;

// logger
app.use(morgan("dev"));

// Cors Middleware
app.use(cors());

app.use(express.json());

// Routes
app.use(routes);

//Sync sequelize
// db.sequelize.sync({ force: true });

app.get("/", (req, res) => {
  res.json({ message: "Grupou api" });
});

app.listen(port, () => {
  console.log(`App running at port: ${port}`);
});
