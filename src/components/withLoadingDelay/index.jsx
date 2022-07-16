import React, { useState, useEffect } from 'react'
import { Spinner, Box } from '@chakra-ui/react'

const withLoadingDelay = (Component) => (props) => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  return loading ? (
    <Box boxShadow="base" p="6" mb="4" w={['xs', 'sm', 'lg']} bg="gray.100">
      <Spinner size="xl" color="teal" thickness="4px" />
    </Box>
  ) : (
    <Component {...props} />
  )
}

export default withLoadingDelay
