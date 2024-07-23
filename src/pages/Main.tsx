import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import BattleFieldComponent from '../components/BattleFieldComponent';
import DeckComponent from '../components/DeckComponent';
import GameOver from '../components/GameOver';
import HisCardsComponents from '../components/HisCardsComponent';
import MyCardsComponents from '../components/MyCardsComponent';
import { battleField, hisCards, myCards, game } from '../store/index'
import { Card } from '../types';

const Main: React.FC = observer(() => {
  const startGame = () => {
    const { firstHisCards, firstMyCards } = game.startGame()
    hisCards.addCards(firstHisCards)
    myCards.addCards(firstMyCards)
  }

  const hisAction = () => {
    if (!game.isMyStep) {
      const battleFieldCards = [...battleField.cards.his, ...battleField.cards.my]

      const hisJuniorCard = hisCards.defineCardForAction(battleFieldCards)

      if (hisJuniorCard) {
        setTimeout(() => battleField.addHisCard(hisJuniorCard), 2000)
      } else {
        setTimeout(() => battleField.clearBattleField(myCards, hisCards), 2000)
      }
    }
  }

  useEffect(startGame, [])

  useEffect(hisAction, [game.isMyStep])

  const clickMyCard = (card: Card) => {
    if (game.isMyStep) {
      const myStepCard = myCards.checkMyStep(card, [...battleField.cards.my, ...battleField.cards.his])
      if (myStepCard) {
        battleField.addMyCard(myStepCard)
      }
    }
  }

  const getCard = () => {
    myCards.addCards([...battleField.cards.my, ...battleField.cards.his])
    game.toggleStep()
    game.setIsGetCard(true)
    battleField.clearBattleField(myCards, hisCards)
  }

  const startNewGame = () => {
    window.location.reload();
  }

  return (
    <>
      <HisCardsComponents cards={hisCards.cards} />
      <BattleFieldComponent cards={battleField.cards} />
      <MyCardsComponents cards={myCards.cards} onAtack={clickMyCard} />
      <>
      <DeckComponent getCard={getCard} trump={game.trumpCard} cardBalance={game.deckCards.length} />
      </>
      <GameOver
        isShow={!game.deckCards.length && (!myCards.cards.length || !hisCards.cards.length)}
        isMyWin={!myCards.cards.length}
        onRestartGame={startNewGame}
      />
    </>
  );
});

export default Main;
