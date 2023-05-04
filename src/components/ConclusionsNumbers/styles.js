import styled from '@emotion/styled'

export const GreyContainer = styled.div`
    background-color: #F0EDFF;
    padding: 0.2px;
    margin-bottom: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 70%
    margin-top: 5%;
    margin-left: 5%;
    margin-right: 5%;
    &.blackContainer{
        background-color: black;
    }
`
export const IntroductionTitle = styled.div`
    font-size: 2.5em;
    font-weight: bold;
    color: black;
    margin-bottom: 1%;
`
export const HorizontalLine = styled.hr`
    width: 100%;
    border: 1px solid black;
    margin-bottom: 2%;
`
export const FirstPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5%;
    margin-left: 5%;
    margin-right: 5%;
`
export const Numbers = styled.div`
    color: black;
    font-weight: bold;
    font-size: 6rem;
    &.whiteNumber {
        color: white;
    }
`