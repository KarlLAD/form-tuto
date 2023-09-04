import { useState } from "react"


const Multiple = () => {

// init variables
const [formData, setFormData] = useState({ name: "", email : "", message : ""}) ;


const handleChange = (event) => { 

    const {name, value} = event.target;

    setFormData((prevFormData)=> ( { ...prevFormData, [name] : value }) );
    console.log("setFormData" , setFormData);
 }


 const handleSubmit = (event) => { 

    event.preventDefault();
    alert( `Name : ${formData.name}, Email : ${formData.email}, Message: ${formData.message}`);

  }



  return (
    <div>Multiple :
        <form onSubmit={handleSubmit}>
        {/* nom */}
        <label htmlFor="name">Nom :</label>
        <input  type="text "  id="name"  name="name"  value={formData.name} onChange={handleChange}/>
        <br/>

        {/* email */}
        <label htmlFor="email">Email :</label>
        <input  type="email "  id="email"  name="email"  value={formData.email} onChange={handleChange}/>
        <br/>
        <br/>

        {/* message */}
        <label htmlFor="message">Message :</label>
        <textarea    id="message"  name="message"  value={formData.message} onChange={handleChange} />
        <br/>

        <button type="submit" >Submit</button>

        </form>
    
    </div>
  )
}

export default Multiple