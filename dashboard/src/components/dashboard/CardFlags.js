import React from 'react'
import {
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';



export const CardFlags = (props) => (
  <Card
    {...props}
  >
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item lg={12}>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="h6"
          >
            Bandeiras mais utilizadas
          </Typography>
        </Grid>
        <Grid item lg={6}>
        <Typography
            color="textPrimary"
            variant="h5"
          >
            Visa
          </Typography>
        </Grid>
				<Grid item lg={6}>
        <Typography
            color="textPrimary"
            variant="h5"
          >
            60%
          </Typography>
        </Grid>
				<Grid item lg={6}>
        <Typography
            color="textPrimary"
            variant="h5"
          >
            MasterCard
          </Typography>
        </Grid>
				<Grid item lg={6}>
        <Typography
            color="textPrimary"
            variant="h5"
          >
            30%
          </Typography>
        </Grid>
				<Grid item lg={6}>
        <Typography
            color="textPrimary"
            variant="h5"
          >
            Outros
          </Typography>
        </Grid>
				<Grid item lg={6}>
        <Typography
            color="textPrimary"
            variant="h5"
          >
            10%
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);


