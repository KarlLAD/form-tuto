import { useState } from "react"


const MyForm = () => {

    const [inputValue, setInputValue] = useState('');
    const [inputError, setInputError] = useState(null);

    const handleInputChange = (event) => { 


        const value = event.target.value ;

        setInputValue(value);
        console.log(setInputValue);

        // longueur du text saisie est inférieur à 5 mots
        if (value.length < 5) {
            setInputError("Vous devrez entrée moins de 5 caractères") ;
            
        } else {
            setInputError(null);
            
        }
    }

  const handleSubmit = (event) => { 
    
    event.preventDefault();
    if (inputValue.length >= 5) {
        //submit form
        console.log("ok");
        
    } else {
        setInputError("Vous devrez entrée moins de 5 caractères")
    }

// code problème :
        // function handleSubmit(event) {
        //     event.preventDefault();
        //     if (inputValue.length >= 5) {
        //         //submit form
        //         console.log("ok");
                
        //     } else {
        //         setInputError("Vous devrez entrée moins de 5 caractères")
        //     }
            
            
        // }
     }

  return (
    <div>MyForm :
    
        <form onSubmit={handleSubmit}>
            <label>
                Fruit :
                <input  type="text"  value={inputValue}  onChange={handleInputChange} />

            </label>
            <br/>
            <br/>
            {inputError && <div style={{ color: 'red' }}>{inputError}</div>}

            <button type="submit" >Submit</button>


        </form>
    
    
    
    </div>
  ) ;
}

export default MyForm