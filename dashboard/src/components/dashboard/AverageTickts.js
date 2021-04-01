import React from 'react'
import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import ShowChartIcon from '@material-ui/icons/ShowChart';


export const AverageTickts = (props) => (
  <Card {...props}>
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
            Ticket Médio
          </Typography>
          <Typography
            color="textPrimary"
            variant="h3"
          >
            R$ 250,00
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: purple[600],
              height: 56,
              width: 56
            }}
          >
            <ShowChartIcon />
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);


