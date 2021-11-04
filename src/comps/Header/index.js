import styled from 'styled-components';
import React from 'react';
import { loadGetInitialProps } from 'next/dist/shared/lib/utils';

// ============ css ============== //
const HeaderCont = styled.div`
	display:flex;
	justify-content:${props=>props.justifyContent};
	align-items:${props=>props.alignItems};
`;

const Text = styled.p`
	font-family: 'Montserrat', sans-serif;
	font-size: ${props=>props.fontSize};
	margin-bottom:${props=>props.marginBottom};
	margin-left:${props=>props.marginLeft};
	font-weight: 500;
	color:#000;

`;
// ============ Function ============== //
const Header = ({
	// ============ Props
	text="Log In",
	fontSize="50px",
	justifyContent="left",
	alignItems="left",
	marginLeft="1%",
	marginBottom="70px"
}) => {
	return(
		<HeaderCont justifyContent={justifyContent} alignItems={alignItems} >
			<Text fontSize={fontSize}
					marginLeft={marginLeft}
					marginBottom={marginBottom}>
				{text}
			</Text>
		</HeaderCont>
	);
}

export default Header;