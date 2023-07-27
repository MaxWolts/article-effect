import BoxList from "./BoxList"
const Services = () => {

	return (
		<div>
			<h4 className="text-h4responsive font-serif">Services</h4>
			<div className="mt-1">
				<ul>
					<BoxList title={'Brand'} items={['example1', 'example2', 'example3', 'example4']}/>
					<BoxList title={'Digital'} items={['example1', 'example2', 'example3', 'example4']}/>
				</ul>
			</div>
		</div>
	)
}

export default Services