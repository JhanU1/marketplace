import data from "./data";

export const getUserById = (id) => {
  return data.users.find((user) => user.id === id);
}
