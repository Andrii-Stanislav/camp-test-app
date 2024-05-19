import { Chip as MuiChip, Skeleton } from '@mui/material';
import styled from '@emotion/styled';

export const Chip = styled(MuiChip)`
  height: 44px;
  border-radius: 22px;
  padding-left: 18px;
  padding-right: 18px;

  .MuiChip-icon {
    margin-left: 0;
  }

  .MuiChip-label {
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    padding: 0 0 0 8px;
  }
`;

export const ChipSkeleton = styled((props) => (
  <Skeleton {...props} variant="rectangular" />
))`
  width: 115px;
  height: 44px;
  border-radius: 22px;
`;
