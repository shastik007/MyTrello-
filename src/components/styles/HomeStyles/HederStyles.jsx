import styled, { createGlobalStyle } from 'styled-components'

const HeaderStyles = styled.header`
	display: flex;
	justify-content: space-between;
	margin-top: 20px;
	align-items: center;
	background-color: orange;
	border-radius: 6px;
	& img {
		width: 80px;
		height: 65px;
	}
	& nav ul {
		list-style: none;
		width: 600px;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.nav {
		width: 800px;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.search_ {
		width: 400px;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	margin-bottom: 60px;
`



export default HeaderStyles
