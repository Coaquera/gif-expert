import { useState } from "react";

export const useForm = (initialForm={}) => {
   const [formState, setformState] = useState(initialForm);
  
   //esto es muy especifico
  //const {username,email,password} = formState;


  const onResetForm = () =>{
    setformState(initialForm);
  }

  const onInputChange = ({target}) =>{
    const {name,value} = target;
    setformState({
        ...formState,
        //propiedad computada de los objetos
        [name]:value,
    })
  }

  return {
    ...formState,//regresa todos los elementos del form
    formState,
    onInputChange,
    onResetForm,

  }
}
