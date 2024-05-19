import { Stack } from '@mui/material';
import styled from '@emotion/styled';

const List = styled(Stack)`
  height: calc(100vh - 72px);
  overflow-y: scroll;
  padding-bottom: 24px;

  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

export const CamperList = ({ children }) => {
  return (
    <List direction="column" gap={4}>
      {children}
    </List>
  );
};
