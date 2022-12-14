import styled from 'styled-components';

export const CategoryContainer = styled.div`
    width: 90%;
    max-width: 1400px;
    margin: 0 auto 50px;

    h2 {
        text-align: left;
        padding: 2rem 0;
    }
`;

export const CategoryWrap = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 10px;
`;

