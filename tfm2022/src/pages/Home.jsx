import styled from "styled-components";

const Home = () => {
    // js 문법   

    return( 
        // jsx 문법
    <div>
        <TestDiv>Hello World</TestDiv>
        <div>홈페이지 입니다.</div>
    </div>    
    )
}

const TestDiv = styled.div `
    background-color: black;
    color: white;
`


export default Home;
