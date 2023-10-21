import "./Contact.css";
export const Contact = () => {
	return (
		<>
			<form>
				<label htmlFor="email">Tvůj email</label><br/>
				<input type="email" id="email"/><br/>
				<label htmlFor="message">Tvůj vzkaz</label><br/>
				<textarea name="" id="message"></textarea><br/>
				<input type="button" value="Odeslat"/>
			</form>
		</>
	);
};