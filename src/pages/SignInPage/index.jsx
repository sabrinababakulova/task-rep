import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import SignIn from '../../components/SignIn';
import { useTranslation } from 'react-i18next';
function SignInPage() {
  const { t } = useTranslation();
  return (
    <Box mb={5}>
      <Text textAlign="center" fontSize="30px">
        {t('header.signIn')}
      </Text>
      <SignIn />
    </Box>
  );
}

export default SignInPage;
