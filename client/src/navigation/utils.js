/* eslint-disable import/prefer-default-export */

export const checkAuthToken = () => {
  const authToken = localStorage.getItem('authToken');
  if (authToken) {
    return true;
  }
  return false;
};
