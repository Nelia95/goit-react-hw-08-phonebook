export const selectContact = state => state.contacts.items;

export const selectFilter = state => state.filter;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectAuthIsLoading = state => state.auth.authIsLoading;

export const selectAuthError = state => state.auth.authError;
