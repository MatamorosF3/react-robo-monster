import React, {Component} from 'react';
import './card-list.styles.css';
import { Card } from '../card/card.component';


export const CardList = (props) => {
  console.log("Props: ", props);
  console.log("Props children: ", props.children);
  return <div className='card-list'>
    {props.monsters.map((monster) => (
            <Card key={monster.id} monster={monster}></Card>
          ))}
  </div>
}