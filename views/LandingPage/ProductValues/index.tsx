import React from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
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
                {t('phrases:Leave together with comfort').toUpperCase()}
              </Typography>
              <Typography variant='h5'>
                {t('phrases:We are all so different')}
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
                {t('phrases:Absolutely free').toUpperCase()}
              </Typography>
              <Typography variant='h5'>
                {t('phrases:You don\'t have to pay for anything and we have no hidden fees')}
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
                {t('phrases:New experience priceless').toUpperCase()}
              </Typography>
              <Typography variant='h5'>
                {t('phrases:If you have never rented a house with anyone')}
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
