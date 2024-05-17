import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from '@emotion/styled';

import { fetchCampers } from '../../store/operations/campers';
import { getCampers } from '../../store/selectors';

const ContentBox = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 24px 64px;
  display: flex;
  gap: 64px;
`;

const LeftContent = styled.div`
  width: 360px;
`;

const RightContent = styled.div`
  flex-grow: 2;
`;

export const CatalogPage = () => {
  const dispatch = useDispatch();

  const campers = useSelector(getCampers);

  console.log('campers: ', campers);

  useEffect(() => {
    dispatch(fetchCampers({ page: 1, limit: 4 }));
  }, [dispatch]);

  return (
    <ContentBox>
      <LeftContent>
        LeftContent
        {/*
         */}
      </LeftContent>
      <RightContent>
        RightContent
        {/*
         */}
      </RightContent>
    </ContentBox>
  );
};
