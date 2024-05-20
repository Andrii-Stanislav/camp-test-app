import { ReactComponent as WindSvg } from '../../assets/svg/wind.svg';
import { ReactComponent as TransmissionSvg } from '../../assets/svg/transmission.svg';
import { ReactComponent as KitchenSvg } from '../../assets/svg/kitchen.svg';
import { ReactComponent as TvSvg } from '../../assets/svg/tv.svg';
import { ReactComponent as ShowerSvg } from '../../assets/svg/shower.svg';
import { ReactComponent as Camper1 } from '../../assets/svg/camper-1.svg';
import { ReactComponent as Camper2 } from '../../assets/svg/camper-2.svg';
import { ReactComponent as Camper3 } from '../../assets/svg/camper-3.svg';

export const FILTER_ITEMS = [
  {
    value: 'details[airConditioner]=1',
    text: 'AC',
    icon: <WindSvg />,
  },
  {
    value: 'transmission=automatic',
    text: 'Automatic',
    icon: <TransmissionSvg />,
  },
  {
    value: 'details[kitchen]=1',
    text: 'Kitchen',
    icon: <KitchenSvg />,
  },
  {
    value: 'details[TV]=1',
    text: 'TV',
    icon: <TvSvg />,
  },
  {
    value: 'details[shower]=1',
    text: 'Shower/WC',
    icon: <ShowerSvg />,
  },
];

export const VEHICLE_TYPE_ITEMS = [
  {
    value: 'panelTruck',
    text: 'Van',
    icon: <Camper1 />,
  },
  {
    value: 'fullyIntegrated',
    text: 'Fully Integrated',
    icon: <Camper2 />,
  },
  {
    value: 'alcove',
    text: 'Alcove',
    icon: <Camper3 />,
  },
];
