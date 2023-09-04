import { useRef } from "react";

const Uncontrolled = () => {
  // init des variables
  const selectRef = useRef(null);
  const checkboxRef = useRef(null);
  const inputRef = useRef(null);

  const handleSubmit = (event) => {

    event.preventDefault();
    
    console.log("Input value", inputRef.current.value);
    console.log("Select value", selectRef.current.value);
    console.log("Checkbox value", checkboxRef.current.value);
  };

  return (
    <div>
      Uncontrolled :
      <form onSubmit={handleSubmit}>
        {/* saisez un nom */}
        <label>
          <p>Nom :</p>
          <input ref={inputRef} type="text" />
        </label>

        {/* menu de sélection */}
        <p>
          <label> Couleur favorie :
            <select ref={selectRef}>
              <option value="Rouge"> Rouge </option>
              <option value="vert"> Vert </option>
              <option value="blue"> Bleu </option>
            </select>
          </label>
          </p>
          
        {/*  menu  selection de boite */}
        <label> Do you like React?
          <input ref={checkboxRef} type="checkbox" />
        </label>


        <br/>
        <br/>
        <p>
          
          <button type="submit">Submit</button>
        </p>
      </form>
    </div>
  );
};

export default Uncontrolled;
