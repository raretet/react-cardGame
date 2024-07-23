import * as React from 'react';
import { TypeCard } from '../types';
import MyActions from "./MyActions";
import {battleField, game, hisCards, myCards} from "../store";

interface IDeckComponentProps {
  trump: TypeCard,
  cardBalance: number,
  getCard: () => void
}

const DeckComponent: React.FC<IDeckComponentProps> = ({ trump, cardBalance, getCard }) => {

  const trumps = {
    'chervi': { color: 'red', code: { __html: '&#9829;', }, },
    'bubi': { color: 'red', code: { __html: '&#9830;' }, },
    'kresti': { color: 'black', code: { __html: '&#9827;' }, },
    'piki': { color: 'black', code: { __html: '&#9824;' }, },
  }


  return (
      <div className='deckContainer'>
        <div className='deckInfo'>
          <div className={trumps[trump].color} dangerouslySetInnerHTML={trumps[trump].code} />
          <div>{'Остаток в колоде: ' + cardBalance}</div>
          <MyActions
              isMyAttack={game.isMyAttack}
              onRepulsed={() => battleField.clearBattleField(myCards, hisCards)}
              onGetCard={getCard}
          />
        </div>
      </div>

  );
};

export default DeckComponent;
