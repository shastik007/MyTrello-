import React, { useEffect, useContext } from 'react'
import {UNSAFE_NavigationContext} from 'react-router-dom'
// import { UNSAFE_NavigationContext } from 'react-router-dom'
// import type { History, Blocker, Transition } from 'history';

export function useBlocker(blocker, when = true) {
	const navigator = useContext(UNSAFE_NavigationContext)
	console.log(navigator)
	// .navigator as History;

	useEffect(() => {
		if (!when) return

		const unblock = navigator.navigator.block((tx) => {
			const autoUnblockingTx = {
				...tx,
				retry() {
					unblock()
					tx.retry()
				},
			}
			blocker(autoUnblockingTx)
		})

		return unblock
	}, [navigator, blocker, when])
}
