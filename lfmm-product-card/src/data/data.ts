import { Product } from "../interfaces/interfaces"

const product = {
    id:'1',
    title:'Coffee Mug - Card',
    img:'./coffee-mug2.png'
  }
  
  const product2 = {
      id:'2',
      title:'Coffee Mug - Meme',
      img:'./coffee-mug.png'
  }
  
  export const products: Product[] = [product, product2]