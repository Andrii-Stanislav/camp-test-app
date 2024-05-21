import styled from '@emotion/styled';
import { Avatar, Rating, Stack, Typography } from '@mui/material';

const StyledAvatar = styled(Avatar)`
  width: 60px;
  height: 60px;
  font-size: 24px;
  font-weight: 600;
  line-height: 30px;
  color: #e44848;
  background-color: #f2f4f7;
`;

const Name = styled(Typography)`
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
`;

const Comment = styled(Typography)`
  font-size: 16px;
  line-height: 24px;
`;

export const ReviewItem = ({ review }) => {
  return (
    <div>
      <Stack direction="row" alignItems="center" gap={2} pb={2}>
        <StyledAvatar>{review?.reviewer_name?.[0]}</StyledAvatar>
        <div>
          <Name>{review?.reviewer_name}</Name>
          <Rating
            name="read-only"
            value={review?.reviewer_rating}
            precision={0.1}
            readOnly
          />
        </div>
      </Stack>

      <Comment>{review?.comment}</Comment>
    </div>
  );
};
