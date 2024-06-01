import { createContext, useCallback, useContext, useState } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  userId: null,
  login: () => {},
  logout: () => {},
});

function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const [user, setUser] = useState(null);
  const [isLoginMode, setIsLoginMode] = useState(true);

  const login = useCallback((userId, user) => {
    setIsLoggedIn(true);
    setUserId(userId);
    setUser(user);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUserId(null);
  }, []);

  function toggleLoginMode() {
    setIsLoginMode((prevMode) => !prevMode);
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        userId,
        login,
        logout,
        user,
        isLoginMode,
        toggleLoginMode,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export { AuthProvider, useAuth };
