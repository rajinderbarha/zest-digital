// import React, { useEffect, useState } from 'react'
// import climate_action from '../../assets/images/climate_action.png'
// import earth from '../../assets/images/earth.png'
// import Image from 'next/image'
// import classes from './Climate_action.module.css'
// import { ClimateAction,  SocialMediaDarkType } from '../../../lib/interface'
// import { urlFor } from '../../../lib/sanity.client'

// export const SocialMediaDark = () =>{
//     const [data, setData] = useState()


//     useEffect(() => {
//       const fetchData = async () => {
//         try {
//           const proxyUrl = 'https://cors-anywhere.herokuapp.com/'; // Example CORS proxy service
//           const apiUrl = 'https://dexthfb7.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27socialmedia%27%5D+%7B%0A++lightsocial%5B%5D+%7B%0A++++socialImage%2C%0A++++socialLink%0A++%7D%2C%0A++darksocial%5B%5D+%7B%0A++++socialImage%2C%0A++++socialLink%0A++%7D%0A%7D%0A';
//           const requestUrl = proxyUrl + apiUrl;
    
//           const response = await fetch(requestUrl);
//           console.log("socialmedia   response--------++++++++++", response);
//           const data = await JSON.stringify(response);
//           console.log("socialmedia--------++++++++++", data);
//         } catch (error) {
//           console.error('Error fetching data:', error);
//         }
//       };
    
//       fetchData();
//     }, []);
    
//     return (
       
//          <div className=" flex gap-5">
//                 {/* {item.socialmedia.map((socialImg, index) => (
//                   <div key={`${index}_socialImg`} className="">
//                     {socialImg.lightsocial.map((light,path)=>(

                   
//                     <Link href={light.socialLink}>
//                       <Image
//                         src={urlFor(light.socialImage).url()}
//                         width={50}
//                         height={50}
//                         alt=""
//                       />
//                     </Link>
//                      ))}
//                   </div>
//                 ))} */}
//               </div>
//     )
// }
