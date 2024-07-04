import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { FooterType, HeaderType } from '../../lib/interface'

const Layout = ({ children, headerdata, footerdata }: { children: React.ReactNode, headerdata: HeaderType[], footerdata: FooterType[] }) => {
  return <div>
    <Header data={headerdata} />
    {children}
    <Footer data={footerdata} />
  </div>
}

export default Layout;