import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { DataProvider } from '@/contexts/DataContext'
 
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DataProvider>
        <Component {...pageProps} />
      </DataProvider>
    </>
  )
}