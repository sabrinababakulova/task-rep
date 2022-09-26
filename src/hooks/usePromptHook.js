import { useEffect } from 'react';
const usePromptHook = (message, time) => {
  useEffect(() => {
    setInterval(() => {
      prompt(message);
    }, time);
    return clearTimeout();
  }, [time]);
};
export default usePromptHook;
