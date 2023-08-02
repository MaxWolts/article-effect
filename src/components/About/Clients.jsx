import AppearBox from "../AppearBox/AppearBox"
const Clients = () => {
	return (
		<div>
			<h4 className="text-h4responsive font-serif">Clients</h4>
			<div className="mt-1">
				<AppearBox delay={1000} list={true}>
					<li>Archewell</li>
					<li>Camila Coelho</li>
					<li>Diane Von Furstenberg</li>
					<li>Gee Beauty</li>
					<li>NBA</li>
					<li>Pousaz Philanthropies</li>
					<li>Travalyst</li>
					<li>The Tig</li>
				</AppearBox>
			</div>
		</div>
	)
}

export default Clients