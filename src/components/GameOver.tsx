import * as React from 'react'

interface IGameOverProps {
  isShow: boolean
  isMyWin: boolean
  onRestartGame: () => void
}

const GameOver: React.FC<IGameOverProps> = ({ isShow, isMyWin, onRestartGame }) => {

  return isShow
    ? (
      <div className='game-over'>
        <h1 className={isMyWin ? 'win' : 'lose'}>
          {isMyWin ? 'Поздравляю! Ты выиграл!' : 'Ты проиграл!'}
        </h1>
        <button className='game-over-btn' onClick={onRestartGame}>Играть еще раз?</button>
      </div>
    ) : null
};

export default GameOver;
