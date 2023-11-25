import { FC } from 'react';
import { DisplayContainer } from './HistorySection.style';
import Display from '../../../../components/Display/Display';
import { numberMap } from '../../../../utils/utils';

type HistorySectionProps = {
  history: number[];
};

const HistorySection: FC<HistorySectionProps> = ({ history }) => {
  return (
    <div>
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
    </div>
  );
};

export default HistorySection;
