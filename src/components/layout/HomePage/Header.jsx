import React, { useState } from 'react'
import { authActions } from '../../../store/auth'
import HeaderStyles from '../../styles/HomeStyles/HederStyles'
import logo from '../../../assets/trello-logo.svg'
import Button from '@mui/material/Button'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import TextField from '@mui/material/TextField'
import SearchIcon from '@mui/icons-material/Search'
import InputAdornment from '@mui/material/InputAdornment'
import { useDispatch } from 'react-redux'
import ArchiveModalList from '../../UI/ArchiveModalList'

const Header = ({val,change}) => {
	const [archiveModal, setArchiveModal] = useState(false)
	const dispatch = useDispatch()
	const logoutHandler = () => {
		dispatch(authActions.removeUser())
	}

	const toggleArchiveHandler = () => {
		setArchiveModal((prev) => !prev)
	}

	return (
		<HeaderStyles>
			<div className='nav'>
				<img src={logo} alt='' />
				<nav>
					<ul>
						<li>
							<Button variant='contained'>Work space</Button>
						</li>
						<li>
							<Button variant='contained'>Recently</Button>
						</li>
						<li>
							<Button variant='contained'>Favorite</Button>
						</li>
						<li>
							<Button variant='contained'>Patterns</Button>
						</li>
						<li>
							<Button
								onClick={toggleArchiveHandler}
								variant='contained'
							>
								Archive List
							</Button>
							{archiveModal && (
								<ArchiveModalList
									toggle={toggleArchiveHandler}
								/>
							)}
						</li>
					</ul>
				</nav>
			</div>

			<div className='search_'>
				<TextField
				    value={val}
					onChange={change}
					id='input-with-icon-textfield'
					InputProps={{
						startAdornment: (
							<InputAdornment position='start'>
								<SearchIcon />
							</InputAdornment>
						),
					}}
					variant='standard'
				/>
				<Button
					onClick={logoutHandler}
					variant='contained'
					endIcon={<ExitToAppIcon />}
				>
					Log Out
				</Button>
			</div>
		</HeaderStyles>
	)
}

export default Header
