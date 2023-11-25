import { FC } from 'react';
import {
  DisplayContainer,
  HistoryContainer,
  StyledButton,
} from './HistorySection.style';
import Display from '../../../../components/Display/Display';
import { numberMap } from '../../../../utils/utils';
import DisplayWithLabel from '../DisplayWithLabel/DisplayWithLabel';
import { Button } from '@mui/material';

type HistorySectionProps = {
  history: number[];
  price: string;
};

const HistorySection: FC<HistorySectionProps> = ({ history, price }) => {
  return (
    <HistoryContainer>
      <Button sx={{ margin: '3px', minWidth: '100px' }} variant="contained">
        Simple
      </Button>
      <Button sx={{ margin: '3px', minWidth: '100px' }} variant="contained">
        Doble
      </Button>
      <Button sx={{ margin: '3px', minWidth: '100px' }} variant="contained">
        Con Fruta
      </Button>
      {history.map((number, index) => {
        const numberLength = number.toString().length;
        return (
          <DisplayContainer key={`${number}-${index}`}>
            {number.toString() && numberLength && numberLength > 0 ? (
              numberLength === 1 ? (
                <Display {...numberMap[number]} />
              ) : (
                <>
                  <Display {...numberMap[parseInt(number.toString()[0])]} />
                  <Display {...numberMap[parseInt(number.toString()[1])]} />
                </>
              )
            ) : null}
          </DisplayContainer>
        );
      })}
      <DisplayWithLabel value={<>Fruta</>} footer="Fruta" bgColor="green" />
      <DisplayWithLabel value={price} footer="Premio" bgColor="blue" />
    </HistoryContainer>
  );
};

export default HistorySection;
