import React from 'react';

import { SubHeading } from '../../components';
import './Chef.css';
import { images } from '../../constants';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="chef" />
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Word"/>
      <h1 className='headtext__cormorant'>What We Believe In</h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="quote" />
          <p className='p__opensans'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat</p>
        </div>
        <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, consequatur. Nemo aliquam debitis accusamus dolores ad, magni consequatur optio autem.</p>
      </div> 

      <div className='app__chef-sign'>
        <p>Haafeez Ali</p>
        <p className='p__opensans'>Chef & Owner</p>
        <img src={images.sign} alt="sign" />
      </div>

    </div>
  </div>
);

export default Chef;
