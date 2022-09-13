import React, { Suspense } from 'react';
const CardList = React.lazy(() => import('../../components/CardList'));
const FuncButtons = React.lazy(() => import('../../components/FuncButtons'));

const MainPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FuncButtons />
      <CardList />
    </Suspense>
  );
};

export default MainPage;
