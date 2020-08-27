import * as React from 'react';

export interface User {
  isLoggedIn: boolean;
  isLoading: boolean;
}

const defaultState: User = {
  isLoggedIn: false,
  isLoading: true,
};

export const UserContext = React.createContext<User>(defaultState);
export const UserUpdateContext = React.createContext<
  React.Dispatch<React.SetStateAction<User>>
>(() => void 0);
export const UserLoggedInContext = React.createContext<User['isLoggedIn']>(
  defaultState.isLoggedIn,
);
export const UserLoadingContext = React.createContext<User['isLoading']>(
  defaultState.isLoading,
);

export const UserProvider: React.FC = ({children}) => {
  const [user, setUser] = React.useState<User>(defaultState);

  return (
    <UserUpdateContext.Provider value={setUser}>
      <UserContext.Provider value={user}>
        <UserLoadingContext.Provider value={user.isLoading}>
          <UserLoggedInContext.Provider value={user.isLoggedIn}>
            {children}
          </UserLoggedInContext.Provider>
        </UserLoadingContext.Provider>
      </UserContext.Provider>
    </UserUpdateContext.Provider>
  );
};
