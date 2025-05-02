import { Skater } from "../types/backend";

export const isSkater = (value: any): value is Skater => {
  const expectedProperties = ["id", "name", "email", "picture", "created_at"];
  expectedProperties.forEach((key) => {
    if (value[key] !== undefined) return false;
  });

  return true;
};

export const isSkaterArray = (value: any): value is Skater[] => {
  if (Array.isArray(value)) {
    value.forEach((entry) => {
      if (!isSkater(entry)) return false;
    });
  }

  return true;
};
