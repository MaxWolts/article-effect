import { useEffect, useState, useRef } from "react"
import PropTypes from 'prop-types';
import { gsap } from "gsap";

const BoxList = ({title, items}) => {
	const [openCloseState, setOpenCloseState] = useState(false)
	const stateHandle = () => setOpenCloseState(!openCloseState)
	const refContainer = useRef(null)
	const controlFirstOpenBox = useRef(false)
	
	useEffect(() => {
		const container = refContainer.current
		const items = container.children[0]
		const length = items.children.length
		const firstItem = items.firstChild
		const contentHeight = firstItem.clientHeight * length

		if (openCloseState) {
			gsap.to(container, {
				height: contentHeight,
				duration: .5
			})
			if (!controlFirstOpenBox.current) {
				controlFirstOpenBox.current = true
				items.childNodes.forEach((element, index) => {
					gsap.fromTo(element, 
						{opacity: 0, top: "15px"},
						{opacity: 1, top: "0px", duration:1, delay:0.2*index},
					)
				});
				
			}
		} else {
			gsap.to(container, {
				height: 0.1,
				duration: .2
			})
		}
	}, [openCloseState])

	return (
		<li>
			<button onClick={stateHandle}>({openCloseState ? '-' : '+'}) {title}</button>
			<div ref={refContainer} className="overflow-hidden h-0 mb-2">
				<ul>
					{items.map(item => <li key={item} className="relative">{item}</li>)}
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