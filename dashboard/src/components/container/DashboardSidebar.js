import React from 'react'
import {
  Box,
  Drawer,
  Hidden,
  List,
} from '@material-ui/core';
import {
  BarChart as BarChartIcon,
  Lock as LockIcon,
  Settings as SettingsIcon,
  ShoppingBag as ShoppingBagIcon,
  User as UserIcon,
  Users as UsersIcon
} from 'react-feather';
import NavItem from './NavItem';


const items = [
  {
    icon: BarChartIcon,
    title: 'Resumo'
  },
  {
    icon: UsersIcon,
    title: 'Extrato'
  },
  {
    icon: ShoppingBagIcon,
    title: 'Transações'
  },
  {
    icon: UserIcon,
    title: 'Lista de pagamento'
  },
  {
    icon: SettingsIcon,
    title: 'Recebedores'
  },
  {
    icon: LockIcon,
    title: 'Configurações'
  }
];

const DashboardSidebar = () => {


  const content = (
    <Box
      backgroundColor="#F4F6F8"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '250px'
      }}
      >
      <Box sx={{ p: 2 }}>
        <List>
          {items.map((item) => (
            <NavItem
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
      <Box sx={{ flexGrow: 1 }} />
    </Box>
  );

  return (
    <>
      <Hidden lgDown>
        <Drawer
          anchor="left"
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: 220,
              top: 64,
              height: 'calc(100% - 94px)',
              border:'none'
            }
          }}
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

export default DashboardSidebar;
