# TSDX React User Guide

## Este es un paquete de prueba de despligues en NPM


### Margarita Sing

## Ejemplo
```
import {ProductCart, ProductImage, ProductTitle title,ProductButton} from 'lfmm-product-cart'

```

```
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
```
