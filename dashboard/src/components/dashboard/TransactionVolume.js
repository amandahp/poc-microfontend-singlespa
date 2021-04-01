import React from 'react'
import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import PieChartIcon from '@material-ui/icons/PieChart';


export const TransactionVolume = (props) => (
  <Card
    {...props}
  >
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="h6"
          >
            Volume transacionado
          </Typography>
          <Typography
            color="textPrimary"
            variant="h3"
          >
            R$ 10.500,00
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: blue[600],
              height: 56,
              width: 56
            }}
          >
            <PieChartIcon />
          </Avatar>
        </Grid>
      </Grid>

    </CardContent>
  </Card>
);


