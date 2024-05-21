import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { TextField } from './TextField';
import { PrimaryButton } from './PrimaryButton';
import { DateRangeField } from './DateRangeField';

const validationSchema = yup.object({
  name: yup.string('Enter your name').required('Name is required'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  bookingDate: yup
    .array()
    .of(yup.string('Booking Date is required'))
    .length(2, 'Booking Date is required'),
  comment: yup.string(),
});

const Wrapper = styled(Box)`
  width: 448px;
  padding: 24px;
  border-radius: 10px;
  border: 1px solid #10182833;
`;

const Title = styled(Typography)`
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

const Description = styled(Typography)`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;

export const BookForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      bookingDate: [],
      comment: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      window.location.reload();
    },
  });

  return (
    <Wrapper>
      <form onSubmit={formik.handleSubmit}>
        <Box pb={1}>
          <Title>Book your campervan now</Title>
        </Box>

        <Box pb={3}>
          <Description>
            Stay connected! We are always ready to help you.
          </Description>
        </Box>

        <Box sx={{ paddingBottom: '14px' }}>
          <TextField
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            placeholder="Name"
          />
        </Box>

        <Box sx={{ paddingBottom: '14px' }}>
          <TextField
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            placeholder="Email"
          />
        </Box>

        <Box sx={{ paddingBottom: '14px' }}>
          <DateRangeField
            id="bookingDate"
            name="bookingDate"
            value={formik.values.bookingDate}
            onChange={(value) => {
              formik.handleChange({ target: { name: 'bookingDate', value } });
            }}
            placeholder="Booking date"
            error={
              formik.touched.bookingDate && Boolean(formik.errors.bookingDate)
            }
            helperText={formik.touched.bookingDate && formik.errors.bookingDate}
          />

          {/* <TextField
            
           
            error={
              formik.touched.bookingDate && Boolean(formik.errors.bookingDate)
            }
            helperText={formik.touched.bookingDate && formik.errors.bookingDate}
            placeholder="Booking date"
           
          /> */}
        </Box>

        <Box pb={3}>
          <TextField
            id="comment"
            name="comment"
            value={formik.values.comment}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.comment && Boolean(formik.errors.comment)}
            helperText={formik.touched.comment && formik.errors.comment}
            placeholder="Comment"
            multiline
            rows={3}
          />
        </Box>

        <PrimaryButton type="submit">Send</PrimaryButton>
      </form>
    </Wrapper>
  );
};
