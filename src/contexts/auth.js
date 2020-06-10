import React, { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [delay, setDelay] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setDelay(false);
    }, 2000);
  }, []);

  return (
    <AuthContext.Provider value={{ delay }}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
