import Services from "./Services"
import Clients from "./Clients"
import icon from '../../assets/react.svg'
import ApearBox from "../ApearBox/ApearBox"
const About = () => {
	return (
		<section aria-label="about" className="z-20 relative bg-slate-950 grid grid-cols-2 lg:grid-cols-4 pt-8 px-8 lg:px-0 gap-y-4">
			
			<div className="hidden lg:block lg:border-r lg:border-r-principal lg:px-[4vw]">
				<ApearBox delay={0}>
					<img src={icon} alt="" />
				</ApearBox>
			</div>
			<div className="col-span-2 lg:col-span-1 lg:border-r lg:border-r-principal lg:px-[4vw]">
				<ApearBox delay={2200}>
					<h4 className="text-h4responsive font-serif mb-4">We envision the digital experience from the top down.</h4>
					<p>Our services build better brands holistically across design, development and strategy. We work closely with clients from start to finish, exploring their new endeavors and reimagining existing ones. </p>
				</ApearBox>
			</div>
			<div className="lg:border-r lg:border-r-principal lg:px-[4vw]">
				<ApearBox delay={2700}>
					<Clients/>
				</ApearBox>
			</div>
			<div className="lg:px-[4vw]">
				<ApearBox delay={3200}>
					<Services/>
				</ApearBox>
			</div>
		</section>
	)
}

export default About