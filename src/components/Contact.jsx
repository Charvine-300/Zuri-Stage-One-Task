import '../assets/styles/contact.css'
import { useForm } from 'react-hook-form'
import { useState } from 'react';


const Contact = () => {
  const [check, setCheck] = useState(0.5)

  const checkBox = (e) => {
    if (e.target.checked === true) {
      setCheck(1)
    }

    else {
      setCheck(0.5)
    }
  }

  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = data => { 
    setCheck(0.5)
    reset()
  }



  return ( 
    <>
      <div className="contact-wrapper">
        <h1> Contact Me </h1>  
        <p className="contact-info">
          Hi there, contact me to ask me 
          about anything you have in mind.
        </p>

        {/* Form */}
        <form action="" method='POST' className='contact-form' onSubmit={handleSubmit(onSubmit)}>
          <div id="name-wrapper">
            <div className="input-wrapper">
              <label htmlFor="first_name"> First name </label>
              <input 
                type="text" 
                id="first_name" 
                placeholder='Enter your first name' 
                {...register("firstName", { required: true })}
                aria-invalid={errors.firstName ? "true" : "false"} 
              />
              {errors.firstName?.type === 'required' && <p role="alert" className='required'>First name is required</p>}
            </div>
            <div className="input-wrapper">
              <label htmlFor="last_name"> Last name </label>
              <input 
                type="text" 
                id="last_name" 
                placeholder='Enter your last name' 
                {...register("lastName", { required: true })}
                aria-invalid={errors.lastName ? "true" : "false"} 
              />
              {errors.lastName?.type === 'required' && <p role="alert" className='required'>Last name is required</p>}
            </div>
          </div>    

          <label htmlFor="email"> Email </label>
          <input 
            type="email" 
            id="email" 
            placeholder='yourname@email.com' 
            {...register("email", { required: true })}
            aria-invalid={errors.email ? "true" : "false"} 
          />
          {errors.email?.type === 'required' && <p role="alert" className='required'>Email address is required</p>}
          <div className="spacer"></div>

          <label htmlFor="message" id="message"> Message </label>
          <textarea 
            id="message" 
            cols="30" 
            rows="5" 
            placeholder="Send me a message and I'll reply you as soon as possible..."
            {...register("message", { required: true })}
            aria-invalid={errors.message ? "true" : "false"} 
          ></textarea>
          {errors.message?.type === 'required' && <p role="alert" className='required'> Please enter a message </p>}
          <div className="spacer"></div>
            
          <label htmlFor='agreement' id='agreement-checkbox'> 
            <input 
              type="checkbox" 
              id="agreement" 
              onClick={(e) => checkBox(e)}
              {...register("checkbox", { required: true })}
              aria-invalid={errors.checkbox ? "true" : "false"}
            />
            You agree to providing your data to Chidera who may contact you.
          </label>
          
          <button 
            id="btn__submit" 
            type='submit'
            style={{'opacity': `${check}`}}
            disabled={check === 1 ? false : true}
          > Send message </button>
        </form>
      </div>
    </>
  );
}
 
export default Contact;