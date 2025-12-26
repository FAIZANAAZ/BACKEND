export const UserRoleEnum = {
  ADMIN: "admin",
  PROJECT_ADMIN: "project-admin",
  MEMBER: "member"
};

export const AvalaibleUserRoles = Object.values(UserRoleEnum);

// ye hmne is file me is liye banaya he taki sare constants ek jga py rhyn or jb bhi kisi constant ki zrurt ho to hm yha sy import kr ly ly
// or agr kisi constant me koi change krna ho to sirf yha krna ho or sare jgah wo change hojayga

export const TaskStatusEnum = {
  TO_DO: "to-do",
  IN_PROGRESS: "in-progress",
  REVIEW: "review",
  DONE: "done"
};

export const AvalaibleTaskStatus = Object.values(TaskStatusEnum);