import React from 'react'
import { Box } from '@hypobox/react'

export function Gutter ({ children }) {
  return (
    <Box px={[6, 6, 8]} w>
      {children}
    </Box>
  )
}
