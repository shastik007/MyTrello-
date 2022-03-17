import styled from 'styled-components'
import { createPortal } from 'react-dom'
import Button from '@mui/material/Button'
import { useDispatch, useSelector } from 'react-redux'
import { todoActions } from '../../store/todo'
import ArchiveItem from './ArchiveItem'

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
	.header h2 {
		margin-bottom: 0px;
	}
	.actions {
		padding: 1rem;
		display: flex;
		justify-content: flex-end;
	}
	.buttons {
		width: 40%;
		display: flex;
		justify-content: flex-end;
	}
	.content {
		padding: 1rem;
	}

	@media (min-width: 768px) {
		.modal {
			left: calc(50% - 20rem);
			width: 40rem;
		}
	}
`

const ArchiveModalList = (props) => {
	const dispatch = useDispatch()
	const archive = useSelector((state) => state.todo.archive)

	return (
		<>
			{createPortal(
				<>
					<ModalStyled>
						<div className='backdrop' />
						<div className='modal'>
							<header className='header'>
								<h2>Archive List</h2>
							</header>
							<div className='content'>
								{archive.length > 0
									? archive.map((el) => {
											return (
												<ArchiveItem key={el.id}>
													<h5>{el.todoName}</h5>
													<Button
														variant='contained'
														component='span'
													>
														unzip
													</Button>
												</ArchiveItem>
											)
									  })
									: ''}
							</div>
							<footer className='actions'>
								<div className='buttons'>
									<Button
										onClick={props.toggle}
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

export default ArchiveModalList
