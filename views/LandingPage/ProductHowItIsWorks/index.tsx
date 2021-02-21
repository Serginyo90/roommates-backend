import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  root: {
    display: 'flex',
    backgroundColor: '#fff5f8',
    overflow: 'hidden',
  },
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(15),
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  title: {
    marginBottom: theme.spacing(14),
  },
  number: {
    fontSize: 24,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.secondary.main,
    fontWeight: theme.typography.fontWeightMedium,
  },
  image: {
    height: 55,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
    opacity: 0.7,
  },
  button: {
    marginTop: theme.spacing(8),
  },
});

function ProductHowItWorks(props) {
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
        <Typography variant='h4' className={classes.title} component='h2'>
          {t('phrases:How does it work?')}
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>1. {t('common:Registration')}</div>
                <img
                  src='https://findmyroommates-images.s3.eu-central-1.amazonaws.com/productHowItWorks1.svg'
                  alt='suitcase'
                  className={classes.image}
                />
                <Typography variant='h5' align='center'>
                  {t('phrases:Fill in your personal information, specify the city and hobbies')}
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>2. {t('common:Waiting')}</div>
                <img
                  src='https://findmyroommates-images.s3.eu-central-1.amazonaws.com/productHowItWorks2.svg'
                  alt='graph'
                  className={classes.image}
                />
                <Typography variant='h5' align='center'>
                  {t('phrases:Future friends will look for you according to the criteria you specified')}
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>3. {t('common:Search')}</div>
                <img
                  src='https://findmyroommates-images.s3.eu-central-1.amazonaws.com/productHowItWorks3.svg'
                  alt='clock'
                  className={classes.image}
                />
                <Typography variant='h5' align='center'>
                  {t('phrases:You can take the initiative and find roommates of interest on your own')}
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
        <Button
          color='secondary'
          size='large'
          variant='contained'
          className={classes.button}
          href='/sign-up'
        >
          {t('common:Begin')}
        </Button>
      </Container>
    </section>
  );
}

ProductHowItWorks.propTypes = {
  classes: PropTypes.object.isRequired,
};

// @ts-ignore
export default withStyles(styles)(ProductHowItWorks);
