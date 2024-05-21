import {
  Box,
  Stack,
  Typography,
  SvgIcon,
  ImageList,
  ImageListItem,
  Tabs,
  Tab,
  Divider,
  IconButton,
} from '@mui/material';
import styled from '@emotion/styled';
import { useState } from 'react';

import { ReactComponent as StarSvg } from '../assets/svg/star.svg';
import { ReactComponent as MapPinSvg } from '../assets/svg/map-pin.svg';
import { ReactComponent as CloseSvg } from '../assets/svg/close.svg';
import { useCamperTags } from '../hooks/useCamperTags';

import { Chip } from './Chip';
import { BookForm } from './BookForm';
import { ReviewItem } from './ReviewItem';

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
`;

const CloseButton = styled(IconButton)`
  position: absolute;
  top: 40px;
  right: 40px;
`;

const ScrollBox = styled(Box)`
  height: 100%;
  overflow: scroll;
  /* Hide scrollbar  */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
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

const Subtitle = styled(Typography)`
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

const InfoText = styled(Typography)`
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
`;

const TextBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:not(:last-child) {
    padding-bottom: 14px;
  }
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

const BottomBlock = styled(Box)`
  display: flex;
  gap: 24px;
  padding-top: 44px;
`;

const TabInfoBox = styled(Box)`
  flex-grow: 2;
  width: 430px;
`;

export const CamperModalContent = ({ camperInfo, onClose }) => {
  const [currentTab, setCurrentTab] = useState(TABS.Features);

  const handleTabChange = (e, newPath) => {
    setCurrentTab(newPath);
  };

  const tags = useCamperTags(camperInfo, { showFullInfo: true });

  return (
    <Wrapper>
      <ScrollBox>
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

        <BottomBlock>
          <TabInfoBox>
            {currentTab === TABS.Features && (
              <>
                <Stack direction="row" flexWrap="wrap" gap={1}>
                  {(tags ?? [])?.map((tag) => (
                    <Chip key={tag.label} icon={tag.icon} label={tag.label} />
                  ))}
                </Stack>

                <Box pt={5.5}>
                  <Subtitle>Vehicle details</Subtitle>
                </Box>

                <Box pt={3} pb={3}>
                  <Divider />
                </Box>

                <TextBox>
                  <InfoText>Form</InfoText>
                  <InfoText>{camperInfo?.form}</InfoText>
                </TextBox>

                <TextBox>
                  <InfoText>Length</InfoText>
                  <InfoText>{camperInfo?.length}</InfoText>
                </TextBox>

                <TextBox>
                  <InfoText>Width</InfoText>
                  <InfoText>{camperInfo?.width}</InfoText>
                </TextBox>

                <TextBox>
                  <InfoText>Height</InfoText>
                  <InfoText>{camperInfo?.height}</InfoText>
                </TextBox>

                <TextBox>
                  <InfoText>Tank</InfoText>
                  <InfoText>{camperInfo?.tank}</InfoText>
                </TextBox>

                <TextBox>
                  <InfoText>Consumption</InfoText>
                  <InfoText>{camperInfo?.consumption}</InfoText>
                </TextBox>
              </>
            )}

            {currentTab === TABS.Reviews && (
              <Stack direction="column" gap={3}>
                {camperInfo?.reviews?.map((review) => (
                  <ReviewItem key={review?.id} review={review} />
                ))}
              </Stack>
            )}
          </TabInfoBox>

          <BookForm />
        </BottomBlock>
      </ScrollBox>

      <CloseButton onClick={onClose}>
        <SvgIcon>
          <CloseSvg />
        </SvgIcon>
      </CloseButton>
    </Wrapper>
  );
};
