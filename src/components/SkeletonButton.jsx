import { Skeleton } from '@mui/material';

export const SkeletonButton = () => (
  <Skeleton
    variant="rectangular"
    width={145}
    height={56}
    style={{ borderRadius: 28 }}
  />
);
