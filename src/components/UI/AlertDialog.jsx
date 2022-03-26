import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

export default function AlertDialog({ confirm, cancel }) {
	return (
		<Dialog
			open={true}
			aria-labelledby='alert-dialog-title'
			aria-describedby='alert-dialog-description'
		>
			<DialogTitle id='alert-dialog-title'>
				{"Dialog Prompt?"}
			</DialogTitle>
			<DialogContent>
				<DialogContentText id='alert-dialog-description'>
					  Are you sure to leave this page ......
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={cancel}>Disagree</Button>
				<Button onClick={confirm} autoFocus>
					Agree
				</Button>
			</DialogActions>
		</Dialog>
	)
}
