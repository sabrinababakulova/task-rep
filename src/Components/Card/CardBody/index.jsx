import React from 'react'
import { Textarea } from '@chakra-ui/react'

function index({ body, isEditing, setBody, setRevertBody }) {
    return (
        <Textarea
            value={body}
            fontSize="xl"
            variant={isEditing ? 'outline' : 'unstyled'}
            onClick={() => setRevertBody(body)}
            isReadOnly={!isEditing}
            onChange={(e) => setBody(e.target.value)}
        />
    )
}

export default index
