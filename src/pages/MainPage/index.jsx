import React, { Suspense } from 'react';
const CardList = React.lazy(() => import('../../components/CardList'));
const FuncButtons = React.lazy(() => import('../../components/FuncButtons'));
import usePromptHook from '../../hooks/usePromptHook';
const MainPage = () => {
  usePromptHook("are you still logged in? ", 10000);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FuncButtons />
      <CardList />
    </Suspense>
  );
};

export default MainPage;
