import "./Contact.css";
import {useState} from "react";
import emailjs from '@emailjs/browser';

export const Contact = () => {
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [name, setName] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();

		emailjs.sendForm('service_1fknu2q', 'template_bimdgaa', event.target, 'vuXiO2Tx7NHucS56d')
			.then((result) => {
				console.log(result.text);
				// window.location.reload()
			}, (error) => {
				console.log(error.text);
			});

		setEmail("");
		setMessage("");
		setName("");
	}
	return (
		<>
			<form onSubmit={handleSubmit}>
				<label htmlFor="name">Tvoje jméno</label><br/>
				<input type="text" id="name" name="from_name" value={name} onChange={(e) => setName(e.target.value)}/><br/>
				<label htmlFor="email">Tvůj email</label><br/>
				<input type="email" id="email" name="from_email" value={email} onChange={(e) => setEmail(e.target.value)}/><br/>
				<label htmlFor="message">Tvůj vzkaz</label><br/>
				<textarea name="message" id="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea><br/>
				<input type="submit" value="Odeslat"/>
			</form>
		</>
	);
};