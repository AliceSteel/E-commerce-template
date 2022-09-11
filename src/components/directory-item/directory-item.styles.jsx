import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BackgroundImg = styled.div`
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
	background-image: ${({imageUrl}) => `url(${imageUrl})`};
`;

export const Content = styled.div`
	padding: 25px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
	background-color: #fff;
	opacity: .7;
	position: absolute;

	h2 {
        font-weight: bold;
        font-size: 22px;
        color: #4a4a4a;
        text-transform: uppercase;
      }
  
`;

export const DirectoryItemContainer = styled(Link)`
	width: 30%;
	min-width: 200px;
	height: 340px;
	flex: 1 1 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
	overflow: hidden;

	&:hover {
	cursor: pointer;

		& ${BackgroundImg} {
			transform: scale(1.1);
			transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
		}
		& ${Content} {
			opacity: .9;
		}
	}

	&.large {
	height: 380px;
	}

`;
