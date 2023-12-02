import FormInput from '../components/Form/FormInput';
import './Contact.scss';
import React,{useState} from 'react'

const Contact = () => {
    const [values, setValues] = useState({
        username:"",
        email:"",
        birthday:"",
        password:"",
        confirmPassword:"",
       })
      
       const inputs = [
        {
          id:1,
          name:"username",
          type:"text",
          placeholder:"FULL NAME",
          errorMessage:"Full name should be 3-40 and shouldn't have any special character!",
    
          pattern: "^[A-Za-z0-9]{3,40}$",
          required:true
        },
        {
          id:2,
          name:"email",
          type:"email",
          placeholder:"EMAIL",
          errorMessage:"It should be a valid email-address!",
      
          required:true
        },
        {
          id:3,
          name:"birthday",
          type:"date",
          placeholder:"BIRTHDAY",
         
          required:true
        },
        
        
       ]
      
        const handleSubmit = (e)=>{
          e.preventDefault();
      
        }
      
        const onChange = (e)=>{
          setValues({...values, [e.target.name]: e.target.value})
        }
      
        console.log(values)

  return (
    <div className='contact-container'>
        <div className="contact-title">
            <h1>CONTACT US</h1>
        </div>
        <div className="contact-conetnt">
            <div className="contact-text">
                <h1>WE ARE HERE FOR YOU!</h1>
                <p>Curious about great tasting plant-based food? </p>
                <p>Just contact us</p>
            </div>
            <div className="contact-form">
            <form onSubmit={handleSubmit}>
      {inputs.map((input)=>(
        <FormInput 
           key={input.id} {...input} 
           value={values[input.name]} 
           onChange={onChange}/>
      ))}
      <div className="form-submit">
       <textarea cols={45} rows={8} placeholder='YOUR MESSAGE'></textarea>
       <button>Submit</button>
       </div>
     </form>
            </div>
        </div>
    </div>
  )
}

export default Contact