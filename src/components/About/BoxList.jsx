import { useState } from "react"
import PropTypes from 'prop-types';

const BoxList = ({title, items}) => {
	const [openCloseState, setOpenCloseState] = useState(false)
	const stateHandle = () => setOpenCloseState(!openCloseState)
	return (
		<li>
			<button onClick={stateHandle}>({openCloseState ? '-' : '+'}){title}</button>
			<div>
				<ul>
					{Array.isArray(items) && items.map(item => <li key={item}>{item}</li>)}
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