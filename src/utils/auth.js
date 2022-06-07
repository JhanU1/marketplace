import data from "./data";

export const login = (username, password) => {
  const user = data.users.find(
    (user) => user.username === username && user.password === password
  );
  if (user) {
    localStorage.setItem("user", JSON.stringify(user));
    return user;
  }
  return null;
};

export const logout = () => {
  localStorage.removeItem("user");
};

export const register = (name, username, password, conPassword) => {
  if (password !== conPassword) {
    return false;
  }
  const user = data.users.find((user) => user.username === username);
  if (user) {
    return false;
  }
  const newUser = {
    id: data.users.length + 1,
    name,
    username,
    password,
    type: "user",
  };
  data.users.push(newUser);
  return newUser;
};
