import {ProductCard, ProductButton, ProductImage, ProductTitle } from "../components";
import { products } from "../data/data";

import '../styles/custom-styles.css';

const product = products[0];


export const Shoppingpage = () => {   

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />                       
                <ProductCard key={product.id} 
                product={ product } 
                className="bg-dark"
                initialValues={{
                    count:4,
                    maxCount:10
                }}                                                     
                >  
                {
                    ( {reset, count, increaseBy, isMaxCountReached, maxCount} ) => (
                        <>
                            <ProductImage className='custom-image'/>
                            <ProductTitle title={"Coffee"} className='text-blanco'/>    
                            <ProductButton className="custom-buttons"/>  

                            <button onClick={ reset }>Reset</button> 
                            <button onClick={() => increaseBy(-2)}>-2</button> 

                            {
                                !isMaxCountReached ? <button onClick={() => increaseBy(+2)}>+2</button> : '' 
                            }

                            {
                                (!isMaxCountReached && <button onClick={() => increaseBy(+2)}>+2</button>)
                            }
                            <span className="espacio">{count}-{maxCount}</span>                    
                        </>
                    )
                }                
                </ProductCard>              
        </div>       
        /* Se usan diferentes maneras para exportar los componentes */
    )
}