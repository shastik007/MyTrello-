import styled from 'styled-components'

const HeaderStyles = styled.header`
	display: flex;
	justify-content: space-between;
    background-color: gray;
	align-items: center;
	& img {
		width: 80px;
        height: 65px;
	}
	& nav ul {
		list-style: none;
		width: 500px;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.nav {
		width: 700px;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
    .search_{
        width: 400px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
	margin-bottom:60px;
`

export default HeaderStyles
