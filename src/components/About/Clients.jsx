import AppearBox from "../AppearBox/AppearBox"
const Clients = () => {
	return (
		<div>
			<h4 className="text-h4responsive font-serif">Clients</h4>
			<div className="mt-1">
				<AppearBox delay={1000} list={true}>
					<li>example</li>
					<li>example</li>
					<li>example</li>
					<li>example</li>
					<li>example</li>
					<li>example</li>
					<li>example</li>
					<li>example</li>
				</AppearBox>
			</div>
		</div>
	)
}

export default Clients