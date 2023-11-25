import { FC } from 'react';
import { DisplayContainer, Title } from './DashboardSection.style';
import Display from '../../../../components/Display/Display';
import { numberMap } from '../../../../utils/utils';

type DashboardSectionProps = {
  credit: string;
  prize: string;
  jackpot1: string;
  jackpot2: string;
};

const DashboardSection: FC<DashboardSectionProps> = ({
  credit,
  jackpot1,
  jackpot2,
}) => {
  return (
    <div>
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
      <div>
        <Title>Jackpot 1</Title>
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
        <Title>Jackpot 2</Title>
        <DisplayContainer>
          {jackpot2.split('').map((number, index) => {
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
