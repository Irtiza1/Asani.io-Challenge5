import PropTypes from 'prop-types';
import { NavLink as RouterLink } from 'react-router-dom';
// @mui
import { Box, List, ListItemText } from '@mui/material';
//
import { StyledNavItem, StyledNavItemIcon } from './styles';
// Import the logo
import logoImage from '../../assets/l.svg';  // Adjust the path based on your file structure

NavSection.propTypes = {
  data: PropTypes.array,
};

export default function NavSection({ data = [], ...other }) {
  return (
    <Box {...other}>
      <List disablePadding sx={{ p: 1 }}>
        {data.map((item) => (
          <NavItem key={item.title} item={item} />
        ))}
      </List>
    </Box>
  );
}

NavItem.propTypes = {
  item: PropTypes.object,
};

function NavItem({ item }) {
  const { title, path, icon, info } = item;

  return (
    <StyledNavItem 
      component={RouterLink}
      to={path}
      sx={{
        '&.active': {
          color: 'text.primary',
          bgcolor: 'action.selected',
          fontWeight: 'fontWeightBold',
        },
      }}
    >
      {icon === 'logo' ? (
        <Box
          component="img"
          src={logoImage}
          alt="Logo"
          sx={{ width: 24, height: 24 }}
        />
      ) : (
        icon && (
          <StyledNavItemIcon>
            {icon}
          </StyledNavItemIcon>
        )
      )}

      <ListItemText disableTypography primary={title} />

      {info && <span>{info}</span>}
    </StyledNavItem>
  );
}