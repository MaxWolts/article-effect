import PropTypes from 'prop-types'
import { gsap } from "gsap"
import { useEffect, useRef } from 'react'
import ScrollTrigger from "gsap/ScrollTrigger"

const ApearBox = ({ children, delay }) => {
	const containerRef = useRef(null)
	const controlFlag = useRef(false)
	gsap.registerPlugin(ScrollTrigger)
	useEffect(() => {
		if (!controlFlag.current) {
			controlFlag.current = true
			const items = containerRef.current.childNodes
			items.forEach((item) => {
				gsap.to(item, { opacity: 0, duration: 0 })
			});
			console.log(delay);
				setTimeout(() => {
					ScrollTrigger.create({
						trigger: containerRef.current,
						start: 'top 80%',
						end: 'bottom 100%', 
						onEnter: () => {
							items.forEach((item, index) => {
								gsap.to(item, 
								{
									opacity: 1,
									duration: .5,
									delay: 0.1 * index,
								})
							});
						},
						onLeaveBack: () => {
							// tl.reverse();
						}
					});
					console.log('here222');
				}, delay)
		}
	},[])
	return (
		<div ref={containerRef}>
			{children}
		</div>
	)
}
ApearBox.propTypes = {
	children: PropTypes.any,
	delay: PropTypes.number
};

export default ApearBox