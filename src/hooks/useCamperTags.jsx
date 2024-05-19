import { useMemo } from 'react';
import { SvgIcon } from '@mui/material';

import { ReactComponent as UsersSvg } from '../assets/svg/users.svg';
import { ReactComponent as TransmissionSvg } from '../assets/svg/transmission.svg';
import { ReactComponent as PetrolSvg } from '../assets/svg/petrol.svg';
import { ReactComponent as KitchenSvg } from '../assets/svg/kitchen.svg';
import { ReactComponent as BedSvg } from '../assets/svg/bed.svg';
import { ReactComponent as WindSvg } from '../assets/svg/wind.svg';

import { capitalize } from '../utils';

const iconStyle = { width: 20, height: 20 };

export const useCamperTags = (camperInfo, params) => {
  // TODO - use showFullInfo for modal chips
  // const { showFullInfo = false } = params ?? {};

  return useMemo(
    () =>
      [
        {
          icon: (
            <SvgIcon style={iconStyle}>
              <UsersSvg />
            </SvgIcon>
          ),
          label: `${camperInfo?.adults} adults`,
        },
        {
          icon: (
            <SvgIcon style={iconStyle}>
              <TransmissionSvg />
            </SvgIcon>
          ),
          label: `${capitalize(camperInfo?.transmission)}`,
        },
        {
          icon: (
            <SvgIcon style={iconStyle}>
              <PetrolSvg />
            </SvgIcon>
          ),
          label: `${capitalize(camperInfo?.engine)}`,
        },
        camperInfo?.details?.kitchen > 0 && {
          icon: (
            <SvgIcon style={iconStyle}>
              <KitchenSvg />
            </SvgIcon>
          ),
          label: 'Kitchen',
        },
        {
          icon: (
            <SvgIcon style={iconStyle}>
              <BedSvg />
            </SvgIcon>
          ),
          label: `${camperInfo?.details?.beds} beds`,
        },
        camperInfo?.details?.airConditioner > 0 && {
          icon: (
            <SvgIcon style={iconStyle}>
              <WindSvg />
            </SvgIcon>
          ),
          label: 'AC',
        },
      ].filter(Boolean),
    [
      camperInfo?.adults,
      camperInfo?.transmission,
      camperInfo?.engine,
      camperInfo?.details?.kitchen,
      camperInfo?.details?.beds,
      camperInfo?.details?.airConditioner,
    ],
  );
};
