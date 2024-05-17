import { useState, useEffect } from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

import { ROUTES } from '../constants';

const ROUTES_ARR = Object.values(ROUTES);

export const MainNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [currentPath, setCurrentPath] = useState(
    ROUTES_ARR.includes(location.pathname) ? location.pathname : ROUTES.HOME
  );

  const handleChange = (e, newPath) => {
    navigate(newPath);
  };

  useEffect(() => {
    if (ROUTES_ARR.includes(location.pathname)) {
      setCurrentPath(location.pathname);
    } else {
      setCurrentPath(ROUTES.HOME);
    }
  }, [location.pathname]);

  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs
        value={currentPath}
        onChange={handleChange}
        aria-label="basic tabs example"
        centered
      >
        <Tab label="Home" value={ROUTES.HOME} />
        <Tab label="Catalog" value={ROUTES.CATALOG} />
        <Tab label="Favorites" value={ROUTES.FAVORITES} />
      </Tabs>
    </Box>
  );
};
