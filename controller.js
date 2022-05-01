import { projectData } from "./server";

export function saveData(req, res) {
  projectData.data.push({ ...req.body });
  res.status(201).send(projectData);
}
export function getData(req, res) {
  res.status(200).send(projectData.data);
}
