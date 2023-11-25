import { FC } from 'react';
import {
  DisplayContainer,
  DisplayFooter,
  DisplayWrapper,
  PlayBtn,
} from './BetBoard.style';
import Display from '../../../../components/Display/Display';
import { numberMap } from '../../../../utils/utils';

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
      <DisplayContainer>
        <DisplayWrapper>
          {total.split('').map((number) => {
            return <Display {...numberMap[parseInt(number)]} />;
          })}
        </DisplayWrapper>
        <DisplayFooter $bgColor="#d59d34">TOTAL BET</DisplayFooter>
      </DisplayContainer>
      <DisplayContainer onClick={() => handleClickBet('0')}>
        <DisplayWrapper>
          {value0.split('').map((number) => {
            return <Display {...numberMap[parseInt(number)]} />;
          })}
        </DisplayWrapper>
        <DisplayFooter $bgColor="#f20603">0</DisplayFooter>
      </DisplayContainer>
      <div>
        <DisplayContainer onClick={() => handleClickBet('1')}>
          <DisplayWrapper>
            {value1.split('').map((number) => {
              return <Display {...numberMap[parseInt(number)]} />;
            })}
          </DisplayWrapper>
          <DisplayFooter $bgColor="#f20603">1</DisplayFooter>
        </DisplayContainer>
        <DisplayContainer onClick={() => handleClickBet('7')}>
          <DisplayWrapper>
            {value7.split('').map((number) => {
              return <Display {...numberMap[parseInt(number)]} />;
            })}
          </DisplayWrapper>
          <DisplayFooter $bgColor="#f20603">7</DisplayFooter>
        </DisplayContainer>
      </div>
      <div>
        <DisplayContainer onClick={() => handleClickBet('2')}>
          <DisplayWrapper>
            {value2.split('').map((number) => {
              return <Display {...numberMap[parseInt(number)]} />;
            })}
          </DisplayWrapper>
          <DisplayFooter $bgColor="#000">2</DisplayFooter>
        </DisplayContainer>
        <DisplayContainer onClick={() => handleClickBet('8')}>
          <DisplayWrapper>
            {value8.split('').map((number) => {
              return <Display {...numberMap[parseInt(number)]} />;
            })}
          </DisplayWrapper>
          <DisplayFooter $bgColor="#000">8</DisplayFooter>
        </DisplayContainer>
      </div>
      <div>
        <DisplayContainer onClick={() => handleClickBet('3')}>
          <DisplayWrapper>
            {value3.split('').map((number) => {
              return <Display {...numberMap[parseInt(number)]} />;
            })}
          </DisplayWrapper>
          <DisplayFooter $bgColor="#f20603">3</DisplayFooter>
        </DisplayContainer>
        <DisplayContainer onClick={() => handleClickBet('9')}>
          <DisplayWrapper>
            {value9.split('').map((number) => {
              return <Display {...numberMap[parseInt(number)]} />;
            })}
          </DisplayWrapper>
          <DisplayFooter $bgColor="#f20603">9</DisplayFooter>
        </DisplayContainer>
      </div>
      <div>
        <DisplayContainer onClick={() => handleClickBet('4')}>
          <DisplayWrapper>
            {value4.split('').map((number) => {
              return <Display {...numberMap[parseInt(number)]} />;
            })}
          </DisplayWrapper>
          <DisplayFooter $bgColor="#000">4</DisplayFooter>
        </DisplayContainer>
        <DisplayContainer onClick={() => handleClickBet('10')}>
          <DisplayWrapper>
            {value10.split('').map((number) => {
              return <Display {...numberMap[parseInt(number)]} />;
            })}
          </DisplayWrapper>
          <DisplayFooter $bgColor="#000">10</DisplayFooter>
        </DisplayContainer>
      </div>
      <div>
        <DisplayContainer onClick={() => handleClickBet('5')}>
          <DisplayWrapper>
            {value5.split('').map((number) => {
              return <Display {...numberMap[parseInt(number)]} />;
            })}
          </DisplayWrapper>
          <DisplayFooter $bgColor="#f20603">5</DisplayFooter>
        </DisplayContainer>
        <DisplayContainer onClick={() => handleClickBet('11')}>
          <DisplayWrapper>
            {value11.split('').map((number) => {
              return <Display {...numberMap[parseInt(number)]} />;
            })}
          </DisplayWrapper>
          <DisplayFooter $bgColor="#f20603">11</DisplayFooter>
        </DisplayContainer>
      </div>
      <div>
        <DisplayContainer onClick={() => handleClickBet('6')}>
          <DisplayWrapper>
            {value6.split('').map((number) => {
              return <Display {...numberMap[parseInt(number)]} />;
            })}
          </DisplayWrapper>
          <DisplayFooter $bgColor="#000">6</DisplayFooter>
        </DisplayContainer>
        <DisplayContainer onClick={() => handleClickBet('12')}>
          <DisplayWrapper>
            {value12.split('').map((number) => {
              return <Display {...numberMap[parseInt(number)]} />;
            })}
          </DisplayWrapper>
          <DisplayFooter $bgColor="#000">12</DisplayFooter>
        </DisplayContainer>
      </div>
      <div>
        <DisplayContainer onClick={() => handleClickBet('1_6')}>
          <DisplayWrapper>
            {value1_6.split('').map((number) => {
              return <Display {...numberMap[parseInt(number)]} />;
            })}
          </DisplayWrapper>
          <DisplayFooter $bgColor="#f1bb16">1 - 6</DisplayFooter>
        </DisplayContainer>
        <DisplayContainer onClick={() => handleClickBet('7_12')}>
          <DisplayWrapper>
            {value7_12.split('').map((number) => {
              return <Display {...numberMap[parseInt(number)]} />;
            })}
          </DisplayWrapper>
          <DisplayFooter $bgColor="#f1bb16">7 - 12</DisplayFooter>
        </DisplayContainer>
      </div>
      <div>
        <DisplayContainer onClick={() => handleClickBet('red')}>
          <DisplayWrapper>
            {valueRed.split('').map((number) => {
              return <Display {...numberMap[parseInt(number)]} />;
            })}
          </DisplayWrapper>
          <DisplayFooter $bgColor="#f20603">Red</DisplayFooter>
        </DisplayContainer>
        <DisplayContainer onClick={() => handleClickBet('black')}>
          <DisplayWrapper>
            {valueBlack.split('').map((number) => {
              return <Display {...numberMap[parseInt(number)]} />;
            })}
          </DisplayWrapper>
          <DisplayFooter $bgColor="#000">Black</DisplayFooter>
        </DisplayContainer>
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
