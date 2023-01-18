import React from 'react'

const form = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, form.current, process.env.PUBLIC_KEY)
        .then((result) => {
            console.log("message sent!", result.text);
            alert("Your message has been sent!")
            e.target.reset()
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <div>form</div>
  )
}

export default form