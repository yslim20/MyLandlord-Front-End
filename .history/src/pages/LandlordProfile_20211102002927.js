import styled from 'styled-components';
import React from 'react';

import ProfileSub from '../comps/ProfileSub';


const Cont = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    margin-left:3%;
`


export default function LandlordProfile() {
    return(
        <Cont>
            <ProfileSub></ProfileSub>
        </Cont>
    )
}