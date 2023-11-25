import { useEffect, useState } from 'react';
import {
  BetWrapper,
  Container,
  HistoryContainer,
  MainWrapper,
} from './home.style';
import { Wheel } from '../../components/Wheel';
import HistorySection from './components/HistorySection/HistorySection';
import DashboardSection from './components/DashboardSection/DashboardSection';
import { padWithLeadingZeros } from '../../utils/utils';
import BetBoard from './components/BetBoard/BetBoard';

const data = [
  { option: '0', style: { backgroundColor: '#03651a' } },
  { option: '5' },
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
  const [prize, setPrize] = useState(0);
  const [jackpot1, setJackpot1] = useState(300);
  const [jackpot2, setJackpot2] = useState(165);
  const [history, setHistory] = useState([0, 0]);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [selectedValue, setSelectedValue] = useState(0);
  const [hasStoppedSpinning, setHasStoppedSpinning] = useState(false);

  // Bet
  const [totalBet, setTotalBet] = useState(0);
  const [value0, setValue0] = useState(0);
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
  const [value1_6, setValue1_6] = useState(0);
  const [value7_12, setValue7_12] = useState(0);
  const [valueRed, setValueRed] = useState(0);
  const [valueBlack, setValueBlack] = useState(0);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  const handleClear = () => {
    setValue0(0);
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
    setValue1_6(0);
    setValue7_12(0);
    setValueRed(0);
    setValueBlack(0);
    setCredit((prev) => prev + totalBet);
    setTotalBet(0);
  };

  const updateGlobalValues = () => {
    setTotalBet((prev) => prev + 1);
    setCredit((prev) => prev - 1);
  };

  const handleClickBet = (bet: string) => {
    switch (bet) {
      case '0':
        if (credit > 0) {
          setValue0((prev) => prev + 1);
          updateGlobalValues();
        } else {
          console.log('no fondo');
        }
        break;
      case '1':
        if (credit > 0) {
          setValue1((prev) => prev + 1);
          updateGlobalValues();
        } else {
          console.log('no fondo');
        }
        break;
      case '2':
        if (credit > 0) {
          setValue2((prev) => prev + 1);
          updateGlobalValues();
        } else {
          console.log('no fondo');
        }
        break;
      case '3':
        if (credit > 0) {
          setValue3((prev) => prev + 1);
          updateGlobalValues();
        } else {
          console.log('no fondo');
        }
        break;
      case '4':
        if (credit > 0) {
          setValue4((prev) => prev + 1);
          updateGlobalValues();
        } else {
          console.log('no fondo');
        }
        break;
      case '5':
        if (credit > 0) {
          setValue5((prev) => prev + 1);
          updateGlobalValues();
        } else {
          console.log('no fondo');
        }
        break;
      case '6':
        if (credit > 0) {
          setValue6((prev) => prev + 1);
          updateGlobalValues();
        } else {
          console.log('no fondo');
        }
        break;
      case '7':
        if (credit > 0) {
          setValue7((prev) => prev + 1);
          updateGlobalValues();
        } else {
          console.log('no fondo');
        }
        break;
      case '8':
        if (credit > 0) {
          setValue8((prev) => prev + 1);
          updateGlobalValues();
        } else {
          console.log('no fondo');
        }
        break;
      case '9':
        if (credit > 0) {
          setValue9((prev) => prev + 1);
          updateGlobalValues();
        } else {
          console.log('no fondo');
        }
        break;
      case '10':
        if (credit > 0) {
          setValue10((prev) => prev + 1);
          updateGlobalValues();
        } else {
          console.log('no fondo');
        }
        break;
      case '11':
        if (credit > 0) {
          setValue11((prev) => prev + 1);
          updateGlobalValues();
        } else {
          console.log('no fondo');
        }
        break;
      case '12':
        if (credit > 0) {
          setValue12((prev) => prev + 1);
          updateGlobalValues();
        } else {
          console.log('no fondo');
        }
        break;
      case '1_6':
        if (credit > 0) {
          setValue1_6((prev) => prev + 1);
          updateGlobalValues();
        } else {
          console.log('no fondo');
        }
        break;
      case '7_12':
        if (credit > 0) {
          setValue7_12((prev) => prev + 1);
          updateGlobalValues();
        } else {
          console.log('no fondo');
        }
        break;
      case 'red':
        if (credit > 0) {
          setValueRed((prev) => prev + 1);
          updateGlobalValues();
        } else {
          console.log('no fondo');
        }
        break;
      case 'black':
        if (credit > 0) {
          setValueBlack((prev) => prev + 1);
          updateGlobalValues();
        } else {
          console.log('no fondo');
        }
        break;
      default:
        console.log('error');
    }
  };

  useEffect(() => {
    if (selectedValue && hasStoppedSpinning) {
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
      <HistorySection
        history={history}
        price={padWithLeadingZeros(history[0], 2)}
      />
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
            prize={padWithLeadingZeros(prize, 4)}
            jackpot1={padWithLeadingZeros(jackpot1, 4)}
            jackpot2={padWithLeadingZeros(jackpot2, 4)}
          />
        </section>
      </MainWrapper>
      <BetWrapper>
        <BetBoard
          total={padWithLeadingZeros(totalBet, 4)}
          value0={padWithLeadingZeros(value0, 2)}
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
          value1_6={padWithLeadingZeros(value1_6, 2)}
          value7_12={padWithLeadingZeros(value7_12, 2)}
          valueRed={padWithLeadingZeros(valueRed, 2)}
          valueBlack={padWithLeadingZeros(valueBlack, 2)}
          handleClickBet={handleClickBet}
          handleClear={handleClear}
          handleSpinClick={handleSpinClick}
        />
      </BetWrapper>
    </Container>
  );
};

export default Home;
