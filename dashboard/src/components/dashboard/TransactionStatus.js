import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  colors,
  useTheme
} from '@material-ui/core';


export const TransactionStatus = (props) => {
  const theme = useTheme();

  const data = {
    datasets: [
      {
        data: [67, 14, 11, 5.5, 0.5],
        backgroundColor: [
          colors.blue[500],
          colors.yellow[600],
          colors.purple[600],
          colors.red[600],
          colors.grey[900]
        ],
        borderWidth: 8,
        borderColor: colors.common.white,
        hoverBorderColor: colors.common.white
      }
    ],
    labels: ['Aprovados', 'Aguardando pgto', 'Extornados', 'Recusados', 'Outros']
  };

  const options = {
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: false
    },
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
      backgroundColor: theme.palette.background.paper,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: 'index',
      titleFontColor: theme.palette.text.primary
    }
  };

  const devices = [
    {
      title: 'Aprovados',
      value: 67,
      color: colors.blue[500]
    },
    {
      title: 'Ag. pgto',
      value: 14,
      color: colors.yellow[600]
    },
    {
      title: 'Extornados',
      value: 11,
      color: colors.purple[600]
    },
    {
      title: 'Recusados',
      value: 5.5,
      color: colors.red[500]
    },
    {
      title: 'Outros',
      value: 0.5,
      color: colors.brown[900]
    }
  ];

  return (
    <Card {...props}>
      <CardHeader title="Transações por status" />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 300,
            position: 'relative'
          }}
        >
          <Doughnut
            data={data}
            options={options}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 2
          }}
        >
          {devices.map(({
            color,
            title,
            value
          }) => (
            <Box
              key={title}
              sx={{
                p: 0.4,
                textAlign: 'center'
              }}
            >
              <Typography
                color="textPrimary"
                variant="body1"
              >
                {title}
              </Typography>
              <Typography
                style={{ color }}
                variant="h6"
              >
                {value}
                %
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};


