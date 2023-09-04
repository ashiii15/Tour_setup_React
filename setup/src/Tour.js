import React, { useState } from 'react';

const Tour = ({id,name,info,price,image}) => {
  const [paragraph,setParagraph] = useState(true)
  return <article className='single-tour'>
    <img src={image}></img>
    <footer>
      <div className='tour-info'>
        <h4>{name}</h4>
        <h4 className='tour-price'>${price}</h4>
      </div>
      <p>{paragraph ? info : `${info.substring(0,200)}...`}
      <button onClick={()=>setParagraph(!paragraph)}>
        {paragraph ? `showmore`:`showless`}
      </button>
      </p>
      <button className='delete-btn'>Not interested</button>
      <div>

      </div>
    </footer>
  </article>;
};

export default Tour;
