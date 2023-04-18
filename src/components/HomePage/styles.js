import styled from '@emotion/styled'

export const FirstPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 17%;
    margin-left: 10%;
`

export const ReadMoreButton = styled.button`
    padding: 1%;
    width: 10%;
    margin-top: 1%;
    padding-right: 1%;
    padding-left: 1%;
    color: white;
    font-weight: bold;
    background-color: #654AFF;
    border-radius: 0.8em;
    border: none;
    &:hover {
        background-color: #8763FF;
        cursor: pointer;
    }
`

export const IntroductionTitle = styled.div`
    font-size: 2.5em;
    font-weight: bold;
    color: #654AFF;
    margin-bottom: 1%;
`

export const IntroductionText = styled.div`
    font-size: 1.5em;
    width: 50%;
    text-align: justify;
`
export const FirstPagePhoto = styled.img`
    width: 40%;
    height: 50%;
    margin-top: -20%;
    margin-left: 55%;
`