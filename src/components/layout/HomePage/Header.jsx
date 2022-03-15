import React from 'react'
import HeaderStyles from '../../styles/HomeStyles/HederStyles'
import  logo  from '../../../assets/trello-logo.svg'
const Header = () => {
	return (
		<HeaderStyles>
			<div>
                <img src={logo} alt="" />
            </div>
			<nav>
				<ul>
					<li>workspace</li>
					<li>recent</li>
					<li>in favorites</li>
					<li>templates</li>
					<li>
						<button>create</button>
					</li>
				</ul>
			</nav>
            <div>
        
            </div>
		</HeaderStyles>
	)
}

export default Header
