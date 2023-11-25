import styled from 'styled-components';

export const DisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  max-width: 220px;
  background: #361206;
  margin: 3px;
  border: solid 5px #d59d34;
  border-radius: 10px;
  box-shadow: 0 0.6rem 0.6rem rgba(0, 0, 0, 0.33);
`;

export const Title = styled.h2`
  margin: 0;
  color: #dcd063;
`;

export const PlayBtn = styled.button`
  height: 100%;
  min-width: 120px;
`;
