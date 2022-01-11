import styled , {css} from "styled-components/macro";



export const customCenter = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.div`
    width: 100%;
    height: 100%;
    ${customCenter}

`;
export const BoxContent = styled.div`
    min-height: 770px;
    width: 80%;
    height: 88%;
    border: 1.9px solid #050404;
    border-radius: 4px;
    ${customCenter}
    flex-direction: column;
    & > p {
        text-align: center;
        margin-top: 20px;
    }
    & > .note {
        font-size: 12px;
        margin-top: 5px;
        font-weight: 300;
    }

`;

export const Image = styled.img`
    width: 300px;
    height: 200px;
    margin-bottom: 20px;

`;

export const TokenSection = styled.div`
    width: 80%;
    ${customCenter}
    gap: 40px;
    margin-top: 20px;

`;
export const TokenBox = styled.div`
    width: 30%;
    height: 40px;
    border: 1px solid black;
    border-radius: 4px;
    ${customCenter}
    cursor: pointer;
    transition: all 300ms ease-out;
    background: ${({selected}) => selected ? 'black' : 'white'};
    color: ${({selected}) => selected ? 'white' : 'black'};
    transform: ${({selected}) => selected && 'scale(1.15)'};
    &:hover {
        opacity: 0.5;
        background: black;
        color: white;
    }
    
`;

export const SeeToken = styled.div`
    height: 200px;
    width: 710px;
    background: #b8b2b28f;
    margin-top: 20px;
    border-radius: 4px;
    overflow-wrap: break-word;
    position: relative;
    
    & > p {
        font-size: 11px;
        color: #ffff;
        margin: 15px;
        text-align: center;
    }
`;

