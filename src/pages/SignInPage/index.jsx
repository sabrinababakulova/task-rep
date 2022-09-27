import React, { Suspense } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
const SignIn = React.lazy(() => import('../../components/SignIn'));

function SignInPage() {
  const { t } = useTranslation();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Box mb={5}>
        <Text textAlign="center" fontSize="30px">
          {t('header.signIn')}
        </Text>
        <SignIn />
      </Box>
    </Suspense>
  );
}

export default SignInPage;
