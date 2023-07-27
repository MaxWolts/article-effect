import { useEffect, useState, useRef } from "react"
import PropTypes from 'prop-types';
import { gsap } from "gsap";

const BoxList = ({title, items}) => {
	const [openCloseState, setOpenCloseState] = useState(false)
	const stateHandle = () => setOpenCloseState(!openCloseState)
	const refContainer = useRef(null)
	
	useEffect(() => {
		const container = refContainer.current
		const items = container.children[0]
		const length = items.children.length
		const firstItem = items.firstChild
		const contentHeight = firstItem.clientHeight * length
		console.log();
		if (openCloseState) {
			gsap.to(container, {
				height: contentHeight,
				duration: .5
			})
		} else {
			gsap.to(container, {
				height: 0,
				duration: .5
			})
		}
	}, [openCloseState])

	return (
		<li>
			<button onClick={stateHandle}>({openCloseState ? '-' : '+'}) {title}</button>
			<div ref={refContainer} className="overflow-hidden h-0">
				<ul>
					{items.map(item => <li key={item}>{item}</li>)}
				</ul>
			</div>
		</li>
	)
}

BoxList.propTypes = {
	title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default BoxList