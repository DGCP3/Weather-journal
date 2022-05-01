import express from "express";
import cors from "cors";
import "dotenv/config";

import { getData, saveData } from "./controller.js";
const app = express();
export let projectData = { data: [] };

app.use(cors());
app.use(express.json());
app.use(express.static("website"));
const port = process.env.PORT || 3000;
app.route("/weather").get(getData).post(saveData);
app.listen(port, () => console.log(`Listening on port ${port}`));
