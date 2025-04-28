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

  const url = `${API_URL}/auth`;
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

export const getFriends = async (email: string, token: string) => {
  const url = `${API_URL}/friends/${email}`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const result = await response.json();

  console.info(`PUT ${url}: `, response.status);
  if (response.status !== 200)
    throw new Error(`Failed to get friends: ${result.message}`);

  return result;
};
