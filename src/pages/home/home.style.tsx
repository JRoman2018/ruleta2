import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  width: 100%;
`;

export const MainWrapper = styled.section`
  background-color: #282c34;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const HistoryContainer = styled.section`
  background-color: #282c34;
  height: 128px;
`;

export const BetWrapper = styled.section`
  display: flex;
  align-items: center;
  padding: 20px;
  height: 350px;
  background: #361206;
  border: ridge 8px #e1dee3;
  border-radius: 10px;
  box-shadow: 0 0.6rem 0.6rem rgba(0, 0, 0, 0.33);
`;

export const FruitBetWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: #361206;
  border: ridge 8px #e1dee3;
  border-radius: 10px;
  box-shadow: 0 0.6rem 0.6rem rgba(0, 0, 0, 0.33);
`;
