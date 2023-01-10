# lfmm-product-card

Este es un paquete de pruebas de despliegue en NPM, del curso de React Ts

### Margarita Sing

## Ejemplo
```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'do-product-card';
```

```
<ProductCard 
    product={ product }
    initialValues={{
        count: 6,
        // maxCount: 10,
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