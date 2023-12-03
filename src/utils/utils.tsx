import AppleIcon from '../assets/AppleIcon';
import BananaIcon from '../assets/BananaIcon';
import MangoIcon from '../assets/MangoIcon';
import PineappleIcon from '../assets/PineappleIcon';

export type FruitType = {
  apple: React.ReactElement;
  banana: React.ReactElement;
  mango: React.ReactElement;
  pineapple: React.ReactElement;
};

export const numberMap = [
  {
    top_borderTopColor: true,
    top_borderLeftColor: true,
    top_borderRightColor: true,
    top_borderBottomColor: false,

    bottom_borderTopColor: false,
    bottom_borderLeftColor: true,
    bottom_borderRightColor: true,
    bottom_borderBottomColor: true,
  },
  {
    top_borderTopColor: false,
    top_borderLeftColor: false,
    top_borderRightColor: true,
    top_borderBottomColor: false,

    bottom_borderTopColor: false,
    bottom_borderLeftColor: false,
    bottom_borderRightColor: true,
    bottom_borderBottomColor: false,
  },
  {
    top_borderTopColor: true,
    top_borderLeftColor: false,
    top_borderRightColor: true,
    top_borderBottomColor: true,

    bottom_borderTopColor: true,
    bottom_borderLeftColor: true,
    bottom_borderRightColor: false,
    bottom_borderBottomColor: true,
  },
  {
    top_borderTopColor: true,
    top_borderLeftColor: false,
    top_borderRightColor: true,
    top_borderBottomColor: true,

    bottom_borderTopColor: true,
    bottom_borderLeftColor: false,
    bottom_borderRightColor: true,
    bottom_borderBottomColor: true,
  },
  {
    top_borderTopColor: false,
    top_borderLeftColor: true,
    top_borderRightColor: true,
    top_borderBottomColor: true,

    bottom_borderTopColor: true,
    bottom_borderLeftColor: false,
    bottom_borderRightColor: true,
    bottom_borderBottomColor: false,
  },
  {
    top_borderTopColor: true,
    top_borderLeftColor: true,
    top_borderRightColor: false,
    top_borderBottomColor: true,

    bottom_borderTopColor: true,
    bottom_borderLeftColor: false,
    bottom_borderRightColor: true,
    bottom_borderBottomColor: true,
  },
  {
    top_borderTopColor: true,
    top_borderLeftColor: true,
    top_borderRightColor: false,
    top_borderBottomColor: true,

    bottom_borderTopColor: true,
    bottom_borderLeftColor: true,
    bottom_borderRightColor: true,
    bottom_borderBottomColor: true,
  },
  {
    top_borderTopColor: true,
    top_borderLeftColor: true,
    top_borderRightColor: true,
    top_borderBottomColor: false,

    bottom_borderTopColor: false,
    bottom_borderLeftColor: false,
    bottom_borderRightColor: true,
    bottom_borderBottomColor: false,
  },
  {
    top_borderTopColor: true,
    top_borderLeftColor: true,
    top_borderRightColor: true,
    top_borderBottomColor: true,

    bottom_borderTopColor: true,
    bottom_borderLeftColor: true,
    bottom_borderRightColor: true,
    bottom_borderBottomColor: true,
  },
  {
    top_borderTopColor: true,
    top_borderLeftColor: true,
    top_borderRightColor: true,
    top_borderBottomColor: true,

    bottom_borderTopColor: true,
    bottom_borderLeftColor: false,
    bottom_borderRightColor: true,
    bottom_borderBottomColor: true,
  },
];

export const FRUITS: FruitType = {
  apple: <AppleIcon />,
  banana: <BananaIcon />,
  mango: <MangoIcon />,
  pineapple: <PineappleIcon />,
};

export const padWithLeadingZeros = (num: number, totalLength: number) => {
  return String(num).padStart(totalLength, '0');
};

export const getRandomFruitKey = (object: FruitType): keyof FruitType => {
  const keys = Object.keys(object) as (keyof FruitType)[];

  return keys[Math.floor(Math.random() * keys.length)];
};
