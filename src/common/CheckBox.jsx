import { useState } from "react"


const CheckBox = () => {
    // init variables

    const [isCheck, setIsCheck] = useState(false);
    const [isCheckPays, setIsCheckPays] = useState(false);


    // init handle

    const handleCheck = (event) => { 

        setIsCheck(event.target.checked);

        console.log(setIsCheck);
     }

     const handlePays = (event) => { 
            setIsCheckPays(event.target.checked);
            console.log(setIsCheckPays);
      }


  return (
    <div>CheckBox :

        <form>
            <label htmlFor="color">
                <input type="checkbox" name="color" checked={isCheck} onChange={handleCheck} />
                   Blue
            </label>
          { isCheck && <div>Blue is selected</div>}
    <br/>
    <br/>
    <br/>
    <label htmlFor="pays"> 

        <input  type="checkbox"  name="pays" checked={isCheckPays} onChange={handlePays}  />
        Pays
    </label>
    {isCheckPays && <div> Pays selectionné </div>}



        </form>

    </div>
  )
}

export default CheckBox