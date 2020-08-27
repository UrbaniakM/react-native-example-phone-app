import {
  UserLoggedInContext,
  UserLoadingContext,
  UserContext,
  UserUpdateContext,
} from './UserProvider';

import * as React from 'react';

export const useUser = () => React.useContext(UserContext);
export const useUpdateUser = () => React.useContext(UserUpdateContext);
export const useUserLoggedIn = () => React.useContext(UserLoggedInContext);
export const useUserLoading = () => React.useContext(UserLoadingContext);
