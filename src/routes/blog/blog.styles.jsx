import styled from 'styled-components';

export const BlogContainer = styled.div`
    width: 90%;
    max-width: 1191px;
    margin: 0 auto;

    p {
        padding: 100px 10px;
        line-height: 2rem;
        text-align: left;
    }
`;

export const TitileWrap = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
`;

export const ImgWrap = styled.div`
    width: 40%;
    min-width: 300px;
`;
export const Title = styled.div`
    width: 40%;
    min-width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    

    h1 {
        width: 100%;
        font-size: 60px;
        text-transform: capitalize;
        position: relative;
        z-index: 5;

        @media (max-width: 500px) {
            font-size: 40px;
        }
    }
    sub {
        text-transform: uppercase;
    }
`;

export const RedLine = styled.div`
    width: 100%;
    height: 20px;
    background-color: red;
    position: relative;
    top: -20px;
    left: -5px;
    z-index: 4;

    @media (max-width: 500px){
        left: 0;
    }
`;
