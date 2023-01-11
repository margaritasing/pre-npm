# lfmm-product-card

Este es un paquete de pruebas de despliegue en NPM, del curso de React Ts

### Margarita Sing

## Ejemplo

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'lfmm-product-card';

Ejemplo del producto : const product = {
                            id:'1',
                            title:'Nombre - Card',
                            img:'./imagen.png'
                        }

```

```
<ProductCard 
    product={ product }
    initialValues={{
        count: 6,
         maxCount: 10,
    }}
>
    {
        ({ reset, count, isMaxCountReached, maxCount, increaseBy  }) => (
            <>
                <ProductImage />
                <ProductTitle />
                <ProductButtons />
            </>
        )
    }
</ProductCard>
```

## Configuraciòn de un carrito de compras 