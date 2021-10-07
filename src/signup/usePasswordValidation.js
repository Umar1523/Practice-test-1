import { useState, useEffect } from 'react';

const usePasswordValidation = ({ Password = '', confirmPassword = '' }) => {
  const [match, setMatch] = useState(null);

  useEffect(() => {
    setMatch(Password && Password === confirmPassword);
  }, [Password, confirmPassword]);

  return [match];
};

export default usePasswordValidation;
