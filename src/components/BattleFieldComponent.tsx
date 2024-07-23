import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { CoupleCard } from '../types';
import CardComponent from './CardComponent';

interface IBattleFieldComponentProps {
  cards: CoupleCard
}

const BattleFieldComponent: React.FC<IBattleFieldComponentProps> = observer(({ cards }) => {
  return (
    <div className='battleFieldContainer'>
      <div className='battleField'>
        {cards.his.map((card) => <CardComponent card={card} key={card.id} />)}
      </div>
        <div className='line'></div>
      <div className='battleField'>
        {cards.my.map((card) => <CardComponent card={card} key={card.id} />)}
      </div>
    </div>
  );
});

export default BattleFieldComponent;
