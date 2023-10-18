import React from 'react'
import Image from 'next/image'
import logo from '../public/images/vgyan.jpeg'
import Head from 'next/head'

function Logo() {
  return (
    <>
    <Head>
        {/* Set the page title and meta description for SEO */}
        <title> Vgyan.io</title>
        <meta name="description" content="Vgyan.io Logo" />
        {/* Add other SEO-related meta tags here */}
         {/* JSON-LD structured data for Article */}
         <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ImageObject",
              "headline": "Vgyan.io Logo",
            }
          `}
        </script>

      </Head>
    <div>
      <Image src={logo} alt='logo' />
    </div>
    </>
  )
}

export default Logo
