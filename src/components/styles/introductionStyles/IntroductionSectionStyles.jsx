import styled from 'styled-components'

const IntroductionSectionStyles = styled.section`
	display: flex;
	justify-content: space-around;
	& h1 {
		font-size: 3rem;
		line-height: 1.25;
		font-weight: 400;
	}
	& p {
		font-size: 20px;
	}
	& form {
		display: grid;
		grid-template-columns: 1.5fr 1fr;
	}
    .button{
        margin-left: 10px;
    }
	.first_ {
		width: 500px;
	}
	& img {
		width: 445px;
		height: 557px;
	}
`
export default IntroductionSectionStyles
