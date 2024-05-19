import { ReactComponent as WindSvg } from '../../assets/svg/wind.svg';
import { ReactComponent as AutomaticSvg } from '../../assets/svg/automatic.svg';
import { ReactComponent as KitchenSvg } from '../../assets/svg/kitchen.svg';
import { ReactComponent as TvSvg } from '../../assets/svg/tv.svg';
import { ReactComponent as ShowerSvg } from '../../assets/svg/shower.svg';
import { ReactComponent as Camper1 } from '../../assets/svg/camper-1.svg';
import { ReactComponent as Camper2 } from '../../assets/svg/camper-2.svg';
import { ReactComponent as Camper3 } from '../../assets/svg/camper-3.svg';

export const FILTER_ITEMS = [
  {
    value: 'ac',
    text: 'AC',
    icon: <WindSvg />,
  },
  {
    value: 'automatic',
    text: 'Automatic',
    icon: <AutomaticSvg />,
  },
  {
    value: 'kitchen',
    text: 'Kitchen',
    icon: <KitchenSvg />,
  },
  {
    value: 'tv',
    text: 'TV',
    icon: <TvSvg />,
  },
  {
    value: 'shower-wc',
    text: 'Shower/WC',
    icon: <ShowerSvg />,
  },
];

export const VEHICLE_TYPE_ITEMS = [
  {
    value: 'van',
    text: 'Van',
    icon: <Camper1 />,
  },
  {
    value: 'fully-integrated',
    text: 'Fully Integrated',
    icon: <Camper2 />,
  },
  {
    value: 'alcove',
    text: 'Alcove',
    icon: <Camper3 />,
  },
];
