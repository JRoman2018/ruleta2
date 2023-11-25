import { FC } from 'react';
import { PlayBtn } from './BetBoard.style';
import DisplayWithLabel from '../../../../components/DisplayWithLabel/DisplayWithLabel';

type BetBoardType = {
  total: string;
  value0: string;
  value1: string;
  value2: string;
  value3: string;
  value4: string;
  value5: string;
  value6: string;
  value7: string;
  value8: string;
  value9: string;
  value10: string;
  value11: string;
  value12: string;
  value1_6: string;
  value7_12: string;
  valueRed: string;
  valueBlack: string;
  handleClickBet: (bet: string) => void;
  handleClear: () => void;
  handleSpinClick: () => void;
};

const BetBoard: FC<BetBoardType> = ({
  total,
  value0,
  value1,
  value2,
  value3,
  value4,
  value5,
  value6,
  value7,
  value8,
  value9,
  value10,
  value11,
  value12,
  value1_6,
  value7_12,
  valueRed,
  valueBlack,
  handleClickBet,
  handleClear,
  handleSpinClick,
}) => {
  return (
    <>
      <DisplayWithLabel value={total} bgColor="#d59d34" footer="TOTAL BET" />
      <DisplayWithLabel
        onClick={() => handleClickBet('0')}
        value={value0}
        bgColor="#f20603"
        footer="0"
      />
      <div>
        <DisplayWithLabel
          onClick={() => handleClickBet('1')}
          value={value1}
          bgColor="#f20603"
          footer="1"
        />
        <DisplayWithLabel
          onClick={() => handleClickBet('7')}
          value={value7}
          bgColor="#f20603"
          footer="7"
        />
      </div>
      <div>
        <DisplayWithLabel
          onClick={() => handleClickBet('2')}
          value={value2}
          bgColor="#000"
          footer="2"
        />
        <DisplayWithLabel
          onClick={() => handleClickBet('8')}
          value={value8}
          bgColor="#000"
          footer="8"
        />
      </div>
      <div>
        <DisplayWithLabel
          onClick={() => handleClickBet('3')}
          value={value3}
          bgColor="#f20603"
          footer="3"
        />
        <DisplayWithLabel
          onClick={() => handleClickBet('9')}
          value={value9}
          bgColor="#f20603"
          footer="9"
        />
      </div>
      <div>
        <DisplayWithLabel
          onClick={() => handleClickBet('4')}
          value={value4}
          bgColor="#000"
          footer="4"
        />
        <DisplayWithLabel
          onClick={() => handleClickBet('10')}
          value={value10}
          bgColor="#000"
          footer="10"
        />
      </div>
      <div>
        <DisplayWithLabel
          onClick={() => handleClickBet('5')}
          value={value5}
          bgColor="#f20603"
          footer="5"
        />
        <DisplayWithLabel
          onClick={() => handleClickBet('11')}
          value={value11}
          bgColor="#f20603"
          footer="11"
        />
      </div>
      <div>
        <DisplayWithLabel
          onClick={() => handleClickBet('6')}
          value={value6}
          bgColor="#000"
          footer="6"
        />
        <DisplayWithLabel
          onClick={() => handleClickBet('12')}
          value={value12}
          bgColor="#000"
          footer="12"
        />
      </div>
      <div>
        <DisplayWithLabel
          onClick={() => handleClickBet('1_6')}
          value={value1_6}
          bgColor="#f1bb16"
          footer="1 - 6"
        />
        <DisplayWithLabel
          onClick={() => handleClickBet('7_12')}
          value={value7_12}
          bgColor="#f1bb16"
          footer="7 - 12"
        />
      </div>
      <div>
        <DisplayWithLabel
          onClick={() => handleClickBet('red')}
          value={valueRed}
          bgColor="#f20603"
          footer="red"
        />
        <DisplayWithLabel
          onClick={() => handleClickBet('black')}
          value={valueBlack}
          bgColor="#000"
          footer="black"
        />
      </div>
      <PlayBtn className={'spin-button'} onClick={handleClear}>
        Clear
      </PlayBtn>
      <PlayBtn className={'spin-button'} onClick={handleSpinClick}>
        SPIN
      </PlayBtn>
    </>
  );
};

export default BetBoard;
