export default {
  github: 'https://github.com/L2-Technology/docs',
  docsRepositoryBase: 'https://github.com/L2-Technology/docs/blob/main',
  titleSuffix: ' – Sensei',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">Sensei</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        Enterprise-grade lightning network implementation
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Sensei Documentation: an enterprise-grade lightning node implementation" />
      <meta name="og:description" content="Sensei Documentation: an enterprise-grade lightning node implementation" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://nextra.vercel.app/og.png" />
      <meta name="twitter:site:domain" content="docs.l2.technology" />
      <meta name="twitter:url" content="https://docs.l2.technology" />
      <meta name="og:title" content="Sensei Documentation: an enterprise-grade lightning node implementation" />
      <meta name="og:image" content="https://nextra.vercel.app/og.png" />
      <meta name="apple-mobile-web-app-title" content="Sensei Documentation" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: <>L2 Technology © {new Date().getFullYear()}</>,
  unstable_faviconGlyph: '👋',
}
