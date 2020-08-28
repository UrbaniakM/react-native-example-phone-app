import * as React from 'react';
import {useUpdateUser} from '../user';
import {getPersistedIsTermsOfServiceAccepted} from './termsOfService';

// TODO: user session check
export const useInitializeUserData = () => {
  const updateUser = useUpdateUser();

  const initializeUserData = React.useCallback(() => {
    getPersistedIsTermsOfServiceAccepted().then((isAccepted) => {
      updateUser((user) => ({
        ...user,
        isTermsOfServiceAccepted: isAccepted,
      }));
    });
  }, [updateUser]);

  return initializeUserData;
};
