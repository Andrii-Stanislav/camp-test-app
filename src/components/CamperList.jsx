import { useState } from 'react';
import { Typography, Stack, Modal } from '@mui/material';
import styled from '@emotion/styled';

import { CamperCard } from './CamperCard';
import { CamperCardSkeleton } from './CamperCardSkeleton';
import { CamperModalContent } from './CamperModalContent';

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
  const [modalCamper, setModalCamper] = useState(null);

  const onClickShowMore = (camper) => setModalCamper(camper);
  const handleClose = () => setModalCamper(null);

  return (
    <>
      <List>
        {isLoading
          ? SKELETON_CAMPERS.map((_, index) => (
              <CamperCardSkeleton key={index} />
            ))
          : (campers ?? []).map((camper) => (
              <CamperCard
                key={camper._id}
                camperInfo={camper}
                onClickShowMore={onClickShowMore?.bind(null, camper)}
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

      <Modal open={Boolean(modalCamper)} onClose={handleClose}>
        <>{modalCamper && <CamperModalContent camperInfo={modalCamper} />}</>
      </Modal>
    </>
  );
};
