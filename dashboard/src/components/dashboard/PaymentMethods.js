import React from 'react'
import {
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';


export const PaymentMethods = (props) => (
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
            Forma de pagamento
          </Typography>
        </Grid>
        <Grid item lg={6}>
        <Typography
            color="textPrimary"
            variant="h5"
          >
            Cartão de crédito
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
            Cartão de débito
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
            Boleto
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


