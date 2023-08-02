import { useState } from "react"
import BoxList from "./BoxList"
const Services = () => {
	const [firstBoxState, setFirstBoxState] = useState(false)
	const [secondBoxState, setSecondBoxState] = useState(false)
	const controlNumbers = [1,2]
	const onlyOneBoxOpenControl = (box) => {
		if (box == controlNumbers[0]) {
			if (!firstBoxState && secondBoxState) {
				setSecondBoxState(false)
			}
			setFirstBoxState(!firstBoxState)
		}
		if (box == controlNumbers[1]) {
			if (firstBoxState && !secondBoxState) {
				setFirstBoxState(false)
			}
			setSecondBoxState(!secondBoxState)
		}
	}
	return (
		<div>
			<h4 className="text-h4responsive font-serif">Services</h4>
			<div className="mt-1">
				<ul>
					<BoxList openCloseState={firstBoxState} numberBox={controlNumbers[0]} controlFunction={onlyOneBoxOpenControl} title={'Brand'} items={['Brand Strategy', 'Brand Identity', 'Voice & Tone', 'Naming', 'Logo Design', 'Packaging', 'Campaign', 'Photography', 'Video', 'Illustration']}/>
					<BoxList openCloseState={secondBoxState} numberBox={controlNumbers[1]} controlFunction={onlyOneBoxOpenControl} title={'Digital'} items={['Digital Strategy', 'User Experience', 'Content Strategy', 'Copywriting', 'Art Direction', 'Web & App Design', 'Full-Stack Development', 'Hosting', 'Social Media', 'Email Marketing']}/>
				</ul>
			</div>
		</div>
	)
}

export default Services