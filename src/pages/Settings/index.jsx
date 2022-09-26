import React, { Suspense } from 'react';
const ReadOnly = React.lazy(() =>
  import('../../components/FuncButtons/ReadOnly')
);
const SettingsPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ReadOnly />
    </Suspense>
  );
};

export default SettingsPage;
