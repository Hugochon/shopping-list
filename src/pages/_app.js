import { Container } from 'next/app'
import Header from './header'
import React from "react";

import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (

      <Component {...pageProps} />

  )
}
