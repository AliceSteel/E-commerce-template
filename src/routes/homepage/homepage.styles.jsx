import styled from 'styled-components';

export const HomepageContainer = styled.div`
    width: 100%;
    height: 100%;
    min-height: 80vh;
    overflow: hidden;
    position: relative;

    &:hover {
        & img {
                transform: scale(1.1);
                transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
            }
            
    }
`;

export const HomepageLogo = styled.div`
    position:absolute;
    width: max-content;
    left: 50%;
    transform: translateX(-50%);
    top: 50%;
    color: #fff;
    text-transform: uppercase;
    display:flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;

    h1 {
        font-size: 70px;
    }
`;

export const SectionsContainer = styled.div`
    width: 100%;
    max-width: 1191px;
    margin: 0 auto;
    padding: 151px 0;
`;

export const SectionPreviewWrap = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr 1fr;
`;

export const SectionItem_vertical = styled.div`
    max-width: 500px;
    width: 100%;
    grid-area: 1/1/3/2;
    float: inline-start;
`;
export const SectionItem_text = styled.div`
    width: 100%;
    padding: 0 80px; 
    margin-top: -4px;
    display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 1.5rem;
	max-width: 605px;
`;

export const SectionItem_horiz = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    
`;	
export const ImgWrap = styled.div`
    width: 100%;
    max-width: 600px; 
`;

export const QuoteSection = styled.div`
    width: 100%;
    max-width: 941px;
    margin: 0 auto;
    text-align: center;
    p {
        font-size: 2rem;
        padding-bottom: 40px;
    }
    sub {
        color: #9F9F9F;
        font-size: 1.25rem;
    }
`;


