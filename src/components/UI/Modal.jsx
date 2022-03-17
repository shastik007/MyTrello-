import styled from 'styled-components'
import { createPortal } from 'react-dom'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import UpdateIcon from '@mui/icons-material/Update'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'

const ModalStyled = styled.div`
	.backdrop {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		z-index: 10;
		background: rgba(0, 0, 0, 0.75);
	}
	.modal {
		position: fixed;
		top: 30vh;
		left: 10%;
		width: 80%;
		z-index: 100;
		overflow: hidden;
		background-color: white;
		border-radius: 10px;
	}
	.header {
		text-align: center;
		color: #1976d2;
		letter-spacing: 2px;
	}
	.header h2{
		margin-bottom:0px;
	}
	.content {
		padding: 1rem;
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
	}

	.input_update {
		width: 60%;
	}
	.actions {
		padding: 1rem;
		display: flex;
		justify-content: flex-end;
	}
	.buttons {
		width: 40%;
		display: flex;
		justify-content: space-between;
	}
	@media (min-width: 768px) {
		.modal {
			left: calc(50% - 20rem);
			width: 40rem;
		}
	}
`

const Modal = ({ onClick, name }) => {
	
	return (
		<>
			{createPortal(
				<>
					<ModalStyled>
						<div className='backdrop' onClick={onClick} />
						<div className='modal'>
							<header className='header'>
								<h2>{name}</h2>
							</header>
							<div className='content'>
								<TextField
									className='input_update'
									id='standard-basic'
									label='Standard'
									variant='standard'
								/>
								<Button
									variant='outlined'
									startIcon={<UpdateIcon />}
								>
									Update
								</Button>
							</div>
							<footer className='actions'>
								<div className='buttons'>
									<Button
										variant='outlined'
										startIcon={<DeleteOutlineIcon />}
									>
										Delete
									</Button>
									<Button
									    onClick={onClick}
										variant='contained'
										component='span'
									>
										Confirm
									</Button>
								</div>
							</footer>
						</div>
					</ModalStyled>
				</>,
				document.getElementById('modal'),
			)}
		</>
	)
}

export default Modal
