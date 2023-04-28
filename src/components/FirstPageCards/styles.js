import styled from '@emotion/styled'

export const CardContainer = styled.div`
    display: flex;
    margin-top: 8%;
    justify-content: center;
    gap: 5%;
    margin-bottom: 10vh;
`
export const CardBackground = styled.div`
    width: 270px;
    border-radius: 0.5rem;
    background-color: #fff;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
    border: 1px solid grey;
`
export const CardImage = styled.img`
    object-fit: cover;
    width: 100%;
    height: 150px;
    border-radius: 0.5rem 0.5rem 0 0;
    background-color: #94A8B3;
`
export const CardTextContainer = styled.div`
    padding: 1.1rem;
`
export const CardTitle = styled.h1`
    color: #111827;
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 600;
`
export const CardDescription = styled.p`
    margin-top: 0.5rem;
    color: #6B7280;
    font-size: 0.875rem;
    line-height: 1.25rem;
`
export const CardButton = styled.button`
    display: inline-flex;
    margin-top: 1rem;
    color: #ffffff;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
    align-items: center;
    gap: 0.25rem;
    background-color: black;
    padding: 4px 8px;
    border-radius: 4px;
    &:hover {
        transform: translateX(4px);
        cursor: pointer;
    }
`
