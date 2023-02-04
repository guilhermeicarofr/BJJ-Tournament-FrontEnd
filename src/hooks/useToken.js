import { useContext } from 'react';

import { UserContext } from '../contexts/UserContext';

function useToken() {
  const { userData: user } = useContext(UserContext);
  return user.token;
}

export { useToken };
