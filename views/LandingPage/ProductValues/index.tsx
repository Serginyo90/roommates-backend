import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: '#fff5f8',
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
});

function ProductValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src='https://findmyroommates-images.s3.eu-central-1.amazonaws.com/productCurvyLines.png'
          className={classes.curvyLines}
          alt='curvy lines'
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src='https://findmyroommates-images.s3.eu-central-1.amazonaws.com/productValues1.svg'
                alt='suitcase'
              />
              <Typography variant='h6' className={classes.title}>
                КОМФОРТНО ЖИТЬ ВМЕСТЕ
              </Typography>
              <Typography variant='h5'>
                Мы все такие разные, и найти с кем комфортно жить достаточно сложно.
                Наш сервис приложет максимум усилий, чтобы вы нашли человека,
                с которым будет весело и комфортно.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src='https://findmyroommates-images.s3.eu-central-1.amazonaws.com/productValues3.svg'
                alt='clock'
              />
              <Typography variant='h6' className={classes.title}>
                АБСОЛЮТНО БЕСПЛАТНО
              </Typography>
              <Typography variant='h5'>
                Вы не должны ни за что платить и у нас нет никаких скрытых платежей.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src='https://findmyroommates-images.s3.eu-central-1.amazonaws.com/productValues2.svg'
                alt='graph'
              />
              <Typography variant='h6' className={classes.title}>
                НОВЫЙ ОПЫТ БЕСЦЕНЕН
              </Typography>
              <Typography variant='h5'>
                Если вы ни разу не снимали ни с кем жилье, то наш сервис это
                отличный шанс попробовать найти кого-то по интересам и увлечениям.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

// @ts-ignore
export default withStyles(styles)(ProductValues);
