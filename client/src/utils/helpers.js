import axios from "axios";

export const projects = async () => {
  const { data } = await axios.get("../data/projects.json");
  return data;
};
