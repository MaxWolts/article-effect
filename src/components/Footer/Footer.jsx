const Footer = () => {
	return (
		<footer className="grid grid-cols-2 p-4 border-t border-t-principal text-xl lg:grid-cols-4 lg:px-8">
			<div>
				<span>🌟2023 Article</span>
			</div>
			<div>
				<span>Have a great day</span>
			</div>
			<div>
				<span>thisisnota@mail.com</span>
			</div>
			<div className="flex gap-4 flex-col lg:flex-row">
				<span>Instagram</span>
				<span>Privacy</span>
			</div>
		</footer>
	)
}

export default Footer