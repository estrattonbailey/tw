import React from 'react'
import { Box } from '@hypobox/react'

export const H1 = ({ children, ...props }) => <Box as="h1" fs={1} fe={7} lh={1} {...props}>{children}</Box>
export const H2 = ({ children, ...props }) => <Box as="h2" fs={2} fe={7} lh={2} {...props}>{children}</Box>
export const H3 = ({ children, ...props }) => <Box as="h3" fs={3} fe={7} lh={3} {...props}>{children}</Box>
export const H4 = ({ children, ...props }) => <Box as="h4" fs={4} fe={5} lh={4} {...props}>{children}</Box>
export const H5 = ({ children, ...props }) => <Box as="h5" fs={5} fe={5} lh={5} {...props}>{children}</Box>
export const H6 = ({ children, ...props }) => <Box as="h6" fs={6} fe={5} lh={6} {...props}>{children}</Box>
export const P = ({ children, ...props }) => <Box as="p" fs={4} fe={4} lh={4} {...props}>{children}</Box>
