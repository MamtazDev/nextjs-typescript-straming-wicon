// import Main from '@/layouts/Main'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '@/styles/globals.css'
// import type { AppProps } from 'next/app'

// export default function App({ Component, pageProps }: AppProps) {
//   return <>
//   <Main>
//     <Component {...pageProps} />
//   </Main>
//   </>
// }


import Main from "@/layouts/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";

import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: any) {
  return (
    <>
    <Head>
   <title>VIDOE - Video Streaming Website HTML Template</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
   </Head>



      {Component.PageLayout ? (
        <Component.PageLayout>
          <Component {...pageProps} />
        </Component.PageLayout>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}