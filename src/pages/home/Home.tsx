import { useEffect, useState } from 'react';
import {
  BetWrapper,
  Container,
  FruitBetWrapper,
  HistoryContainer,
  MainWrapper,
} from './home.style';
import { Wheel } from '../../components/Wheel';
import HistorySection from './components/HistorySection/HistorySection';
import DashboardSection from './components/DashboardSection/DashboardSection';
import {
  FRUITS,
  getRandomFruitKey,
  padWithLeadingZeros,
} from '../../utils/utils';
import BetBoard from './components/BetBoard/BetBoard';
import FruitBetBoard from './components/BetBoard/FruitBetBoard';

const data = [
  { option: '5', style: { backgroundColor: '#03651a' } },
  { option: '12' },
  { option: '3' },
  { option: '10' },
  { option: '1' },
  { option: '8' },
  { option: '9' },
  { option: '2' },
  { option: '7' },
  { option: '6' },
  { option: '11' },
  { option: '4' },
  { option: '13' },
  { option: '14' },
  { option: '15' },
  { option: '16' },
  { option: '17' },
  { option: '18' },
  { option: '19' },
  { option: '20' },
  { option: '21' },
  { option: '22' },
  { option: '23' },
  { option: '24' },
  { option: '25' },
];

const backgroundColors = ['#010101', '#f90205'];
const textColors = ['#fff'];
const outerBorderColor = '#241dcc';
const outerBorderWidth = 10;
const innerBorderColor = '#d3d3d3';
const innerBorderWidth = 5;
const innerRadius = 12;
const radiusLineColor = '#bab2b9';
const radiusLineWidth = 3;
const fontFamily = 'Nunito';
const fontWeight = 'bold';
const fontSize = 20;
const fontStyle = 'normal';
const textDistance = 65;
const spinDuration = 1.0;

const Home = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [credit, setCredit] = useState(36);
  const [jackpot1, setJackpot1] = useState(300);
  const [history, setHistory] = useState([0, 0]);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [fruit, setFruit] = useState(FRUITS.mango);
  const [selectedValue, setSelectedValue] = useState(0);
  const [hasStoppedSpinning, setHasStoppedSpinning] = useState(false);

  // Bet
  const [totalBet, setTotalBet] = useState(0);
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const [value4, setValue4] = useState(0);
  const [value5, setValue5] = useState(0);
  const [value6, setValue6] = useState(0);
  const [value7, setValue7] = useState(0);
  const [value8, setValue8] = useState(0);
  const [value9, setValue9] = useState(0);
  const [value10, setValue10] = useState(0);
  const [value11, setValue11] = useState(0);
  const [value12, setValue12] = useState(0);
  const [value13, setValue13] = useState(0);
  const [value14, setValue14] = useState(0);
  const [value15, setValue15] = useState(0);
  const [value16, setValue16] = useState(0);
  const [value17, setValue17] = useState(0);
  const [value18, setValue18] = useState(0);
  const [value19, setValue19] = useState(0);
  const [value20, setValue20] = useState(0);
  const [value21, setValue21] = useState(0);
  const [value22, setValue22] = useState(0);
  const [value23, setValue23] = useState(0);
  const [value24, setValue24] = useState(0);
  const [value25, setValue25] = useState(0);
  const [apple, setApple] = useState(0);
  const [banana, setBanana] = useState(0);
  const [mango, setMango] = useState(0);
  const [pineapple, setPineapple] = useState(0);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  const handleClear = () => {
    setValue1(0);
    setValue2(0);
    setValue3(0);
    setValue4(0);
    setValue5(0);
    setValue6(0);
    setValue7(0);
    setValue8(0);
    setValue9(0);
    setValue10(0);
    setValue11(0);
    setValue12(0);
    setValue13(0);
    setValue14(0);
    setValue15(0);
    setValue16(0);
    setValue17(0);
    setValue18(0);
    setValue19(0);
    setValue20(0);
    setValue21(0);
    setValue22(0);
    setValue23(0);
    setValue24(0);
    setValue25(0);
    setApple(0);
    setBanana(0);
    setMango(0);
    setPineapple(0);
    setCredit((prev) => prev + totalBet);
    setTotalBet(0);
  };

  const updateGlobalValues = () => {
    setTotalBet((prev) => prev + 1);
    setCredit((prev) => prev - 1);
  };

  const handleCredit = (
    updateFn: React.Dispatch<React.SetStateAction<number>>
  ) => {
    if (credit > 0) {
      updateFn((prev) => prev + 1);
      updateGlobalValues();
    } else {
      console.log('no fondo');
    }
  };

  const handleClickBet = (bet: string) => {
    switch (bet) {
      case '1':
        handleCredit(setValue1);
        break;
      case '2':
        handleCredit(setValue2);
        break;
      case '3':
        handleCredit(setValue3);
        break;
      case '4':
        handleCredit(setValue4);
        break;
      case '5':
        handleCredit(setValue5);
        break;
      case '6':
        handleCredit(setValue6);
        break;
      case '7':
        handleCredit(setValue7);
        break;
      case '8':
        handleCredit(setValue8);
        break;
      case '9':
        handleCredit(setValue9);
        break;
      case '10':
        handleCredit(setValue10);
        break;
      case '11':
        handleCredit(setValue11);
        break;
      case '12':
        handleCredit(setValue12);
        break;
      case '13':
        handleCredit(setValue13);
        break;
      case '14':
        handleCredit(setValue14);
        break;
      case '15':
        handleCredit(setValue15);
        break;
      case '16':
        handleCredit(setValue16);
        break;
      case '17':
        handleCredit(setValue17);
        break;
      case '18':
        handleCredit(setValue18);
        break;
      case '19':
        handleCredit(setValue19);
        break;
      case '20':
        handleCredit(setValue20);
        break;
      case '21':
        handleCredit(setValue21);
        break;
      case '22':
        handleCredit(setValue22);
        break;
      case '23':
        handleCredit(setValue23);
        break;
      case '24':
        handleCredit(setValue24);
        break;
      case '25':
        handleCredit(setValue25);
        break;
      case 'apple':
        handleCredit(setApple);
        break;
      case 'banana':
        handleCredit(setBanana);
        break;
      case 'pineapple':
        handleCredit(setPineapple);
        break;
      case 'mango':
        handleCredit(setMango);
        break;
      default:
        console.log('error');
    }
  };

  useEffect(() => {
    if (selectedValue && hasStoppedSpinning) {
      const newFruit = getRandomFruitKey(FRUITS);
      setFruit(FRUITS[newFruit]);
      setHistory((prevH) => {
        return [
          parseInt(data[parseInt(selectedValue.toString())].option),
          ...prevH.slice(0, prevH.length - 1),
        ];
      });
    }
  }, [hasStoppedSpinning, selectedValue]);

  return (
    <Container>
      <HistoryContainer>
        <HistorySection
          fruit={fruit}
          history={history}
          price={padWithLeadingZeros(history[0], 2)}
        />
      </HistoryContainer>
      <MainWrapper>
        <Wheel
          disableInitialAnimation
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          backgroundColors={backgroundColors}
          textColors={textColors}
          fontFamily={fontFamily}
          fontSize={fontSize}
          fontWeight={fontWeight}
          fontStyle={fontStyle}
          outerBorderColor={outerBorderColor}
          outerBorderWidth={outerBorderWidth}
          innerRadius={innerRadius}
          innerBorderColor={innerBorderColor}
          innerBorderWidth={innerBorderWidth}
          radiusLineColor={radiusLineColor}
          radiusLineWidth={radiusLineWidth}
          setSelectedValue={setSelectedValue}
          spinDuration={spinDuration}
          hasStoppedSpinning={hasStoppedSpinning}
          setHasStoppedSpinning={setHasStoppedSpinning}
          startingOptionIndex={2}
          perpendicularText
          textDistance={textDistance}
          onStopSpinning={() => {
            setMustSpin(false);
          }}
        />
        <section>
          <DashboardSection
            credit={padWithLeadingZeros(credit, 4)}
            jackpot1={padWithLeadingZeros(jackpot1, 4)}
          />
        </section>
      </MainWrapper>
      <FruitBetWrapper>
        <FruitBetBoard
          apple={padWithLeadingZeros(apple, 2)}
          banana={padWithLeadingZeros(banana, 2)}
          pineapple={padWithLeadingZeros(pineapple, 2)}
          mango={padWithLeadingZeros(mango, 2)}
          handleClickBet={handleClickBet}
        />
      </FruitBetWrapper>
      <BetWrapper>
        <BetBoard
          total={padWithLeadingZeros(totalBet, 4)}
          value1={padWithLeadingZeros(value1, 2)}
          value2={padWithLeadingZeros(value2, 2)}
          value3={padWithLeadingZeros(value3, 2)}
          value4={padWithLeadingZeros(value4, 2)}
          value5={padWithLeadingZeros(value5, 2)}
          value6={padWithLeadingZeros(value6, 2)}
          value7={padWithLeadingZeros(value7, 2)}
          value8={padWithLeadingZeros(value8, 2)}
          value9={padWithLeadingZeros(value9, 2)}
          value10={padWithLeadingZeros(value10, 2)}
          value11={padWithLeadingZeros(value11, 2)}
          value12={padWithLeadingZeros(value12, 2)}
          value13={padWithLeadingZeros(value13, 2)}
          value14={padWithLeadingZeros(value14, 2)}
          value15={padWithLeadingZeros(value15, 2)}
          value16={padWithLeadingZeros(value16, 2)}
          value17={padWithLeadingZeros(value17, 2)}
          value18={padWithLeadingZeros(value18, 2)}
          value19={padWithLeadingZeros(value19, 2)}
          value20={padWithLeadingZeros(value20, 2)}
          value21={padWithLeadingZeros(value21, 2)}
          value22={padWithLeadingZeros(value22, 2)}
          value23={padWithLeadingZeros(value23, 2)}
          value24={padWithLeadingZeros(value24, 2)}
          value25={padWithLeadingZeros(value25, 2)}
          handleClickBet={handleClickBet}
          handleClear={handleClear}
          handleSpinClick={handleSpinClick}
        />
      </BetWrapper>
    </Container>
  );
};

export default Home;
