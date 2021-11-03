import styled from 'styled-components';
import React from 'react';


const HeaderCont = styled.div`
	display:flex;
	justify-content:center;
`;

const Text = styled.p`
	font-family: 'Montserrat', sans-serif;
	font-size: ${props=>props.fontSize}px;
	font-weight: ${props=>props.fontWeight};
	color: ${props=>props.fcolor};	
	text-align: ${props=>props.align};
	line-height: ${props=>props.lineHeight}px;
	margin:0;
	margin-bottom: ${props=>props.marginB}px;
`;

const Subhead = ({
	text="Log In",
	fontSize= 32,
	fontWeight = 500,
	fcolor="#000",
	align="center",
	lineHeight = "",
	marginB=""
}) => {
	return(
		<HeaderCont>
			<Text 
				fontSize={fontSize}
				fontWeight={fontWeight}
				fcolor={fcolor}
				align={align}
				lineHeight={lineHeight}
				marginB={marginB}
			>
				{text}
			</Text>
		</HeaderCont>
	);
}

export default Subhead;