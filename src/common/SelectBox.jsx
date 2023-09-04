import { useState } from "react"


const SelectBox = () => {

    const [selectOption, setSelectOption] = useState("option1");

    const handleSelectBox = (event) => { 

        setSelectOption(event.target.value);
        console.log(setSelectOption);
    }



  return (
    <div>SelectBox
    <label>
        Select an option :
        <select value={selectOption} onChange={handleSelectBox}>
            <option value="option1"> option 1</option>
            <option value="option2"> option 2</option>
            <option value="option3"> option 3</option>
            <option value="option4"> option 4</option>
 

        </select>
        <p> Selected Option  : {selectOption}</p>
    </label>


    </div>
  )
}

export default SelectBox