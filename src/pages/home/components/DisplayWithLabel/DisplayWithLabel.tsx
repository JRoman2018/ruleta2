import React, { FC } from 'react';
import {
  DisplayContainer,
  DisplayFooter,
  DisplayWrapper,
} from './DisplayWithLabel.style';
import Display from '../../../../components/Display/Display';
import { numberMap } from '../../../../utils/utils';

type DisplayWithLabelProp = {
  onClick?: () => void;
  value: string | React.ReactElement;
  bgColor: string;
  footer: string;
};

const DisplayWithLabel: FC<DisplayWithLabelProp> = ({
  onClick,
  value,
  bgColor,
  footer,
}) => {
  return (
    <DisplayContainer onClick={onClick ? onClick : undefined}>
      <DisplayWrapper>
        {typeof value === 'string'
          ? value.split('').map((number, index) => {
              return (
                <Display
                  key={`${number}-${index}`}
                  {...numberMap[parseInt(number)]}
                />
              );
            })
          : value}
      </DisplayWrapper>
      <DisplayFooter $bgColor={bgColor}>{footer}</DisplayFooter>
    </DisplayContainer>
  );
};

export default DisplayWithLabel;
