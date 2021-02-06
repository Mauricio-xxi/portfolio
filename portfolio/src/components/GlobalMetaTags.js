import React, { memo } from 'react'
import Helmet from 'react-helmet'

export const GlobalMetaTags = memo(() => (
    <Helmet
        titleAttributes={{ itemprop: 'name' }}
        htmlAttributes={{
            itemscope: '',
            itemtype: 'http://schema.org/WebPage',
        }}
    >
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#FFFFFF" />
    </Helmet>
))
GlobalMetaTags.displayName = 'GlobalMetaTags'
