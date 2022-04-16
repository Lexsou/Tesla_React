import React from 'react'
import Button from './Button'
import './items.css' 
const Item = ( {title, desc, descLink, backgroundImg,leftBtnTxt, leftBtnLink, rightBtnText, rightBtnlink,twoButtons }) => {
  return (
    <div className='item' style={{
        backgroundImage: `url(${backgroundImg})`
    }}>
      <div className='item__container'>
          <div className='item__text'>
            <p>{title}</p>
            <div className='item__textDesc'>
                <p>{desc}</p>
            </div>
          </div>

      <div className='item__lowerThrid'>
          <div className='item__buttons'>
          <Button imp='primary' text={leftBtnTxt} link={leftBtnLink}/>
            {twoButtons && (
                <Button imp='secondary'text={rightBtnText} link={rightBtnlink} />
            ) }
          </div> 
        </div>
        
      </div>
    </div>
  )
}

export default Item