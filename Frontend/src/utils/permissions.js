import USER_ROLES from "../const/user-roles";

export const isUserAdmin = (user) => {
  return user.role === USER_ROLES.ADMIN;
};
