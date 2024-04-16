import * as React from 'react';
import Image from 'next/image';
import bars from '../../assets/images/bars-svgrepo-com.svg';
import { urlFor } from '../../../lib/sanity.client';
import Link from 'next/link';
import { HeaderType } from '../../../lib/interface';
import PropTypes from 'prop-types';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import barsIcon from '../../assets/images/bars-svgrepo-com.svg';
import logo from '../../assets/images/zest-logo_vector.png';
import { AppBar, Box, CssBaseline, Divider, Drawer, IconButton, List, Toolbar, Typography } from '@mui/material';



//                                                     {/* navbar for the mobile start */}
// interface DrawerAppBarProps {
//   window?: () => Window;
  
// }

const drawerWidth = 240;

const MobileViewHeader = (props:any) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <div className='screen-1-max:w-24 lg:w-28 xl:w-auto text-center  mx-auto'>
          <Image src={logo} alt="Site Logo" width={112} height={51} />
        </div>
      </Typography>
      <Divider />
      <List>
        <li className='custom-menu-items-class '>About</li>
        <li className='custom-menu-items-class '>Solutions</li>
        <li className='custom-menu-items-class '>Result</li>
        <li className='custom-menu-items-class '>Insights</li>
        <li className='custom-menu-items-class '>Resource</li>
        <a href="javascript:void(0)" className='inline-block mt-[5px] md:mt-[10px] max-w-max nav-button font-mono text-base px-21px py-[5px] bg-black text-white rounded-full  hover:bg-white hover:text-color-1 border border-color-1'>schedule a call</a>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className="main_padding">
    <Box className='pt-[10px] pb-[10px] md:pt-25px md:pb-21px screen-1-min:hidden  justify-between items-center main_container relative'>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { sm: 'block' } }}
          >
            <div className='screen-1-max:w-24 lg:w-28 xl:w-auto'>
              <Image src={logo} alt="Site Logo" width={112} height={51} />
            </div>
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: {} }}
          >
            <Image src={barsIcon} alt="menu" className="bars-icon" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block'},
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
    </div>
  );
};

MobileViewHeader.propTypes = {
  window: PropTypes.func,
};

                                                {/* navbar for the mobile end */}


const Header = ({ data }: { data: HeaderType[] }) => {

  const navMenu = {
    menu: {
      simple: 'flex gap-5 text-base font-mono border-black',
      responsive1: 'screen-1-max:hidden screen-1-max:flex-col screen-1-max:gap-0 screen-1-max:text-lg screen-1-max:absolute screen-1-max:top-90px screen-1-max:-right-1/3 screen-1-max:w-1/3 screen-1-max:z-10',
      responsive2: 'sm-max:w-auto screen-1-max:bg-color-1 screen-1-max:text-white screen-1-max:ps-5 screen-1-max:rounded-l-lg screen-1-max:h-[89vh]',
    },
    linkclass: 'screen-1-max:border-b screen-1-max:border-color-2 screen-1-max:ps-2 screen-1-max:pe-20 screen-1-max:py-3',
    btn: 'screen-1-max:block mt-20 hidden mx-auto font-mono text-base px-21px h-10 bg-white text-color-1 rounded-full hover:bg-color-1 hover:text-white hover:border-white border border-color-1 sm-max:mx-2',
  };

  return (
  <>
                                        {/* navbar for the desktop start */}
      {data?.map(((item,index)=>  {
        // console.log("header img", item.logo)

        return (

          <div className="main_padding">

          <div key={`header_${item.logo._id}`} className='screen-1-max:hidden  flex justify-between items-center pt-25px pb-21px main_container relative'>
            <div className='flex items-center gap-68px '>
              <div className='screen-1-max:w-24 lg:w-28 xl:w-auto'>
                <Link href={"/"}>
                  <Image src={urlFor(item.logo).url()} alt="Site Logo" width={112} height={51} />
                </Link>
              </div>
              <div id="nav-menus" className={`${navMenu.menu.simple} + ${navMenu.menu.responsive1} + ${navMenu.menu.responsive2}`}>
                {item.navItem.map((navItem, index) => (
                  <Link href={navItem.buttonLink} key={`navItem_${index}`} className={navMenu.linkclass}>{navItem.buttonName}</Link>
                ))}
              </div>
            </div>
            <div className="">
              <Link href={item.button.navLink} className='screen-1-max:hidden font-mono text-base px-21px py-[5px] bg-color-1 text-white rounded-full  hover:bg-white hover:text-color-1 border border-color-1'>{item.button.navName}</Link>
              {/* <FontAwesomeIcon icon={faBars} transform="grow-10" className='screen-1-max:block hidden' onClick={() => showMenu()} /> */}
              <Image src={bars} alt="bars" className='screen-1-max:block hidden screen-1-max:w-[23px] screen-1-max:h-[23px]' />
            </div>
          </div>
          </div>
        )
      })
    )}
                                          {/* navbar for the desktop end */}
                                          

      {/* <MobileViewHeader />   calling the responsive navbar */}

    </>
  )
};

export default Header;








