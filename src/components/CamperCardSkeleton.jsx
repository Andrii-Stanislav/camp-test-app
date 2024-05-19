import { Box, Stack, Skeleton } from '@mui/material';
import styled from '@emotion/styled';

import { ChipSkeleton } from './Chip';

const Wrapper = styled(Box)`
  display: flex;
  gap: 24px;
  padding: 24px;
  border: 1px solid #10182833;
  border-radius: 20px;
  max-width: 888px;
`;

const InfoBlock = styled(Box)`
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 526px;
`;

export const CamperCardSkeleton = () => {
  const tags = Array.from({ length: 5 }).map((_, index) => ({
    id: index,
    name: `Tag ${index + 1}`,
  }));

  return (
    <Wrapper>
      <Skeleton variant="rounded" width={290} height={310} />

      <InfoBlock>
        <Box>
          <Stack direction="row" justifyContent="space-between" gap={1} pb={2}>
            <Skeleton variant="rectangular" width={210} height={30} />

            <Skeleton variant="rectangular" width={100} height={30} />
          </Stack>

          <Stack direction="row" alignItems="center" gap={2} pb={3}>
            <Skeleton variant="rectangular" width={100} height={24} />

            <Skeleton variant="rectangular" width={150} height={24} />
          </Stack>

          <Box pb={3} maxWidth="100%" overflow="hidden">
            <Skeleton variant="rectangular" width={500} height={24} />
          </Box>

          <Stack direction="row" flexWrap="wrap" gap={1}>
            {tags.map((tag) => (
              <ChipSkeleton key={tag.id} />
            ))}
          </Stack>
        </Box>

        <Box>
          <Skeleton
            variant="rectangular"
            width={145}
            height={56}
            style={{ borderRadius: 28 }}
          />
        </Box>
      </InfoBlock>
    </Wrapper>
  );
};
