import  imageUrlBuilder  from "@sanity/image-url";          //  this is used to get the url of the images 
import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "dexthfb7",
  dataset: "production",
  apiVersion: "2022-03-07",
  useCdn: false,
};

const client = createClient(config);

export default client;


const builder  =  imageUrlBuilder(client)

export function urlFor(source: any){
    return builder.image(source)                // image is am method to get  the images from the sanity 
}




// import { createClient } from "next-sanity";
// import  imageUrlBuilder  from "@sanity/image-url";          //  this is used to get the url of the images 


// export const client = createClient({
//   projectId: "dexthfb7",
//   dataset: "production",
//   apiVersion: "2022-03-07",
//   useCdn: false,
// });

// const builder  =  imageUrlBuilder(client)

// export function urlFor(source: any){
//     return builder.image(source)                // image is am method to get  the images from the sanity 
// }

