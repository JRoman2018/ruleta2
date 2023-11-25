import { FC } from 'react';
import { TopBox, BottomBox } from './Display.style';

type DisplayProps = {
  top_borderLeftColor: boolean;
  top_borderRightColor: boolean;
  top_borderTopColor: boolean;
  top_borderBottomColor: boolean;
  bottom_borderLeftColor: boolean;
  bottom_borderRightColor: boolean;
  bottom_borderTopColor: boolean;
  bottom_borderBottomColor: boolean;
};

const Display: FC<DisplayProps> = ({
  top_borderLeftColor,
  top_borderRightColor,
  top_borderTopColor,
  top_borderBottomColor,
  bottom_borderLeftColor,
  bottom_borderRightColor,
  bottom_borderTopColor,
  bottom_borderBottomColor,
}) => {
  return (
    <div>
      <TopBox
        $top_borderLeftColor={top_borderLeftColor}
        $top_borderRightColor={top_borderRightColor}
        $top_borderTopColor={top_borderTopColor}
        $top_borderBottomColor={top_borderBottomColor}
      />
      <BottomBox
        $bottom_borderLeftColor={bottom_borderLeftColor}
        $bottom_borderRightColor={bottom_borderRightColor}
        $bottom_borderTopColor={bottom_borderTopColor}
        $bottom_borderBottomColor={bottom_borderBottomColor}
      />
    </div>
  );
};

export default Display;
