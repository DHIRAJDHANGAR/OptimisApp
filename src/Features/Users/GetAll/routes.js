import { getRequest } from "../../../Services/Network";

export const getAllUsers = async () => {
  const URL = "https://jsonplaceholder.typicode.com/users";
  const response = getRequest(URL);
  return response === null ? [] : response;
};
