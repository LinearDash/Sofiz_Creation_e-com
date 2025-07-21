import { USER_ROLES } from "../const/USER_ROLES";

export const isUserAdmin = (user) => {
  return user?.role === USER_ROLES.ADMIN;
};