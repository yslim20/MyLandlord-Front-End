import styled from 'styled-components';
import React from 'react';

import Button from '../comps/Button';
import ImgBox from '../comps/ImgBox';
import SubHead from '../comps/SubHead';
import List from '../comps/List';
import TopNav from '../comps/TopNav';
import Header from '../comps/Header'
import IconButton  from '../comps/IconButton';

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
    margin-top:10%;
    align-items: center;
    height: 400px;
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
                            <ImgBox src="https://placekitten.com/500/500" width="60%" height="70%"/>
                            <SubHead text="Welcome to MyLandlord!"/>
                            <SubHead text="Can i go sleeeeep:<" fontSize="24px"/>
                            <Button width="240px" fontSize="24px" text="Write Review"/>
                    </LeftBox>
                    <ImgSide>
                            <ImgBox src="https://placekitten.com/400/400"  height="90%"/>
                    </ImgSide> 
            </MidCont>

            <MidCont>
                <IconButton></IconButton>
                </MidCont> 
       
            <Header marginLeft="0%" justifyContent="center" alignItems="center" text="Find The Best Landlord!" fontSize="34px"/>

             <ListCont>
                <List/>
            </ListCont>  
           
        </Cont>
    )
}