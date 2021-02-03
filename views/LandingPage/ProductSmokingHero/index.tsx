import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from 'react-i18next';

const styles = (theme: any) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(9),
    marginBottom: theme.spacing(9),
  },
  button: {
    border: '4px solid currentColor',
    borderRadius: 0,
    height: 'auto',
    padding: theme.spacing(2, 5),
  },
  link: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  buoy: {
    width: 60,
  },
});

function ProductSmokingHero(props) {
  const { classes } = props;
  const { t } = useTranslation();
  return (
    <Container className={classes.root} component='section'>
      <Button className={classes.button} component='a' href='mailto:support@findmyroommates.com' >
        <Typography variant='h4' component='span'>
          {t('phrases:Do you have questions or suggestions?')}
        </Typography>
      </Button>
      <Typography variant='subtitle1' className={classes.link}>
        {t('phrases:Do you have questions or suggestions?')}
      </Typography>
      <img src='https://findmyroommates-images.s3.eu-central-1.amazonaws.com/producBuoy.svg' className={classes.buoy} alt='buoy' />
    </Container>
  );
}

ProductSmokingHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

// @ts-ignore
export default withStyles(styles)(ProductSmokingHero);
