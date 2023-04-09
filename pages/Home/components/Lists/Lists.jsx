import React from 'react';
import List from './List';
import './Style.scss';
import one from '../../../../img/icons/2.png';
import two from '../../../../img/icons/3.png';
import three from '../../../../img/icons/4.png';
import four from '../../../../img/icons/5.png';
import five from '../../../../img/icons/6.png';
import six from '../../../../img/icons/7.png';

export default function Lists() {

  const arrayList = [
    {
      id: 1,
      avatar: one,
      checkMark: true,
      name: 'Lisa Miller',
      nick: `@LisaMillerCool`,
      descriptionOne: `It’s difficult to make a tool that is powerful, easy video
      to use, and stays out of the way. @expo has student
      figured it out and it’s one of the most and they want to
      pleasurable dev experiences I’ve had in my seen that 
      career goal.`,
      descriptionTwo: `It’s difficult to make a tool that is powerful, easy video
      to use, and stays out of the way. @expo has student
      figured it out and it’s one of the most and they want to
      pleasurable dev experiences I’ve had in my seen that 
      career goal.`,
    },
    {
      id: 2,
      avatar: two,
      checkMark: false,
      name: 'Bri',
      nick: `@BriDehlinger`,
      descriptionOne: `It’s difficult to make a tool that is powerful, easy video
      to use, and stays out of the way. @expo has student
      figured it out and it’s one of the most and they want to
      pleasurable dev experiences I’ve had in my seen that 
      career goal.`,
      descriptionTwo: ``,
    },
    {
      id: 3,
      avatar: three,
      checkMark: false,
      name: 'CarolMcKeon',
      nick: `@LisaMillerCool`,
      descriptionOne: `It’s difficult to make a tool that is powerful, easy video
      to use, and stays out of the way. @expo has student
      figured it out and it’s one of the most and they want to
      pleasurable dev experiences I’ve had in my seen that 
      career goal.`,
      descriptionTwo: `It’s difficult to make a tool that is powerful, easy video
      to use, and stays out of the way. @expo has student
      figured it out.`,
    },
    {
      id: 4,
      avatar: four,
      checkMark: false,
      name: 'Wes Johnson',
      nick: `@LisaMillerCool`,
      descriptionOne: `It’s difficult to make a tool that is powerful, easy video
      to use, and stays out of the way. @expo has student
      figured it out and it’s one of the most and they want to
      pleasurable dev experiences I’ve had in my seen that 
      career goal.`,
      descriptionTwo: ``,
    },
    {
      id: 5,
      avatar: five,
      checkMark: true,
      name: 'Lisa Miller',
      nick: `@LisaMillerCool`,
      descriptionOne: `It’s difficult to make a tool that is powerful, easy video
      to use, and stays out of the way. @expo has student
      figured it out and it’s one of the most and they want to
      pleasurable dev experiences I’ve had in my seen that 
      career goal.`,
      descriptionTwo: `It’s difficult to make a tool that is powerful, easy video
      to use.`,
    },
    {
      id: 6,
      avatar: six,
      checkMark: false,
      name: 'Traver',
      nick: `@LisaMillerCool`,
      descriptionOne: `It’s difficult to make a tool that is powerful, easy video
      to use, and stays out of the way. @expo has student
      figured it out and it’s one of the most and they want to
      pleasurable dev experiences I’ve had in my seen that 
      career goal.`,
      descriptionTwo: `It’s difficult to make a tool that is powerful, easy video
      to use, and stays out of the way. @expo has student
      figured it out and it’s one of the most and they want to
      pleasurable dev experiences I’ve had in my seen that 
      career goal.`,
    },
  ]
  
  return (
    <div className='containerGenLists'>
      {arrayList.map((v) => 
        <List 
          key={v.id}
          avatar={v.avatar}
          checkMark={v.checkMark}
          nick={v.nick}
          name={v.name}
          descriptionOne={v.descriptionOne}
          descriptionTwo={v.descriptionTwo}
        />
      )}
      
      
    </div>
  )
}
