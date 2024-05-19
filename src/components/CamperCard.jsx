import { Box, Stack, Typography, Checkbox, SvgIcon } from '@mui/material';
import styled from '@emotion/styled';
import { useState } from 'react';

import { ReactComponent as StarSvg } from '../assets/svg/star.svg';
import { ReactComponent as HeartSvg } from '../assets/svg/heart.svg';
import { ReactComponent as HeartRedSvg } from '../assets/svg/heart-red.svg';
import { ReactComponent as MapPinSvg } from '../assets/svg/map-pin.svg';
import { useCamperTags } from '../hooks/useCamperTags';

import { PrimaryButton } from './PrimaryButton';
import { Chip } from './Chip';

const Wrapper = styled(Box)`
  display: flex;
  gap: 24px;
  padding: 24px;
  border: 1px solid #10182833;
  border-radius: 20px;
  max-width: 888px;
`;

const ImageBox = styled(Box)`
  width: 290px;
  height: 310px;
  border-radius: 10px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const InfoBlock = styled(Box)`
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 526px;
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
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const CamperCard = ({ camperInfo, onClickShowMore }) => {
  // TODO - move his logic to API or local storage
  const [checked, setChecked] = useState(false);

  const tags = useCamperTags(camperInfo);

  return (
    <Wrapper>
      <ImageBox>
        <Image src={camperInfo?.gallery?.[0]} alt={camperInfo?.name} />
      </ImageBox>

      <InfoBlock>
        <Box maxWidth="100%">
          <Stack direction="row" justifyContent="space-between" gap={1}>
            <Title>{camperInfo?.name}</Title>

            <Stack direction="row" alignItems="center" gap={1}>
              <BoldText>€{camperInfo?.price}</BoldText>

              <Checkbox
                value={checked}
                onChange={(e) => setChecked(e.target.checked)}
                icon={
                  <SvgIcon>
                    <HeartSvg />
                  </SvgIcon>
                }
                checkedIcon={
                  <SvgIcon>
                    <HeartRedSvg />
                  </SvgIcon>
                }
              />
            </Stack>
          </Stack>

          <Stack direction="row" alignItems="center" gap={2} pb={3}>
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

          <Box pb={3} maxWidth="100%" overflow="hidden">
            <Description>{camperInfo?.description}</Description>
          </Box>

          <Stack direction="row" flexWrap="wrap" gap={1}>
            {(tags ?? [])?.map((tag) => (
              <Chip key={tag.label} icon={tag.icon} label={tag.label} />
            ))}
          </Stack>
        </Box>

        <Box>
          <PrimaryButton onClick={onClickShowMore}>Show more</PrimaryButton>
        </Box>
      </InfoBlock>
    </Wrapper>
  );
};
