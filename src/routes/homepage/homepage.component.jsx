import React from 'react'
import { useNavigate } from 'react-router-dom'
import Btn, {BUTTON_TYPE_CLASSES} from '../../components/button/button.component'

import homePageImg from '../../assets/homepage.png';
import img_6 from '../../assets/homePageImg_6.jpg';
import img_7 from '../../assets/homePageImg_7.jpg';
import img_8 from '../../assets/homePageImg_8.png';
import img_9 from '../../assets/homePageImg_9.png';
import { HomepageContainer,
	HomepageLogo, 
	ImgWrap, 
	QuoteSection,
	SectionItemHoriz,
	 SectionItemText, 
	 SectionItemVertical, 
	 SectionPreviewWrap, 
	 SectionsContainer } from './homepage.styles.jsx'

const Homepage = () => {
  const navigate = useNavigate();
  const btnShopHandler = () => navigate('/shop');
  const btnBlogHandler = () => navigate('/blog')

  return (
	<>
		<HomepageContainer>
			<img src={homePageImg} alt='homepage' />
			<HomepageLogo>
				<h1>Fall Winter 2022</h1>
				<Btn type='button'
					btnType={BUTTON_TYPE_CLASSES.transparent}
					onClick={btnShopHandler}>SHOP NOW
				</Btn>
			</HomepageLogo>
		</HomepageContainer>

		<SectionsContainer>
			<SectionPreviewWrap>
				<SectionItemVertical>
					<img src={img_6} alt="campaign"/>
				</SectionItemVertical>
				<SectionItemText>
					<h2>Fall Campaign</h2>
					<p>Shop the latest clothing trends with our weekly edit. From our latest Woman collection and other lines, we have dresses, coats, boots, bags and more to suit every woman and every occasion. Explore the latest fashion trends here and now with us.
					</p>	
					<Btn type='button'
						btnType={BUTTON_TYPE_CLASSES.inverted}
						onClick={btnShopHandler}>SHOP NOW
					</Btn>
				</SectionItemText>

				<SectionItemHoriz >
					<ImgWrap>
						<img src={img_7} alt="campaign" />
					</ImgWrap>
				</SectionItemHoriz>
			</SectionPreviewWrap>
		</SectionsContainer>
		<QuoteSection>
			<p>
			“When you do something noble and beautiful and nobody noticed, do not be sad. For the sun every morning is a beautiful spectacle and yet most of the audience still sleeps.”
			</p>
			<sub>John Lennon</sub>
		</QuoteSection>

		<SectionsContainer>
			<SectionPreviewWrap>
					<SectionItemVertical>
						<img src={img_9} alt="style"/>
					</SectionItemVertical>
					<SectionItemText>
						
							<h2>Fashion vs Style</h2>
							<p>Looking deep into the roots of the history we can say that fashion is similar to a box. You lay your clothes down there and then close it. The next step is to turn the box over, open it and start again.
							</p>
							
							<Btn type='button'
								btnType={BUTTON_TYPE_CLASSES.inverted}
								onClick={btnBlogHandler}>Read More
							</Btn>
						
					</SectionItemText>
					<SectionItemHoriz >
						<ImgWrap>
							<img src={img_8} alt="style" />
						</ImgWrap>
					</SectionItemHoriz>
			</SectionPreviewWrap>
		</SectionsContainer>
	</>
    
  )
}

export default Homepage;