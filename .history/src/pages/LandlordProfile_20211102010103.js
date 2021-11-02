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
`

const CenterBox = styled.div`
    display:flex;
    margin-top: 30px;
    justify-content: center;
    align-items:center;
`;

const ProImage = styled.image`

`;


export default function LandlordProfile() {
    return(
        <Cont>
            <ProfileSub />
            <ShowAll />
            <CenterBox>
                <PropertyCard>
                    <ProImage src='' />
                </PropertyCard>

            </CenterBox>
        </Cont>
    )
}