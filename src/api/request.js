import { API } from "../base";

export const request = async (target, options = {}) => {
  const response = await fetch(`${API}${target}`, options);
  return await response.json();
};
