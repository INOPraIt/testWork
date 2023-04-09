import React from 'react';
import './Style.scss';
import iconTwit from '../../../../img/icons/1.png'
import one from '../../../../img/icons/2.png';
import icon from '../../../../img/icons/8.png'

export default function List({ 
  avatar,
  checkMark,
  nick,
  name,
  descriptionOne,
  descriptionTwo
}) {

  return (
    <div className='containerLists'>
      <div className='itemAvatarAndName'>
        <div className='immageItemList'>
          <img
            src={avatar}
            className='imgOnesAva'
          />
        </div>
        <div className='nameAndNick'>
          <div className='names'>
            <p className='textName'>
              {name}
            </p>
            {checkMark &&
              <img
                className='imgIcon'
                src={icon}
              />
            }
          </div>
          <p className='nickNameText'>
            {nick}
          </p>
        </div>
        <div className='twiterIconItem'>
          <img
            src={iconTwit}
            className='imgIconTwit'
          />
        </div>
      </div>
      <div>
        <p className='textOneDescription'>
          {descriptionOne}
        </p>
        <p className='textTwoDescription'>
          {descriptionTwo}
        </p>
      </div>
    </div>
  )
}
