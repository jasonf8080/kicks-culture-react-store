import React, {useState} from 'react'
import MobileNewsSlider from './MobileNewsSlider'
import { Link } from 'react-router-dom'
import { articles } from '../utils/data'
import { handleLinkClick } from '../utils/helpers'



const Blog = () => {
    const [mobileIndex, setMobileIndex] = useState(0);
    const [visible, setVisible] = useState(true);

    
  return (
    <>
    <section className="main-section blog-section">
        <div className="container">
             <h1 className="heading text-2xl">Blog Posts</h1>

             <div className="articles-grid articles-grid-desktop">
                {articles.map((item, index) => {
                    return (
                    <Link to='/' onClick={handleLinkClick}>
                    <div className="article-item" key={index}>
                        <div className="img-container"><img src={`./images/article${item.index}.png`} alt="articleImg" /></div>

                        <div className="article-item-content">
                            <h3 className="text-sm">{item.title}</h3>
                            <p className='text-xs'>{item.content.substring(0, 85).trim().replace(/[\s]+[^\s]*$/, '') + '...'}</p>
                        </div>
                   </div>
                   </Link>
                    )
                })}
             </div>


             <MobileNewsSlider articles={articles} mobileIndex={mobileIndex} setMobileIndex={setMobileIndex} visible={visible} setVisible={setVisible}/>
        </div>


    </section>
      
      
    </>
  )
}

export default Blog