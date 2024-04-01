import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const Layout = ({children,headerdata, footerdata}:{children:React.ReactNode,headerdata?:any, footerdata?:any}) => {
  // console.log("data",data)
  return (
    <div>
        <Header data={headerdata}/>
        {children}
        <Footer data={footerdata}/>
    </div>
  )
}

export default Layout

