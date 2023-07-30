import AppearBox from "../AppearBox/AppearBox"

const Footer = () => {
	return (
		<footer>
			<AppearBox delay={3000} scrollerStart={'top bottom'} className={"grid grid-cols-2 p-4 border-t border-t-principal text-xl lg:grid-cols-4 lg:px-8"}>
				<div>
					<span>🌟2023 Article</span>
				</div>
				<div >
					<span>Have a great day</span>
				</div>
				<div >
					<span>thisisnota@mail.com</span>
				</div>
				<div className="flex gap-4 flex-col lg:flex-row">
					<span>Instagram</span>
					<span>Privacy</span>
				</div>
			</AppearBox>
		</footer>
	)
}

export default Footer