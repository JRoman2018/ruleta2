import { FC } from 'react';
import DisplayWithLabel from '../../../../components/DisplayWithLabel/DisplayWithLabel';
import { FRUITS } from '../../../../utils/utils';

type FruitBetBoardType = {
  apple: string;
  banana: string;
  mango: string;
  pineapple: string;
  handleClickBet: (bet: string) => void;
};

const footerStyle = {
  height: '54.44px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const FruitBetBoard: FC<FruitBetBoardType> = ({
  apple,
  banana,
  mango,
  pineapple,
  handleClickBet,
}) => {
  return (
    <>
      <DisplayWithLabel
        onClick={() => handleClickBet('apple')}
        value={apple}
        bgColor="#d59d34"
        footer={FRUITS.apple}
      />
      <DisplayWithLabel
        onClick={() => handleClickBet('banana')}
        value={banana}
        bgColor="#f20603"
        footerStyle={footerStyle}
        footer={FRUITS.banana}
      />
      <DisplayWithLabel
        onClick={() => handleClickBet('pineapple')}
        value={pineapple}
        bgColor="#03651a"
        footerStyle={footerStyle}
        footer={FRUITS.pineapple}
      />
      <DisplayWithLabel
        onClick={() => handleClickBet('mango')}
        value={mango}
        bgColor="#000"
        footerStyle={footerStyle}
        footer={FRUITS.mango}
      />
    </>
  );
};

export default FruitBetBoard;
