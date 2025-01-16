import { useContext } from 'react';

import { UserContext } from '../contexts/UserContext';

function useToken() {
  const { userData: user } = useContext(UserContext);
  return { 
    token: user.token
  };
}

export { useToken };
