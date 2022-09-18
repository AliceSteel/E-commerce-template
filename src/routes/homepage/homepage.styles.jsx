import styled from 'styled-components';

export const HomepageContainer = styled.div`
    width: 100%;
    height: calc(100vh - 80px);
    overflow: hidden;
    position: relative;

    img {
        height: 100%;
    }

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
    max-width: 100%;
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
        @media (max-width: 670px) {
            font-size: 40px;
        }
        @media (max-width: 420px) {
            font-size: 30px;
        }
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

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
    }
`;

export const SectionItemVertical = styled.div`
    max-width: 500px;
    width: 100%;
    grid-area: 1/1/3/2;
    float: inline-start;

    @media (max-width: 600px){
        margin:0 auto;
        padding:0 40px;
        max-width: 405px;
        float:none;
    }
`;
export const SectionItemText = styled.div`
    width: 100%;
    padding: 0 80px; 
    margin-top: -4px;
    display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 1.5rem;
	max-width: 605px;

    @media (max-width: 600px){
        margin: 0 auto;
        padding: 20px 40px;
        max-width: 405px;
    }
`;

export const SectionItemHoriz = styled.div`
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
