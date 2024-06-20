// import { client } from "@/sanity/lib/client";

// export async function getProducts() {
//     const query = `*[_type == "curtain"] {
//     _id,
//     title,
//     description,
//     "imageUrl": image.asset->url,
//     price,
//     size,
//     material,
//     color,
//     availability
//   }`;

//     try {
//         const curtains = await client.fetch(query);
//         console.log(curtains);
//         return curtains;
//     } catch (error) {
//         console.log('Error fetching curtains', error);
//     }
// }