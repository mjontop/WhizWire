import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast';
import { SessionProvider } from 'next-auth/react';

import Layout from '@WhizWire/components/Layout'
import LoginModal from '@WhizWire/components/modals/LoginModal'
import RegisterModal from '@WhizWire/components/modals/RegisterModal'
import '@WhizWire/styles/globals.css'
import EditModal from '@WhizWire/components/modals/EditModal';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Toaster />
      <RegisterModal />
      <LoginModal />
      <EditModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}
