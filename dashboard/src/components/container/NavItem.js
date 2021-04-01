import React from 'react'
import { Button, ListItem } from '@material-ui/core';

const NavItem = ({
  href,
  icon: Icon,
  title,
  ...rest
}) => {

  const active = href
  return (
    <ListItem
      disableGutters
      sx={{
        display: 'flex',
        py: 0
      }}
      {...rest}
    >
      <Button
        sx={{
          color: 'text.secondary',
          fontWeight: 'medium',
          justifyContent: 'flex-start',
          letterSpacing: 0,
          py: 1.25,
          textTransform: 'none',
          width: '100%',
          ...(active && {
            color: 'rgb(69, 69, 80)'
          }),
          '& svg': {
            mr: 1
          }
        }}
        to={href}
      >
        {Icon && (
          <Icon size="20" />
        )}
        <span>
          {title}
        </span>
      </Button>
    </ListItem>
  );
};


export default NavItem;
