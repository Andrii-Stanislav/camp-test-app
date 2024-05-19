import { Button as MuiButton } from '@mui/material';
import styled from '@emotion/styled';

const StyledButton = styled(MuiButton)`
  background: #e44848;
  color: #ffffff;

  :hover {
    background: #d84343;
  }
`;

export const PrimaryButton = (props) => {
  return <StyledButton {...props} variant="contained" />;
};
