import "./About.css";
export const About = () => {
	return (
		<>
			<h2>Záliby</h2>
			<p>Technologie, programování, pochody, hodnotný hovor</p>
			<h2>Moje tvorba</h2>
			<ul className="projects">
				<li><a href="https://github.com/mckillem/prepinaci-stranka">Jednoduché přepínání v Reactu</a></li>
				<li><a href="https://github.com/mckillem/Blog-React">Blog v Reactu</a></li>
			</ul>
		</>
	);
};