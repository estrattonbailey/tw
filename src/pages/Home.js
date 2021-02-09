import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { hypostyle } from 'hypostyle'
import presets from 'hypostyle/presets'
import { Hypo, Box } from '@hypobox/react'
import { document } from 'presta/document'

import { Nav } from '@/src/components/Nav'
import { Hero } from '@/src/components/Hero'
import { Logos } from '@/src/components/Logos'

export function getStaticPaths () {
  return [ '/' ]
}

export function template (context) {
  return (
    <>
      <Nav />
      <Hero />
      <Logos />
    </>
  )
}

export function render (Page, context) {
  const hypo = hypostyle({
    ...presets,
    tokens: {
      ...presets.tokens,
      color: {
        body: '#2E3280',
        primary: '#5B63FE',
        primaryDark: '#424DFF',
        secondary: '#686D86',
        placeholder: '#8D91A5',
        outline: '#CCD2DA',
        background: '#F8FAFC',
        white: '#FFFFFF',
        error: '#EC386E',
        warning: '#FFA13C',
        warningDark: '#F48A17',
        success: '#2ABE75',
        successDark: '#1EA161',
        highlight: '#57BEFF',
        highlightDark: '#068CFF',
      },
      fontFamily: {
        roboto: '"Roboto", sans-serif',
        mono: '"Roboto Mono", monospace',
      },
      fontSize: ['32px', '32px', '21px', '18px', '16px', '14px', '12px'],
      lineHeight: ['1.15', '1.15', '1.2', '1.3', '1.4', '1.5', '1.5'],
    },
    shorthands: {
      ...presets.shorthands,
      mh: {
        properties: ['maxHeight'],
        unit: presets.shorthands.mw.unit,
      }
    },
    macros: {
      ...presets.macros,
      mxa: {
        mx: 'auto',
      },
      caps: {
        textTransform: 'uppercase',
      },
      link: {
        color: 'inherit',
        textDecoration: 'underline',
        '&:hover': {
          textDecoration: 'none',
        }
      }
    },
  })

  hypo.injectGlobal({
    'html, body': {
      m: 0,
      c: 'body',
      ff: "'Roboto', -apple-system, system-ui, BlinkMacSystemFont, sans-serif",
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
    },
    '*, *::before, *::after': {
      boxSizing: 'border-box',
    },
    'h1, h2, h3, h4, h5, h6, p, ol, ul': {
      m: 0,
      p: 0,
      font: 'inherit',
      color: 'inherit'
    }
  })

  const html = renderToStaticMarkup(
    <Hypo value={hypo}>
      <Page {...context} />
    </Hypo>
  )

  context.props.sheet = hypo.flush()

  return html
}

export function createContent (context) {
  return document({
    title: 'Truework',
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto+Mono:400,700|Roboto:400,400i,500,700,700i,900' },
      ],
      style: [
        { id: 'hypo', children: context.props.sheet }
      ]
    },
    body: context.props.content,
  })
}
