import React from 'react'
import { Box } from '@hypobox/react'

export function Button ({ children, ...props }) {
  return (
    <Box
      as="button"
      px={6}
      py={3}
      bg="white"
      c="primary"
      fs={5}
      lh={'1.0'}
      fe={5}
      css={{
        border: 0,
        outline: 0,
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 2px 6px',
        borderRadius: '4px',
        ':hover, :focus': {
          bg: 'background',
        }
      }}
      {...props}
    >
      {children}
    </Box>
  )
}
