import React from 'react'
import {
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';



export const RefusalRate = (props) => (
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
            Taxa de recusa
          </Typography>
        </Grid>
        <Grid item lg={6}>
        <Typography
            color="textPrimary"
            variant="h5"
          >
            Banco emissor
          </Typography>
        </Grid>
				<Grid item lg={6}>
        <Typography
            color="textPrimary"
            variant="h5"
          >
            94%
          </Typography>
        </Grid>
				<Grid item lg={6}>
        <Typography
            color="textPrimary"
            variant="h5"
          >
            Antifraude
          </Typography>
        </Grid>
				<Grid item lg={6}>
        <Typography
            color="textPrimary"
            variant="h5"
          >
            5%
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
            1%
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);


