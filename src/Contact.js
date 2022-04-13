import {useState} from "react"
import emailjs from "emailjs-com";
import './index.css';
function Contact() {
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    function submit(){
        const service_id = "service_x4ln78k";
        const template_id = "template_0mrjrv4";
        const user_id = "QN-4Ed8CmKdjYqx2D";
        const template_params = {userName, email, message};

        emailjs.send(service_id, template_id, template_params, user_id)
    }
    return (

        <div>

           <input className = "body" type = "text" placeholder = "Your Name" onChange = {(e) => setUserName(e.target.value)}/>
           <input className = "body" type = "text" placeholder = "Your Email" onChange = {(e) => setEmail(e.target.value)}/>
           <textarea className = "body" placeholder = "Type message here" onChange = {(e) => setMessage(e.target.value)}/>
           <button className = "body" onClick = {submit}> Submit Message </button>
        </div>

        
    )
}

export default Contact;