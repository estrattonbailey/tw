import React from 'react'
import { Box } from '@hypobox/react'

import { Gutter } from '@/src/components/Gutter'
import { H2 } from '@/src/components/Typography'

export function Logos () {
  return (
    <Box py={[80, 110, 130]}>
      <Gutter>
        <Box mw={1360} mxa f jcc fw>
          <H2 fs={1} fe={4} c="secondary" mb={8}>Used by modern employers</H2>

          <Box w f aic jca fw>
            {[
              'https://d27dymkl0d7xsb.cloudfront.net/images/logos/oscar-e8ea1c61.png',
              'https://d27dymkl0d7xsb.cloudfront.net/images/logos/invision-0aa5bc6e.png',
              'https://d27dymkl0d7xsb.cloudfront.net/images/logos/collegeboard-4dbbec55.jpeg',
              'https://d27dymkl0d7xsb.cloudfront.net/images/logos/tuftneedle-e0519502.png',
              'https://d27dymkl0d7xsb.cloudfront.net/images/logos/techstars-d9c5b1c9.png',
              'https://d27dymkl0d7xsb.cloudfront.net/images/logos/cornerstone-aee83a00.png',
              'https://d27dymkl0d7xsb.cloudfront.net/images/logos/motley-fool-f6ff835c.svg',
              'https://d27dymkl0d7xsb.cloudfront.net/images/logos/xant-29260b82.png',
              'https://d27dymkl0d7xsb.cloudfront.net/images/logos/niceincontact-7b119b4f.svg',
              'https://d27dymkl0d7xsb.cloudfront.net/images/logos/activecampaign-5ce8aff2.png',
            ].map(src => (
              <Box px={8} py={6}>
                <Box as="img" src={src} mw={197} mh={48} />
              </Box>
            ))}
          </Box>
        </Box>
      </Gutter>
    </Box>
  )
}
