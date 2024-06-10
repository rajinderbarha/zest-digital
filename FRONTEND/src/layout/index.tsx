import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import { FooterType, HeaderType } from '../../lib/interface'
// import { getHeader } from '../../sanity.query'

const Layout = ({children,headerdata, footerdata}:{children:React.ReactNode,headerdata:HeaderType[], footerdata:FooterType[]} ) => {
  
  return (
    <div>
        <Header data={headerdata}/>
        {children}
        <Footer data={footerdata} />
    </div>
  )
}

export default Layout;