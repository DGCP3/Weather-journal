import cors from "cors";
import "dotenv/config";
import express from "express";

import { getData, saveData } from "./controller.mjs";

const app = express();
export let projectData = { data: [] };

app.use(cors());
app.use(express.json());
app.use(express.static("website"));
const port = process.env.PORT || 3000;
app.route("/weather").get(getData).post(saveData);
app.listen(port, () => console.log(`Listening on port ${port}`));
