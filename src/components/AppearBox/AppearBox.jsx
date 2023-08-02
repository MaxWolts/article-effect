import PropTypes from 'prop-types'
import { gsap } from "gsap"
import { useEffect, useRef } from 'react'
import ScrollTrigger from "gsap/ScrollTrigger"

const AppearBox = ({ children, delay=0, list=false, markers=false, scrollerStart='top 80%', scrollerEnd='bottom 100%', className=''}) => {
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
						markers: markers,
						start: scrollerStart,
						end: scrollerEnd, 
						onEnter: () => {
							items.forEach((item, index) => {
								gsap.fromTo(item, 
								{top: "15px", position: "relative"},
								{
									position: "relative",
									top: "0px",
									opacity: 1,
									duration: .5,
									delay: 0.2 * index,
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
	if (list) {
		return (
			<ul ref={containerRef} className={className}>
				{children}
			</ul>
		)
	}
	return (
		<div ref={containerRef} className={className}>
			{children}
		</div>
	)
	
}
AppearBox.propTypes = {
	children: PropTypes.any,
	delay: PropTypes.number,
	list: PropTypes.bool,
	markers: PropTypes.bool,
	scrollerStart: PropTypes.string,
	scrollerEnd: PropTypes.string,
	className: PropTypes.string
};

export default AppearBox