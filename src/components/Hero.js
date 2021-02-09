import React from 'react'
import { Box } from '@hypobox/react'

import { Gutter } from '@/src/components/Gutter'
import { H1, H2, H4, P } from '@/src/components/Typography'

export function Hero () {
  return (
    <Gutter>
      <Box mw={1360} mx="auto">
        <Box f aic jcb fw>
          <Box w={[1, 1, 1/2]} py={[4, 8, 16]}>
            <H1 fs='3.35rem' mb={5}>Employment & Income Verification, Simplified.</H1>
            <H2 fe={4} c="secondary" mw={[1, 1, 8/10]}>Truework allows you to verify any employee – quickly and accurately</H2>

            <Box f fw mt={12} mx={-6}>
              {[
                {
                  title: 'Employers',
                  desc: 'Automate manual workflows and save your HR team hundreds of hours per year.',
                  smallCta: 'Learn More',
                  largeCta: 'Request a Demo',
                  color: 'highlight',
                },
                {
                  title: 'Verifiers',
                  desc: 'Submit an employment or income verification for any US-based employee.',
                  smallCta: 'Request a Demo',
                  largeCta: 'Start a Verification',
                  color: 'success',
                },
              ].map(b => (
                <Box px={3}>
                  <Box bg="white" css={{ borderRadius: '5px', boxShadow: '0 6px 12px 0 rgba(1,46,122,0.11)', overflow: 'hidden' }} mw={275}>
                    <Box px={4} py={5} c="secondary">
                      <H4 mb={1} c="body">{b.title}</H4>
                      <P mb={1}>{b.desc}</P>
                      <Box as="a" href="#0" link>{b.smallCta}</Box>
                    </Box>
                    <Box bg={b.color} px={4} py={5} f aic jcb c="white" fe={5} caps>
                      {b.largeCta}
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>

            <P c="secondary" mt={12}>
              Are you an employee?{' '}
              <Box as="a" href="#0" link>
                Request Letter of Employment
              </Box>
            </P>
          </Box>

          <Box w={[1, 1, 1/2]} f jcc>
            <Box as="img" src="https://d27dymkl0d7xsb.cloudfront.net/images/illustrations/truework-hero-figure-32499e1b.svg" />
          </Box>
        </Box>
      </Box>
    </Gutter>
  )
}
