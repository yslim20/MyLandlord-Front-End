import styled from 'styled-components';
import React from 'react';

import Button from '../comps/Button';
import ImgBox from '../comps/ImgBox';
import SubHead from '../comps/SubHead';
import List from '../comps/List';
import TopNav from '../comps/TopNav';
import Header from '../comps/Header';
import VerLogo from '../comps/VerLogo';

const Cont = styled.div`
    display:flex;
    flex-direction: column;
`

const MidCont = styled.div`
    display:flex;
    flex: 1;
    flex-direction: row;
`
const LeftBox = styled.div`
    display:flex;
    flex: 1;
    flex-direction: column;
    justify-content:center;
    align-items:center;
`

const ImgSide = styled.div`
    display:flex;
    flex: 2;
    justify-content:flex-end;
`

const ListCont = styled.div`
    display:flex;
    flex: 1;
    flex-direction: row;
    align-items:center;
 justify-content:center;
`


export default function Home() {
    return(
        <Cont>
            <TopNav/>

            <MidCont>
                <LeftBox>
                    <VerLogo 
                        cwidth="278"
                        cheight="auto"
                        marginright="0"
                        marginbttm = "20"
                        routeTo=""
                        cursor="default"                        
                    />
                    <SubHead text="Welcome to MyLandlord!"/>
                    <SubHead text="Review your landlord now!" fontSize="24px"/>
                    <Button width="240px" fontSize="24px" text="Write Review"/>
                </LeftBox>
                <ImgSide>
                    <ImgBox src="https://placekitten.com/400/400"  height="90%"/>
                </ImgSide> 
            </MidCont>
       
            <Header marginLeft="0%" justifyContent="center" alignItems="center" text="Find The Best Landlord!" fontSize="34px"/>

             <ListCont>
                <List/>
            </ListCont>  
            <Button width="240px" fontSize="24px" text="See More"/>
           
        </Cont>
    )
}