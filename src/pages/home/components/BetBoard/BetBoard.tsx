import { FC } from 'react';
import { PlayBtn } from './BetBoard.style';
import DisplayWithLabel from '../../../../components/DisplayWithLabel/DisplayWithLabel';

type BetBoardType = {
  total: string;
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
  value13: string;
  value14: string;
  value15: string;
  value16: string;
  value17: string;
  value18: string;
  value19: string;
  value20: string;
  value21: string;
  value22: string;
  value23: string;
  value24: string;
  value25: string;
  handleClickBet: (bet: string) => void;
  handleClear: () => void;
  handleSpinClick: () => void;
};

const BetBoard: FC<BetBoardType> = ({
  total,
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
  value13,
  value14,
  value15,
  value16,
  value17,
  value18,
  value19,
  value20,
  value21,
  value22,
  value23,
  value24,
  value25,
  handleClickBet,
  handleClear,
  handleSpinClick,
}) => {
  return (
    <>
      <DisplayWithLabel value={total} bgColor="#d59d34" footer="TOTAL BET" />
      <DisplayWithLabel
        onClick={() => handleClickBet('13')}
        value={value13}
        bgColor="#000"
        footer="13"
      />
      <div>
        <DisplayWithLabel
          onClick={() => handleClickBet('1')}
          value={value1}
          bgColor="#f20603"
          footer="1"
        />
        <DisplayWithLabel
          onClick={() => handleClickBet('14')}
          value={value14}
          bgColor="#f20603"
          footer="14"
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
          onClick={() => handleClickBet('15')}
          value={value15}
          bgColor="#000"
          footer="15"
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
          onClick={() => handleClickBet('16')}
          value={value16}
          bgColor="#f20603"
          footer="16"
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
          onClick={() => handleClickBet('17')}
          value={value17}
          bgColor="#000"
          footer="17"
        />
      </div>
      <div>
        <DisplayWithLabel
          onClick={() => handleClickBet('5')}
          value={value5}
          bgColor="#03651a"
          footer="5"
        />
        <DisplayWithLabel
          onClick={() => handleClickBet('18')}
          value={value18}
          bgColor="#f20603"
          footer="18"
        />
      </div>
      <div>
        <DisplayWithLabel
          onClick={() => handleClickBet('6')}
          value={value6}
          bgColor="#f20603"
          footer="6"
        />
        <DisplayWithLabel
          onClick={() => handleClickBet('19')}
          value={value19}
          bgColor="#000"
          footer="19"
        />
      </div>
      <div>
        <DisplayWithLabel
          onClick={() => handleClickBet('7')}
          value={value7}
          bgColor="#000"
          footer="7"
        />
        <DisplayWithLabel
          onClick={() => handleClickBet('20')}
          value={value20}
          bgColor="#f20603"
          footer="20"
        />
      </div>
      <div>
        <DisplayWithLabel
          onClick={() => handleClickBet('8')}
          value={value8}
          bgColor="#f20603"
          footer="8"
        />
        <DisplayWithLabel
          onClick={() => handleClickBet('21')}
          value={value21}
          bgColor="#000"
          footer="21"
        />
      </div>
      <div>
        <DisplayWithLabel
          onClick={() => handleClickBet('9')}
          value={value9}
          bgColor="#000"
          footer="9"
        />
        <DisplayWithLabel
          onClick={() => handleClickBet('22')}
          value={value22}
          bgColor="#f20603"
          footer="22"
        />
      </div>
      <div>
        <DisplayWithLabel
          onClick={() => handleClickBet('10')}
          value={value10}
          bgColor="#f20603"
          footer="10"
        />
        <DisplayWithLabel
          onClick={() => handleClickBet('23')}
          value={value23}
          bgColor="#000"
          footer="23"
        />
      </div>
      <div>
        <DisplayWithLabel
          onClick={() => handleClickBet('11')}
          value={value11}
          bgColor="#000"
          footer="11"
        />
        <DisplayWithLabel
          onClick={() => handleClickBet('24')}
          value={value24}
          bgColor="#f20603"
          footer="24"
        />
      </div>
      <div>
        <DisplayWithLabel
          onClick={() => handleClickBet('12')}
          value={value12}
          bgColor="#f20603"
          footer="12"
        />
        <DisplayWithLabel
          onClick={() => handleClickBet('25')}
          value={value25}
          bgColor="#000"
          footer="25"
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
