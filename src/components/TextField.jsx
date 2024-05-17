import { useId } from 'react';
import { TextField as MuiTextField, Stack } from '@mui/material';
import styled from '@emotion/styled';

const Label = styled.label`
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  color: #10182899;
`;

export const TextField = ({ label, ...props }) => {
  const id = useId();

  return (
    <Stack direction="column">
      {label ? <Label htmlFor={id}>{label}</Label> : null}
      <MuiTextField id={id} {...props} variant="outlined" />
    </Stack>
  );
};
