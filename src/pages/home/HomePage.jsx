import { Typography, Stack } from '@mui/material';

export const HomePage = () => {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      gap={2}
      height="calc(100vh - 72px)"
    >
      <Typography variant="h2" color="#E44848">
        Campers Rent
      </Typography>
      <Typography variant="h6" color="#E44848">
        Modern amenities, comfy beds, and fully functional kitchens.
      </Typography>
    </Stack>
  );
};
