import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import { getHeader } from '../../sanity.query'

const Layout = ({children,headerdata, footerdata}:{children:React.ReactNode,headerdata?:any, footerdata?:any}) => {
  
  
  return (
    <div>
        <Header data={headerdata}/>
        {children}
        <Footer />
    </div>
  )
}

export default Layout

