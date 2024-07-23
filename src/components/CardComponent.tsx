import * as React from 'react';
import { Card } from '../types';
// @ts-ignore
import rubashka from './rubashka.png'

interface ICardComponentProps {
  card: Card
  onClick?: () => void
  hidden?: boolean
}

const CardComponent: React.FunctionComponent<ICardComponentProps> = ({ card, onClick, hidden }) => {
  return (
    <div onClick={onClick} className={hidden ? 'hisCard' : 'card'}>
      <img style={{borderRadius: '10px'}} src={hidden ? rubashka : card.img} key={card.id} width='80' alt='card-img'/>
    </div>
  );
};

export default CardComponent;
