import React, { FC } from 'react';
import {
  DisplayContainer,
  DisplayFooter,
  DisplayWrapper,
} from './DisplayWithLabel.style';
import Display from '../Display/Display';
import { numberMap } from '../../utils/utils';

type DisplayWithLabelProp = {
  onClick?: () => void;
  value: string | React.ReactElement;
  bgColor: string;
  footerStyle?: object;
  footer: string | React.ReactElement;
};

const DisplayWithLabel: FC<DisplayWithLabelProp> = ({
  onClick,
  value,
  bgColor,
  footerStyle,
  footer,
}) => {
  return (
    <DisplayContainer onClick={onClick ? onClick : undefined}>
      <DisplayWrapper
        $isString={typeof value === 'string' || typeof value === 'object'}
      >
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
      <DisplayFooter style={footerStyle} $bgColor={bgColor}>
        {footer}
      </DisplayFooter>
    </DisplayContainer>
  );
};

export default DisplayWithLabel;
