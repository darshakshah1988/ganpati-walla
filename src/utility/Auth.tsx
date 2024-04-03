export const isLoggedIn = (): boolean => {
    return localStorage.getItem('isLoggedIn') === 'true';
  };