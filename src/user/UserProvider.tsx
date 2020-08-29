import * as React from 'react';

export interface User {
  isLoggedIn: boolean;
  isLoading: boolean;
  isTermsOfServiceAccepted: boolean | null;
}

const defaultState: User = {
  isLoggedIn: false,
  isLoading: true,
  isTermsOfServiceAccepted: null,
};

export const UserContext = React.createContext<User>(defaultState);
export const UserUpdateContext = React.createContext<
  React.Dispatch<React.SetStateAction<User>>
>(() => undefined);
export const UserLoggedInContext = React.createContext<User['isLoggedIn']>(
  defaultState.isLoggedIn,
);
export const UserLoadingContext = React.createContext<User['isLoading']>(
  defaultState.isLoading,
);
export const UserTermsOfServiceAcceptedContext = React.createContext<
  User['isTermsOfServiceAccepted']
>(defaultState.isTermsOfServiceAccepted);

export const UserProvider: React.FC = ({children}) => {
  const [user, setUser] = React.useState<User>(defaultState);

  return (
    <UserUpdateContext.Provider value={setUser}>
      <UserContext.Provider value={user}>
        <UserLoadingContext.Provider value={user.isLoading}>
          <UserLoggedInContext.Provider value={user.isLoggedIn}>
            <UserTermsOfServiceAcceptedContext.Provider
              value={user.isTermsOfServiceAccepted}>
              {children}
            </UserTermsOfServiceAcceptedContext.Provider>
          </UserLoggedInContext.Provider>
        </UserLoadingContext.Provider>
      </UserContext.Provider>
    </UserUpdateContext.Provider>
  );
};
