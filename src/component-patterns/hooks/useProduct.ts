import { useEffect, useRef, useState } from 'react'
import { onChangeArgs, Product, InitialValues } from '../interfaces/interfaces';

interface useProductArgs {
  product:Product,
  onChange?: (args: onChangeArgs) => void,
  value?:number,
  initialValues?:InitialValues  
};

export const useProduct = ({onChange, product, value = 0, initialValues }: useProductArgs) => {

const [counter, setCounter] = useState(initialValues?.count || value);

const isMounted = useRef(false);

const isController = useRef( !!onChange );

console.log(initialValues)

const increaseBy = (value: number ) => { 

  if (isController.current) {
    return onChange!({
      count: value, product
    })    
  };

  let newValue = Math.max(counter + value , 0);
  if (initialValues?.maxCount) { //pregunta si el maxCount existe
    newValue = Math.min(newValue, initialValues.maxCount)   //si tiene voy a tomar el minimo de esos dos , y esa es la referencia, y luego ese es el valor que toma el setCounter
  };

  setCounter(newValue);

  onChange && onChange({ count: newValue, product });
}

const reset = () => {
  setCounter(initialValues?.count || value)
}

useEffect(() => {
  if (!isMounted.current) return
  setCounter(value)  
}, [value]);

useEffect(() => {
  isMounted.current = true;   
}, []);


  return {
    counter,
    isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
    maxCount:initialValues?.maxCount,
    
    increaseBy,
    reset
  };

}