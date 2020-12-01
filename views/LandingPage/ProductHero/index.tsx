import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LinkUI from '@material-ui/core/Link';

import ProductHeroLayout from './ProductHeroLayout';

// const backgroundImage =
//   'https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400&q=80';

const styles = (theme) => ({
  background: {
    backgroundImage: `url('https://findmyroommates-images.s3.eu-central-1.amazonaws.com/bc.jpg')`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function ProductHero(props) {
  const { classes } = props;

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: 'none' }} src='https://findmyroommates-images.s3.eu-central-1.amazonaws.com/bc.jpg' alt='increase priority' />
      <Typography color='inherit' align='center' variant='h2'>
        Найди соседей по комнате за 5 минут
      </Typography>
      <Typography color='inherit' align='center' variant='h5' className={classes.h5}>
        Важно найти тех с кем комфортно
      </Typography>
      <LinkUI variant='body2'>
        <Button
          color='secondary'
          variant='contained'
          size='large'
          className={classes.button}
          component='a'
          href='/sign-up'
        >
          Зарегистрироваться
        </Button>
      </LinkUI>
      <Typography variant='body2' color='secondary' className={classes.more}>
        <LinkUI variant='body2' style={{ color: '#ffffff', cursor: 'pointer' }} href='/login'>
          У меня уже есть аккаунт
        </LinkUI>
      </Typography>
    </ProductHeroLayout>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
