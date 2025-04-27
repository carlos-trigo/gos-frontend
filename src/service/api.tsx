import { User } from "@auth0/auth0-react";
import { API_URL } from "../constants";

export const getAllSkaters = async (token: string) => {
  const url = `${API_URL}/skaters`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const result = await response.json();

  console.info(`GET ${url}: `, response.status);
  if (response.status !== 200)
    throw new Error(`An error occurred while fetching all todos: ${result}`);

  return result;
};

export const getOrCreateSkater = async (user: User, token: string) => {
  const { nickname, email, email_verified, picture } = user;

  const url = `${API_URL}/user`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name: nickname, email, email_verified, picture }),
  });
  const result = await response.json();

  console.info(`PUT ${url}: `, response.status);
  if (response.status !== 200)
    throw new Error(`Failed to get or create skater: ${result.message}`);

  return result;
};

/** Edits a todo's name by its ID */
export const renameTodo = async (id: string, name: string) => {
  const url = `${API_URL}/rename/${id}`;
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  });
  const result = await response.json();

  console.info(`PUT ${url}: `, response.status);
  if (response.status !== 200)
    throw new Error(`Failed to rename todo: ${result.message}`);

  return result;
};

/** Sets todo's as complete by its ID */
export const setTodoAsCompleted = async (id: string) => {
  const url = `${API_URL}/setAsCompleted/${id}`;
  const response = await fetch(url, {
    method: "PUT",
  });
  const result = await response.json();

  console.info(`PUT ${url}: `, response.status);
  if (response.status !== 200)
    throw new Error(`Failed to set todo as completed: ${result.message}`);

  return result;
};

/** Sets todo's as complete by its ID */
export const setTodoAsNotCompleted = async (id: string) => {
  const url = `${API_URL}/setAsNotCompleted/${id}`;
  const response = await fetch(url, {
    method: "PUT",
  });
  const result = await response.json();

  console.info(`PUT ${url}: `, response.status);
  if (response.status !== 200)
    throw new Error(`Failed to set todo as not completed: ${result.message}`);

  return result;
};
