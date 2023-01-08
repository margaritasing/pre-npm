import { ProductCard as ProductCardComponent } from './ProductCard';

import { ProductTitle } from './ProductTitle';
import { ProductImage } from './ProductImage';
import { ProductButton } from './ProductButton';
import { ProductCardMainProps } from '../interfaces/interfaces';

/* export { ProductCard } from './ProductCard'; */
export { ProductButton } from './ProductButton';
export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitle';


/* Aqui se usan los import */
 export const ProductCard: ProductCardMainProps = Object.assign(ProductCardComponent,{
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButton
 })


 export default ProductCard;