import styled from 'styled-components';
import React from 'react';

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import TextAvatar from '../TextAvatar';
import RatingStar from '../RatingStar';
import { Select } from '@mui/material';

const BoxCont = styled.div`
    display:flex;
    justify-content:ceter;
    align-items:center;
`;

const RevBox = styled.div`
    width: 1100px;
    height: 245px;
    border: 3px solid #5333ED;
    background: none;
    border-radius: 16px;
`;

const Cont = styled.div`
    width:${props => props.cwidth};
    height: ${props => props.cheight}px;
    position: relative;  
    display: flex;
`

const LeftSide = styled.div`
    display:flex;
    flex:1;
`;
const RatingCont = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 30px;
    margin-top: 5%;
`;

const BoldText = styled.p`
    font-weight: 500;
    font-size: 20px;
    color: #000000;
    margin-bottom: 3px;
`;
const RegText = styled.p`
    font-weight: 400;
    font-size: 16px;
    color: #000000;
    margin-top: 5px;
    margin-bottom: 0;
`;

const ReviewCard = ({
    name="Adam Biebe",
    select="Selectd: 5435 Kincaid St",
    review="I lived this home for about 1 year last year, and it ways horrible. The room is dirty, the maintenance was not what I expected."
}) => {
    

    return(
        <BoxCont>
            <RevBox>
                <Cont>
                    <LeftSide>
                        <TextAvatar/>
                        <RatingCont>
                            <RatingStar />
                            <BoldText>{name}</BoldText>
                            <RegText>{select}</RegText>
                            <RegText>{review}</RegText>
                        </RatingCont>
                    </LeftSide>
                </Cont>
            </RevBox>
        </BoxCont>
    );
}

export default ReviewCard;