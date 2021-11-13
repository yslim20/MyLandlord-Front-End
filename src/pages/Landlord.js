import styled from 'styled-components';
import React from 'react';

// ============ Imported Components ============== //
import Header from '../comps/Header';
import SubHead from '../comps/SubHead';
import Navi from '../comps/Navi';
import SearchBar from '../comps/SearchBar';
import ImgBox from '../comps/ImgBox';
import EnhancedTable from '../comps/EnhancedTable'
import PaginationRow from '../comps/PaginationRow';
import Footer from '../comps/Footer';

// ============ CSS ============== //
const Cont = styled.div`
	display:flex;
	flex-direction: column;
	margin: 0;
	padding: 0 4% 0 4%;
  box-sizing: border-box;
`

const HeadCont = styled.div`
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

const MidCont = styled.div`
	display:flex;
	flex: 1;
	flex-direction: column;
	justify-content:center;
	align-items:flex-start;
	margin-bottom: ${props=>props.cmarginB}; 
`

// ============ Function ============== //
const Landlord = ({

// ============ Properties
  cmarginB = "100px",
  cmarginBttm = "0px"

})=>{

// ============ Layout
	return(
		<Cont>
{/* // ============ Top Navigation */}
			<Navi/>

{/* // ============ MAP */}
      <MidCont cmarginB={cmarginB}>
        <HeadCont>
          <Header text="Map" marginLeft="4%" />
        </HeadCont>
        <SubHead 
          marginB = "40"
          justifyContent="left"
          text="Which area do you want to search?"
        />
        <SearchBar/>

{/* it is a image with img tag */}
        <ImgBox 
          cwidth="100%" 
          cheight="auto"
          src="./images/img_map.png"
        />
      </MidCont>

{/* // ============ LIST OF LANDLORD */} 
      <MidCont cmarginB = {cmarginBttm}>
        <HeadCont>
          <Header text="List of Landlord" marginLeft="4%" />
        </HeadCont>
        <SubHead 
          marginB = "40"
          justifyContent="left"            
          text="Who do you want to search?"
        />
        <SearchBar
          placeholder="Please type your landlord name or address.."
        />

        <EnhancedTable/>        

        {/* <PaginationTest /> */}
        <PaginationRow />
          
      </MidCont>

{/* // ============ Bottom Navigation */}
      <Footer />
    </Cont> 
  )
}

export default Landlord;