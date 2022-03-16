import instance from "./instance"
export const list = () =>{
     const url = './products';
     return instance.get(url);
 }
//  export const remove = () =>{
//     const url = `/products/${id}`;
//     return instance.delete(url);
// }
