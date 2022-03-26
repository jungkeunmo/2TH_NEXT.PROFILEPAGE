import React from "react";
import styled from "styled-components";

const Page = styled.section`
    width: 100%;
    height: 100vh;
    border-bottom: 1px solid #999;
`;

const Title = styled.h3`
    padding: 10px 30px;
    font-size: 18px;
    font-weight: bold;
`;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;


const FullPage = ({title, children}) => {
    return (
    <Page>
        <Title>{title}</Title>
        <Wrapper>{children}</Wrapper>
    </Page>
    )
};

export default FullPage;