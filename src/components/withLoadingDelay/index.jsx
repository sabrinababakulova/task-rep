import React, { useState, useEffect } from 'react'
import { Spinner, Box } from '@chakra-ui/react'

const withLoadingDelay = (Component) => {
    function HOC(props) {
        const [loading, setLoading] = useState(true)
        useEffect(() => {
            setTimeout(() => {
                setLoading(false)
            }, 2000)
        }, [])

        return loading ? (
            <Box
                boxShadow="base"
                p="6"
                mb="4"
                w={['xs', 'sm', 'lg']}
                bg="gray.100"
            >
                <Spinner size="xl" color="teal" thickness="4px" />
            </Box>
        ) : (
            <Component {...props} />
        )
    }
    return HOC
}
export default withLoadingDelay
