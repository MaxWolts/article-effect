import Services from "./Services"
import Clients from "./Clients"
import icon from '../../assets/react.svg'

const About = () => {
	return (
		<section aria-label="about">
			<div>
				<img src={icon} alt="" />
			</div>
			<div>
				<h4>We envision the digital experience from the top down.</h4>
				<p>Our services build better brands holistically across design, development and strategy. We work closely with clients from start to finish, exploring their new endeavors and reimagining existing ones. </p>
			</div>
			<Clients/>
			<Services/>
		</section>
	)
}

export default About