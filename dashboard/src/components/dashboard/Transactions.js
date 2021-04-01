import React from 'react'
import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';
import SwapVertIcon from '@material-ui/icons/SwapVert';
import { green } from '@material-ui/core/colors';

export const Transactions = (props) => (
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
            Total de transações
          </Typography>
          <Typography
            color="textPrimary"
            variant="h3"
          >
            1.700
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: green[600],
              height: 56,
              width: 56
            }}
          >
            <SwapVertIcon />
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

