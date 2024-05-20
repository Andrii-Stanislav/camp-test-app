import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from '@emotion/styled';
import { InputAdornment, SvgIcon, Box, Typography, Stack } from '@mui/material';

import { fetchCampers } from '../../store/operations/campers';
import { setFirstPage, setNextPage } from '../../store/slices/campers';
import {
  changeLocation,
  toggleEquipmentItem,
  toggleVehicleType,
} from '../../store/slices/filter';
import {
  getCampers,
  getCampersPage,
  getCampersLimit,
  getIsLoadingCampers,
  getHideLoadMoreButton,
  getLocationFilter,
  getEquipmentItemsFilter,
  getVehicleTypeFilter,
} from '../../store/selectors';

import {
  TextField,
  FiltersBlock,
  CamperList,
  SecondaryButton,
  SkeletonButton,
} from '../../components';

import { ReactComponent as MapPinSvg } from '../../assets/svg/map-pin.svg';

import { FILTER_ITEMS, VEHICLE_TYPE_ITEMS } from './constants';

const ContentBox = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 24px 64px 0 64px;
  display: flex;
  gap: 64px;
`;

const LeftContent = styled.div`
  width: 360px;
`;

const RightContent = styled.div`
  flex-grow: 2;
`;

const FiltersText = styled(Typography)`
  padding-bottom: 14px;
  font-weight: 500;
  color: #475467;
`;

export const CatalogPage = () => {
  const dispatch = useDispatch();

  const campers = useSelector(getCampers);
  const page = useSelector(getCampersPage);
  const limit = useSelector(getCampersLimit);
  const isLoading = useSelector(getIsLoadingCampers);
  const hideLoadMoreButton = useSelector(getHideLoadMoreButton);

  const location = useSelector(getLocationFilter);
  const equipmentItems = useSelector(getEquipmentItemsFilter);
  const vehicleType = useSelector(getVehicleTypeFilter);

  const handleLocationChange = (e) => {
    dispatch(setFirstPage());
    dispatch(changeLocation(e.target.value));
  };

  const handleVehicleEquipmentChange = (value) => {
    dispatch(setFirstPage());
    dispatch(toggleEquipmentItem(value));
  };

  const handleVehicleTypeChange = (value) => {
    dispatch(setFirstPage());
    dispatch(toggleVehicleType(value));
  };

  const handleLoadMoreClick = () => {
    dispatch(setNextPage());
  };

  useEffect(() => {
    dispatch(fetchCampers({ limit, location, equipmentItems, vehicleType }));
  }, [dispatch, limit, location, equipmentItems, vehicleType]);

  useEffect(() => {
    return () => {
      dispatch(setFirstPage());
    };
  }, [dispatch]);

  return (
    <ContentBox>
      <LeftContent>
        <Box mb={4}>
          <TextField
            value={location}
            onChange={handleLocationChange}
            label="Location"
            placeholder="Kyiv, Ukraine"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SvgIcon>
                    <MapPinSvg />
                  </SvgIcon>
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <FiltersText>Filters</FiltersText>

        <FiltersBlock
          title="Vehicle equipment"
          items={FILTER_ITEMS}
          selectedItems={equipmentItems}
          onItemClick={handleVehicleEquipmentChange}
        />

        <Box pt={4}>
          <FiltersBlock
            title="Vehicle type"
            items={VEHICLE_TYPE_ITEMS}
            selectedItems={[vehicleType]}
            onItemClick={handleVehicleTypeChange}
          />
        </Box>
      </LeftContent>
      <RightContent>
        <CamperList
          campers={campers}
          isLoading={isLoading}
          loadMoreButton={
            <Stack direction="row" justifyContent="center">
              {isLoading && <SkeletonButton />}

              {!isLoading &&
                !hideLoadMoreButton &&
                !(page === 1 && campers.length === 0) && (
                  <SecondaryButton onClick={handleLoadMoreClick}>
                    Load more
                  </SecondaryButton>
                )}
            </Stack>
          }
        />
      </RightContent>
    </ContentBox>
  );
};
