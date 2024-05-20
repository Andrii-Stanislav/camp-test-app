import { Typography, Stack } from '@mui/material';
import styled from '@emotion/styled';

import { CamperCard } from './CamperCard';
import { CamperCardSkeleton } from './CamperCardSkeleton';

const SKELETON_CAMPERS = Array.from({ length: 4 }).map((_, index) => index);

const List = styled(Stack)`
  gap: 32px;
  height: calc(100vh - 72px);
  overflow-y: scroll;
  padding-bottom: 24px;

  /* Hide scrollbar  */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const CamperList = ({
  campers,
  isLoading,
  loadMoreButton,
  afterFavoriteClick,
}) => {
  return (
    <List>
      {isLoading
        ? SKELETON_CAMPERS.map((_, index) => <CamperCardSkeleton key={index} />)
        : (campers ?? []).map((camper) => (
            <CamperCard
              key={camper._id}
              camperInfo={camper}
              onClickShowMore={() => console.log('onClickShowMore: ', camper)}
              afterFavoriteClick={afterFavoriteClick}
            />
          ))}

      <Stack direction="row" justifyContent="center">
        {campers?.length === 0 && !isLoading && (
          <Typography>No cumpers found</Typography>
        )}
      </Stack>

      {loadMoreButton}
    </List>
  );
};
