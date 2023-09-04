import { useState } from "react"


const InputForm = () => {
    // init des varaibles

    const [inputValue, setInputValue] = useState('');

    const [prenomValue, setPrenomValue] = useState('') ;

    // init des handles 

    const handleChange = (event) => {

        setInputValue(event.target.value);

        console.log(setInputValue);
     }

     const handleChangePrenom = (event) => { 

        setPrenomValue(event.target.value);

        console.log(setPrenomValue);
      }



  return (
    <div>InputForm
        <form>

            <label>Input Value
            <input type="text" value={inputValue} onChange={handleChange} />

            </label>
            <p> inputValue : {inputValue}</p>

            <label>
                    Prenom :
                    <input type="text" value={prenomValue} onChange={handleChangePrenom}/>
            </label>
            <p>prenomValue : {prenomValue}</p>

        </form>
    
    
    </div>
  )
}

export default InputForm