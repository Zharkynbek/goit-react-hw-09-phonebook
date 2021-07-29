export const isAuthorized = (state) => !!state.auth.isAuthenticated;

export const getUsername = (state) => state.auth.user.name;
