import AppearBox from "../AppearBox/AppearBox"

const Footer = () => {
	return (
		<footer className="mt-8">
			<AppearBox delay={3000} scrollerStart={'top bottom'} className={"grid grid-cols-2 p-4 border-t border-t-principal text-xl lg:grid-cols-4 lg:px-8"}>
				<div>
					<span>🌟2023 Article</span>
				</div>
				<div >
					<span>Have a great day</span>
				</div>
				<div >
					<span className="hidden lg:block">thisisnota@mail.com</span>
					<span className="lg:hidden">Get In Touch</span>
				</div>
				<div className="flex lg:gap-4 flex-col lg:flex-row">
					<span>Instagram</span>
					<span>Privacy</span>
				</div>
			</AppearBox>
		</footer>
	)
}

export default Footer