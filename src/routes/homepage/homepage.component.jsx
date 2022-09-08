import React from 'react'
import { useNavigate } from 'react-router-dom'
import Directory from '../../components/directory/directory.component'
import Btn, {BUTTON_TYPE_CLASSES} from '../../components/button/button.component'
import './homepage.styles.scss'
import homePageImg from '../../assets/homepage.png';
import img_6 from '../../assets/homePageImg_6.jpg';
import img_7 from '../../assets/homePageImg_7.jpg';
import img_8 from '../../assets/homePageImg_8.png';
import img_9 from '../../assets/homePageImg_9.png';

const Homepage = () => {
  const navigate = useNavigate();
  const btnHandler = () => navigate('/shop');

  return (
	<>
		<div className='homepage_container'>
			<img src={homePageImg} alt='homepage' />
			<div className="logo">
				<h1>Spring summer 2022</h1>
				<Btn type='button'
					btnType={BUTTON_TYPE_CLASSES.transparent}
					onClick={btnHandler}>SHOP NOW
				</Btn>
			</div>
		</div>

		<div className="sections_container">
			<div className="about_us_wrap">
				<div className="about_us_item_vertical" >
					<img src={img_6} alt="campaign"/>
				</div>
				<div className="about_us_item_text">
					<div className="text_wrap">
						<h2>Spring / Summer Campaign</h2>
						<p>Shop the latest clothing trends with our weekly edit. From our latest Woman collection and other lines, we have dresses, coats, boots, bags and more to suit every woman and every occasion. Explore the latest fashion trends here and now with us.
						</p>
						
						<Btn type='button'
							btnType={BUTTON_TYPE_CLASSES.inverted}
							onClick={btnHandler}>SHOP NOW
						</Btn>
					</div>
				</div>
				<div className="about_us_item_horizontal" >
					<div className="pic_wrap">
						<img src={img_7} alt="campaign" />
					</div>
				</div>
			</div>
		</div>
		<div className="quote">
			<p>
			“When you do something noble and beautiful and nobody noticed, do not be sad. For the sun every morning is a beautiful spectacle and yet most of the audience still sleeps.”
			</p>
			<sub>John Lennon</sub>
		</div>
		<div className="sections_container">
			<div className="about_us_wrap">
					<div className="about_us_item_vertical" >
						<img src={img_9} alt="style"/>
					</div>
					<div className="about_us_item_text">
						<div className="text_wrap">
							<h2>Spring / Summer Campaign</h2>
							<p>Shop the latest clothing trends with our weekly edit. From our latest Woman collection and other lines, we have dresses, coats, boots, bags and more to suit every woman and every occasion. Explore the latest fashion trends here and now with us.
							</p>
							
							<Btn type='button'
								btnType={BUTTON_TYPE_CLASSES.inverted}
								onClick={btnHandler}>Read More
							</Btn>
						</div>
					</div>
					<div className="about_us_item_horizontal" >
						<div className="pic_wrap">
							<img src={img_8} alt="style" />
						</div>
					</div>
				</div>
		</div>
	</>
    
  )
}

export default Homepage;