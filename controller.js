import { projectData } from "./server";

export function saveData(req, res) {
  console.log(req.body);
  projectData.data.push({ ...req.body });
  res.status(201).send(projectData);
}
export function getData(req, res) {
  res.status(200).send(projectData.data);
}
