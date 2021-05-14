import React from 'react';


function CardItem(props) {
   
  return (
    <>
    
      <li onClick="window.location.reload()" className='cards__item'>
        
        <a target="_blank" rel="noreferrer"  href={props.a} className='cards__item__link' to={props.label}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='dictioary'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </a>
        
      </li>
      
    </>
  );
}

export default CardItem;