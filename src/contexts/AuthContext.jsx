import { createContext, useCallback, useContext, useReducer } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  userId: null,
  login: () => {},
  logout: () => {},
});

const initialState = {
  isLoggedIn: false,
  userId: null,
  user: null,
  isLoginMode: true,
};

function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLoggedIn: true,
        userId: action.payload.userId,
        user: action.payload.user,
      };
    case "LOGOUT":
      return {
        ...state,
        isLoggedIn: false,
        userId: null,
        user: null,
      };
    case "TOGGLE_LOGIN_MODE":
      return {
        ...state,
        isLoginMode: !state.isLoginMode,
      };
    default:
      return state;
  }
}
function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const { isLoggedIn, userId, user, isLoginMode } = state;

  const login = useCallback((userId, user) => {
    dispatch({ type: "LOGIN", payload: { userId, user } });
  }, []);

  const logout = useCallback(() => {
    dispatch({ type: "LOGOUT" });
  }, []);

  function toggleLoginMode() {
    dispatch({ type: "TOGGLE_LOGIN_MODE" });
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
