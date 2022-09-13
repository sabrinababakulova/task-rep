import React, { Suspense } from 'react';
import { Box, Text } from '@chakra-ui/react';
const SignIn = React.lazy(() => import('../../components/SignIn'));

function SignInPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Box mb={5}>
        <Text textAlign="center" fontSize="30px">
          Sign In
        </Text>
        <SignIn />
      </Box>
    </Suspense>
  );
}

export default SignInPage;
