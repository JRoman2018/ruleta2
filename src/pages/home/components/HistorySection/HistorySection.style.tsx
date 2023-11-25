import { Button } from '@mui/material';
import styled from 'styled-components';

export const HistoryContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const StyledButton = styled(Button)`
  margin: 0 20px 0 0;
  min-width: 200px;
`;

export const DisplayContainer = styled.div`
  display: flex;
  margin: 3px;
  align-items: center;
  justify-content: space-around;
  width: 160px;
  background: #361206;
  border: ridge 8px #bf9b53;
  border-radius: 10px;
  box-shadow: 0 0.6rem 0.6rem rgba(0, 0, 0, 0.33);
`;
