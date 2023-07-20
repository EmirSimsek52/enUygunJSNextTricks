
import React,{Suspense } from 'react'
import "styles/globals.css"
import { NavigationEvents } from './components/navigation-events'
import { RatingContextProvider } from './context/theme'
import Navbar from './components/Navbar'
import Search from './components/search'
const Layout = ({children}) => {
    return (
      <html lang='en'>
          <head>
                <title>NextApp</title>
           
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </head>
          <body className="" >
            <Navbar/>
   
             <RatingContextProvider>
                 {children}
             </RatingContextProvider>
          </body>
      </html>
    )
  }
  
  export default Layout