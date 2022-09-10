import React from 'react'
import BlogImg from '../../assets/blog.jpg'

import { BlogContainer, ImgWrap, RedLine, TitileWrap, Title } from './blog.styles.jsx'

const Blog = () => {
  return (
    <BlogContainer>
        <TitileWrap>
            <ImgWrap>
                <img src={BlogImg} alt='blog image'/>
            </ImgWrap>
            <Title>
                <sub>Fashion -</sub>
                <h1>Best GUIDE in 2022 - how to navigate style vs fashion trap</h1>
                <RedLine />
                <sub>by susan doe</sub>
            </Title>
            
        
        </TitileWrap>
        <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sapiente est nesciunt similique incidunt doloremque atque illo a mollitia sequi numquam, ut quod. Explicabo, praesentium. Dolor accusantium sequi quasi velit?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique eius ducimus quam natus laborum accusantium perspiciatis maiores minus quod cum. Aliquid exercitationem minus illum dolore. Odio iure voluptatum laboriosam veniam.
                
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sapiente est nesciunt similique incidunt doloremque atque illo a mollitia sequi numquam, ut quod. Explicabo, praesentium. Dolor accusantium sequi quasi velit?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique eius ducimus quam natus laborum accusantium perspiciatis maiores minus quod cum. Aliquid exercitationem minus illum dolore. Odio iure voluptatum laboriosam veniam.
                
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sapiente est nesciunt similique incidunt doloremque atque illo a mollitia sequi numquam, ut quod. Explicabo, praesentium. Dolor accusantium sequi quasi velit?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique eius ducimus quam natus laborum accusantium perspiciatis maiores minus quod cum. Aliquid exercitationem minus illum dolore. Odio iure voluptatum laboriosam veniam.
        </p>

    </BlogContainer>
  )
}

export default Blog