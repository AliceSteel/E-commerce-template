import React from 'react'
import BlogImg from '../../assets/blog.jpg'
import './blog.styles.scss'

const Blog = () => {
  return (
    <div className='blog_container'>
        <div className="title_wrap">
            <div className="img_wrap">
                <img src={BlogImg} alt='blog image'/>
            </div>
            <div className="title">
                <sub>Fashion -</sub>
                <h1>Best GUIDE in 2022 - how to navigate style vs fashion trap</h1>
                <div className='red_line'></div>
                <sub>by susan doe</sub>
            </div>
            
        
        </div>
        <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sapiente est nesciunt similique incidunt doloremque atque illo a mollitia sequi numquam, ut quod. Explicabo, praesentium. Dolor accusantium sequi quasi velit?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique eius ducimus quam natus laborum accusantium perspiciatis maiores minus quod cum. Aliquid exercitationem minus illum dolore. Odio iure voluptatum laboriosam veniam.
                
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sapiente est nesciunt similique incidunt doloremque atque illo a mollitia sequi numquam, ut quod. Explicabo, praesentium. Dolor accusantium sequi quasi velit?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique eius ducimus quam natus laborum accusantium perspiciatis maiores minus quod cum. Aliquid exercitationem minus illum dolore. Odio iure voluptatum laboriosam veniam.
                
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sapiente est nesciunt similique incidunt doloremque atque illo a mollitia sequi numquam, ut quod. Explicabo, praesentium. Dolor accusantium sequi quasi velit?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique eius ducimus quam natus laborum accusantium perspiciatis maiores minus quod cum. Aliquid exercitationem minus illum dolore. Odio iure voluptatum laboriosam veniam.
        </p>

    </div>
  )
}

export default Blog