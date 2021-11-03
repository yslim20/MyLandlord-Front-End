import styled from 'styled-components';
import React from 'react';

import ProfileSub from '../comps/ProfileSub';
import ShowAll from '../comps/ShowAll';
import PropertyCard from '../comps/PropertyCard';
import PropImg from '../comps/PropImage';

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



export default function LandlordProfile() {
    return(
        <Cont>
            <ProfileSub />
            <ShowAll />
            <CenterBox>
                <PropertyCard>
                    <P src="./images/property1.png"  />
                </PropertyCard>

            </CenterBox>
        </Cont>
    )
}