import styled from 'styled-components';
import React from 'react';

import ProfileSub from '../comps/ProfileSub';
import ShowAll from '../comps/ShowAll';
import PropertyCard from '../comps/PropertyCard';

const Cont = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    margin-left:3%;
    justify-content: center;
    align-
`


export default function LandlordProfile() {
    return(
        <Cont>
            <ProfileSub />
            <ShowAll />
            <PropertyCard />
        </Cont>
    )
}