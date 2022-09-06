import styled from "styled-components";
import { useState, useEffect } from "react";
import mockData from "../data/mockData";


const Header = ({id, logoImg}) => {

    return( 
        <HeaderSection>
            <PojectLogo 
            src={"https://raw.githubusercontent.com/Pablaw/RemoteStorag/main/tfm2022/img/primary/tfm2022Logo.png"} 
            alt={"Poject Logo Image"} />
            <LogoutBtn>로그아웃</LogoutBtn>
        </HeaderSection>
    )
}

const HeaderSection = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 429px);
    grid-template-rows: repeat(1, auto);
    justify-content: center;
    margin-bottom: 8px;
`;

const PojectLogo = styled.img`
    width: 130px;
    height: 44px;
`;

const LogoutBtn = styled.div`
    color: white;
    border-style: solid;
    border-color: #256634;
    border-radius: 10px;
    background-color: #256634;
    padding: 5px 5px;
    margin-left: 365px;
    margin-top: 10px;
    cursor: pointer;
`;

{/* <section class="header">
<article class="headerLogo">
    <input class="logoBtn" type="image" alt="tfm2022LogoImage" src="img/tfm2022.png"  />
</article>
<article class="headerMargin" ></article>
<article class="headerLogOut" >
    <button class="logoutBtn">로그아웃</button>
</article>
</section> */}




export default Header;