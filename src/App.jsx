import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Stack } from '@mui/material';

import theme from './theme';

import { TextField, PrimaryButton, SecondaryButton } from './components';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Stack p={2} direction="column" gap={2} alignItems="flex-start">
        <TextField label="Label" />
        <TextField label="Label 2" />

        <PrimaryButton>Primary Button</PrimaryButton>
        <SecondaryButton>Secondary Button</SecondaryButton>
      </Stack>
    </ThemeProvider>
  );
};
