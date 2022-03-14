import { useState } from 'react'

const useInput = (validation) => {
  const [value,setValue] = useState('')
  const [inputTouched,setInputTouched] = useState(false)

  const  valueIsValid = value.trim() !== '';
  const valueInputIsInValid = !valueIsValid && inputTouched

  const inputValidRegex = validation.test(value)
  const validateRejex = !validation.test(value) && inputTouched

 let classInput = valueInputIsInValid || validateRejex  ? 'form-control invalid' : 'form-control'
  return{
      onChange : (e)=>{
         setValue(e.target.value)   
      },
      onBlur : (e) =>{
          setInputTouched(true)
      },
      onClear : ()=>{
        setValue('')
        setInputTouched(false)
      },
      valueIsValid,
      valueInputIsInValid,
      inputTouched,
      validateRejex,
      inputValidRegex,
      value,
      classInput
  }
}

export default useInput
