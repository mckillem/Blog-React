import "./Contact.css";
import {useState} from "react";
export const Contact = () => {
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	//	todo: pokus. Změnit název funkce
	//  obsah emailu, který se odešle na zadaný email (implementovat)
	const emailToSend = (email, message) => {
	  return (
		  <>
		  	<h1>Obsah emailu:</h1><br/>
			  {message}<br/>
			  <h2>Z emailu</h2><br/>
			  {email}
		  </>
	  )
	}

	const handleSubmit = (event) => {
		event.preventDefault();

		emailToSend(email, message);
		// console.log(email)
		// console.log(message)
		console.log(emailToSend().props)

		setEmail("");
		setMessage("");
	}
	return (
		<>
			<form onSubmit={handleSubmit}>
				<label htmlFor="email">Tvůj email</label><br/>
				<input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/><br/>
				<label htmlFor="message">Tvůj vzkaz</label><br/>
				<textarea name="" id="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea><br/>
				<input type="submit" value="Odeslat"/>
			</form>
		</>
	);
};