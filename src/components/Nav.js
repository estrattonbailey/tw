import React from 'react'
import { Box } from '@hypobox/react'

import { Gutter } from '@/src/components/Gutter'
import { NavLogo } from '@/src/components/NavLogo'
import { Button } from '@/src/components/Button'

export function Nav () {
  return (
    <>
      <Box h={112} />

      <Box fix top left w h={112} f aic bg="white">
        <Gutter>
          <Box f aic jcb w>
            <Box w={[1/2, 1/2, 300]}>
              <NavLogo />
            </Box>

            <Box
              as="ul"
              f
              aic
              jcc
              css={{
                listStyle: 'none',
                '@media (max-width: 1000px)': {
                  d: 'none',
                }
              }}
            >
              <Box as="li" mx={3}>
                <Box as="a" fs={5} lh={5} fe={5} caps>Employers</Box>
              </Box>
              <Box as="li" mx={3}>
                <Box as="a" fs={5} lh={5} fe={5} caps>Verifiers</Box>
              </Box>
              <Box as="li" mx={3}>
                <Box as="a" fs={5} lh={5} fe={5} caps>Employees</Box>
              </Box>
              <Box as="li" mx={3}>
                <Box as="a" fs={5} lh={5} fe={5} caps>Company</Box>
              </Box>
            </Box>

            <Box w={[1/2, 1/2, 300]} f aic jce>
              <Box as="a" fs={5} lh={5} fe={5} caps mr={6}>Sign In</Box>
              <Button>
                Start a Verification
              </Button>
            </Box>
          </Box>
        </Gutter>
      </Box>
    </>
  )
}
