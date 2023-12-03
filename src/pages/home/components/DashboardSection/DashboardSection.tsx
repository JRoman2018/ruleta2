import { FC } from 'react';
import { DisplayContainer, Title } from './DashboardSection.style';
import Display from '../../../../components/Display/Display';
import { numberMap } from '../../../../utils/utils';

type DashboardSectionProps = {
  credit: string;
  jackpot1: string;
};

const DashboardSection: FC<DashboardSectionProps> = ({ credit, jackpot1 }) => {
  return (
    <div>
      <div>
        <Title>Barrilito</Title>
        <DisplayContainer>
          {jackpot1.split('').map((number, index) => {
            return (
              <Display
                key={`${number}-${index}`}
                {...numberMap[parseInt(number)]}
              />
            );
          })}
        </DisplayContainer>
      </div>
      <div>
        <Title>Créditos</Title>
        <DisplayContainer>
          {credit.split('').map((number, index) => {
            return (
              <Display
                key={`${number}-${index}`}
                {...numberMap[parseInt(number)]}
              />
            );
          })}
        </DisplayContainer>
      </div>
    </div>
  );
};

export default DashboardSection;
