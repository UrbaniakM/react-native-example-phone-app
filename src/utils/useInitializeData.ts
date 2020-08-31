import * as React from 'react';
import {useUpdateUser, User} from '../user';
import {getPersistedIsTermsOfServiceAccepted} from './termsOfService';

// TODO: user session check
export const useInitializeUserData = () => {
  const updateUser = useUpdateUser();

  const initializeUserData = React.useCallback(() => {
    getPersistedIsTermsOfServiceAccepted().then((isAccepted) => {
      updateUser((user) => {
        const updatedUser: User = {
          ...user,
          isTermsOfServiceAccepted: isAccepted,
          isLoading: false,
        };
        return updatedUser;
      });
    });
  }, [updateUser]);

  return initializeUserData;
};
