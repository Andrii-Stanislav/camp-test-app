import { api } from './ApiService';

export const getCampers = ({
  limit,
  location,
  equipmentItems,
  vehicleType,
}) => {
  const locationQuery = location?.length > 0 ? `&location=${location}` : '';
  const formQuery = vehicleType ? `&form=${vehicleType}` : '';
  const equipmentItemsQuery = equipmentItems.map((q) => `&${q}`).join('');

  return api.get(
    `/campers?page=1&limit=${limit}${locationQuery}${formQuery}${equipmentItemsQuery}`,
  );
};
