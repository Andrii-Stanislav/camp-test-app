import {
  Box,
  Stack,
  Typography,
  SvgIcon,
  ImageList,
  ImageListItem,
  Tabs,
  Tab,
} from '@mui/material';
import styled from '@emotion/styled';
import { useState } from 'react';

import { ReactComponent as StarSvg } from '../assets/svg/star.svg';
import { ReactComponent as MapPinSvg } from '../assets/svg/map-pin.svg';
import { useCamperTags } from '../hooks/useCamperTags';

import { Chip } from './Chip';

const TABS = {
  Features: 'Features',
  Reviews: 'Reviews',
};

const Wrapper = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px;
  border-radius: 20px;
  width: 982px;
  height: 720px;
  background-color: #fff;
  overflow: scroll;
`;

const BoldText = styled(Typography)`
  font-size: 24px;
  font-weight: 600;
  line-height: 30px;
`;

const Title = styled(BoldText)`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const Description = styled(Typography)`
  max-width: 100%;
  font-size: 16px;
  line-height: 24px;
`;

const StyledImageListItem = styled(ImageListItem)`
  border-radius: 10px;
  overflow: hidden;
`;

export const CamperModalContent = ({ camperInfo }) => {
  const [currentTab, setCurrentTab] = useState(TABS.Features);

  const handleTabChange = (e, newPath) => {
    setCurrentTab(newPath);
  };

  const tags = useCamperTags(camperInfo);

  return (
    <Wrapper>
      <Box pb={1}>
        <Title>{camperInfo?.name}</Title>
      </Box>

      <Stack direction="row" alignItems="center" gap={2} pb={2}>
        <Stack direction="row" alignItems="center">
          <SvgIcon>
            <StarSvg />
          </SvgIcon>

          <Typography>
            {camperInfo?.rating}({camperInfo?.reviews?.length ?? 0} Reviews)
          </Typography>
        </Stack>

        <Stack direction="row" alignItems="center">
          <SvgIcon>
            <MapPinSvg />
          </SvgIcon>

          <Typography>{camperInfo?.location}</Typography>
        </Stack>
      </Stack>

      <Box pb={4}>
        <BoldText>€{camperInfo?.price?.toFixed(2)}</BoldText>
      </Box>

      <Box pb={4}>
        <ImageList
          sx={{ width: 900, height: 310 }}
          cols={3}
          rowHeight={310}
          gap={16}
        >
          {camperInfo?.gallery.map((item) => (
            <StyledImageListItem key={item}>
              <img src={item} alt={camperInfo?.name} loading="lazy" />
            </StyledImageListItem>
          ))}
        </ImageList>
      </Box>

      <Box pb={6}>
        <Description>{camperInfo?.description}</Description>
      </Box>

      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={currentTab} onChange={handleTabChange}>
          <Tab label={TABS.Features} value={TABS.Features} />
          <Tab label={TABS.Reviews} value={TABS.Reviews} />
        </Tabs>
      </Box>

      {/* <Stack direction="row" flexWrap="wrap" gap={1}>
        {(tags ?? [])?.map((tag) => (
          <Chip key={tag.label} icon={tag.icon} label={tag.label} />
        ))}
      </Stack> */}
    </Wrapper>
  );
};
