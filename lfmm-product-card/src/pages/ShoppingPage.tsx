import {ProductCard, ProductButton, ProductImage, ProductTitle } from "../components";
import { products } from "../data/data";



const product = products[0];


export const Shoppingpage = () => {   

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />                       
                <ProductCard key={product.id} 
                product={ product }                 
                initialValues={{
                    count:4,
                    maxCount:10
                }}                                                     
                >  
                {
                    ( {reset, count, increaseBy, isMaxCountReached, maxCount} ) => (
                        <>
                            <ProductImage />
                            <ProductTitle title={"Coffee"} />    
                            <ProductButton />  
                                             
                        </>
                    )
                }                
                </ProductCard>              
        </div>       
        /* Se usan diferentes maneras para exportar los componentes */
    )
}