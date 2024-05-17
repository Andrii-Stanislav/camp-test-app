import { Button as MuiButton } from '@mui/material';
import styled from '@emotion/styled';

const StyledButton = styled(MuiButton)`
  background: #ffffff;
  color: #101828;
  border: 1px solid #47546733;

  :hover {
    background: #ffffff;
    border-color: #e44848;
  }
`;

export const SecondaryButton = ({ ...rest }) => {
  return <StyledButton {...rest} variant="contained" />;
};
