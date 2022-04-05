import cors from "cors";
import express from "express";
import { getData, saveData } from "./controller.js";
const app = express();
export let projectData = [];

app.use(cors());
app.use(express.json());
app.use(express.static("website"));

app.route("/weather").get(getData).post(saveData);
app.listen(3000, () => console.log(`Listening on port 3000`));
