import {
  UserLoggedInContext,
  UserLoadingContext,
  UserContext,
  UserUpdateContext,
  UserTermsOfServiceAcceptedContext,
  UserNicknameContext,
} from './UserProvider';

import * as React from 'react';

export const useUser = () => React.useContext(UserContext);
export const useUpdateUser = () => React.useContext(UserUpdateContext);
export const useUserLoggedIn = () => React.useContext(UserLoggedInContext);
export const useUserLoading = () => React.useContext(UserLoadingContext);
export const useUserNickname = () => React.useContext(UserNicknameContext);
export const useUserAcceptedTermsOfService = () =>
  React.useContext(UserTermsOfServiceAcceptedContext);
