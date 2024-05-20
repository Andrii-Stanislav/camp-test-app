import { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import { CamperList } from '../../components';

import { favoritesService } from '../../utils/favorites-service';

const ContentBox = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 24px 64px 0 64px;
  display: flex;
  justify-content: center;
  gap: 64px;
`;

export const FavoritesPage = () => {
  const [campers, setCampers] = useState([]);

  const refreshFavorites = () => {
    setCampers(favoritesService.getAll());
  };

  useEffect(() => {
    refreshFavorites();
  }, []);

  return (
    <ContentBox>
      <CamperList
        campers={campers}
        isLoading={false}
        afterFavoriteClick={refreshFavorites}
      />
    </ContentBox>
  );
};
