import '../styles/globals.css'
import { SessionProvider, useSession } from 'next-auth/react'



function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider>
      <useSession session={pageProps.session}>

        <Component {...pageProps} />
        
        


      </useSession>
    </SessionProvider>

    

  )
 
}

export default MyApp
