import styled from 'styled-components';

export const TopBox = styled.div.attrs<{
  $top_borderLeftColor: boolean;
  $top_borderRightColor: boolean;
  $top_borderTopColor: boolean;
  $top_borderBottomColor: boolean;
}>((props) => props)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  margin-left: 5px;
  height: 22px;
  background: #361206;
  border-left: 10px ridge
    ${(props) => (props.$top_borderLeftColor ? '#ef0911' : 'transparent')};
  border-right: 10px ridge
    ${(props) => (props.$top_borderRightColor ? '#ef0911' : 'transparent')};
  border-top: 5px inset
    ${(props) => (props.$top_borderTopColor ? '#ef0911' : 'transparent')};
  border-bottom: 10px ridge
    ${(props) => (props.$top_borderBottomColor ? '#ef0911' : 'transparent')};
  border-radius: 10px;
`;

export const BottomBox = styled.div.attrs<{
  $bottom_borderLeftColor: boolean;
  $bottom_borderRightColor: boolean;
  $bottom_borderTopColor: boolean;
  $bottom_borderBottomColor: boolean;
}>((props) => props)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  margin-left: 5px;
  height: 22px;
  background: #361206;
  border-left: 10px ridge
    ${(props) => (props.$bottom_borderLeftColor ? '#ef0911' : 'transparent')};
  border-right: 10px ridge
    ${(props) => (props.$bottom_borderRightColor ? '#ef0911' : 'transparent')};
  border-top: 5px inset
    ${(props) => (props.$bottom_borderTopColor ? '#ef0911' : 'transparent')};
  border-bottom: 10px ridge
    ${(props) => (props.$bottom_borderBottomColor ? '#ef0911' : 'transparent')};
  border-radius: 10px;
`;
