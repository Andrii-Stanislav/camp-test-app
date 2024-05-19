import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from '@emotion/styled';
import { InputAdornment, SvgIcon, Box, Typography } from '@mui/material';

import { fetchCampers } from '../../store/operations/campers';
import {
  changeLocation,
  toggleEquipmentItem,
  toggleVehicleType,
} from '../../store/slices/filter';
import {
  getCampers,
  isLoadingCampers,
  getLocationFilter,
  getEquipmentItemsFilter,
  getVehicleTypeFilter,
} from '../../store/selectors';

import {
  TextField,
  FiltersBlock,
  CamperCard,
  CamperCardSkeleton,
  CamperList,
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

const SKELETON_CAMPERS = Array.from({ length: 4 }).map((_, index) => index);

export const CatalogPage = () => {
  const dispatch = useDispatch();

  const campers = useSelector(getCampers);
  const isLoading = useSelector(isLoadingCampers);

  const location = useSelector(getLocationFilter);
  const equipmentItems = useSelector(getEquipmentItemsFilter);
  const vehicleType = useSelector(getVehicleTypeFilter);

  const handleLocationChange = (e) => {
    dispatch(changeLocation(e.target.value));
  };

  const handleVehicleEquipmentChange = (value) => {
    dispatch(toggleEquipmentItem(value));
  };

  const handleVehicleTypeChange = (value) => {
    dispatch(toggleVehicleType(value));
  };

  useEffect(() => {
    dispatch(fetchCampers({ page: 1, limit: 4 }));
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
        <CamperList>
          {isLoading
            ? SKELETON_CAMPERS.map((_, index) => (
                <CamperCardSkeleton key={index} />
              ))
            : (campers ?? []).map((camper) => (
                <CamperCard
                  key={camper._id}
                  camperInfo={camper}
                  onClickShowMore={() =>
                    console.log('onClickShowMore: ', camper)
                  }
                />
              ))}
        </CamperList>

        {/*
        Show more
         */}
      </RightContent>
    </ContentBox>
  );
};
