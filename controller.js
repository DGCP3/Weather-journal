import { projectData } from "./server";

export function saveData(req, res) {
  projectData.splice(0, 0, ...req.body);
  res.status(201).send(projectData);
}
export function getData(req, res) {
  res.status(200).send(projectData);
}
