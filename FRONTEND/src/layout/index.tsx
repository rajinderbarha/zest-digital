import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const Layout = ({children,data}:{children:React.ReactNode,data?:any}) => {
  console.log("data",data)
  return (
    <div>
        <Header/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout