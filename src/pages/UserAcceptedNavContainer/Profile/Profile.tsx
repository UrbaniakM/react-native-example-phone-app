import * as React from 'react';
import {ProfileNonLoggedIn} from './ProfileNonLoggedIn';
import {ProfileLoggedIn} from './ProfileLoggedIn';

import {useUserLoggedIn} from 'user';

export const Profile: React.FC = () => {
  const isUserLoggedIn = useUserLoggedIn();
  return isUserLoggedIn ? <ProfileLoggedIn /> : <ProfileNonLoggedIn />;
};
