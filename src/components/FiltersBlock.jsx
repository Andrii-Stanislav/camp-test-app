import { Box, Stack, Typography, Divider, SvgIcon } from '@mui/material';
import styled from '@emotion/styled';

const Title = styled(Typography)`
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

const FiltersList = styled(Box)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px 8px;
`;

const FilterItem = styled(({ active, ...props }) => <Box {...props} />)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-width: 100px;
  height: 95px;
  padding: 12px;
  border: 1px solid ${({ active }) => (active ? '#E44848' : '#10182833')};
  border-radius: 10px;
  cursor: pointer;
  user-select: none;
`;

const FilterText = styled(Typography)`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  white-space: break-spaces;
  text-align: center;
`;

export const FiltersBlock = ({ title, items, selectedItems, onItemClick }) => {
  return (
    <Stack direction="column" gap={3}>
      <Title>{title}</Title>
      <Divider />

      <FiltersList>
        {items.map((item) => (
          <FilterItem
            key={item.value}
            active={selectedItems?.includes(item.value)}
            onClick={onItemClick.bind(null, item.value)}
          >
            <SvgIcon style={{ width: 32, height: 32 }}>{item.icon}</SvgIcon>
            <FilterText>{item.text}</FilterText>
          </FilterItem>
        ))}
      </FiltersList>
    </Stack>
  );
};
