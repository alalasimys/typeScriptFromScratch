type Modifier = 'read' | 'update' | 'create';

type UserRoles = {
  customers?: Modifier;
  projects?: Modifier;
  adminPanel?: Modifier;
};

type ModifierToAccess<Type> = {
  +readonly [Property in keyof Type as Exclude<
    `canAccess${string & Property}`,
    'canAccessAdminPanel'
  >]-?: boolean;
};

type UserAccess2 = ModifierToAccess<UserRoles>;
// output:
// type UserAccess2 = {
//   readonly canAccesscustomers: boolean;
//   readonly canAccessprojects: boolean;
//   readonly canAccessadminPanel: boolean;
// }

type UserAccess1 = {
  customers?: boolean;
  projects?: boolean;
  adminPanel?: boolean;
};
