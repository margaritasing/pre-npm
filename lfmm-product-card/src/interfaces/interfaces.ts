import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ProductTitleProps } from "../components/ProductTitle";
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductButtonProps } from "../components/ProductButton";


export interface Product {   
    id:string;
    title:string;
    img?:string;
};

export interface ProductContextProps {
  counter:number,
  maxCount?:number
  product:Product,

  increaseBy: (value: number) => void,
};

export interface ProductCardMainProps {
  ({ children, product }: ProductCardProps): JSX.Element;
  Title: (Props: ProductTitleProps) => JSX.Element;
  Image: (Props: ProductImageProps) => JSX.Element;
  Buttons: (Props:ProductButtonProps) => JSX.Element;
};

export interface onChangeArgs {
  product: Product, 
  count:number
};

export interface ProductInCart extends Product {
    count:number
};

export interface InitialValues {
  count?: number;
  maxCount?:number
};

export interface ProductCardHandlers {
  count:number;
  isMaxCountReached:boolean;
  maxCount?:number;
  product:Product;

  increaseBy:(value:number) => void;
  reset: () => void;
}