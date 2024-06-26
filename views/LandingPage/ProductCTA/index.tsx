import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, ErrorMessage } from 'formik';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import TextField from '@material-ui/core/TextField';

const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(10),
    marginBottom: 0,
    display: 'flex',
  },
  cardWrapper: {
    zIndex: 1,
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: theme.palette.warning.main,
    padding: theme.spacing(8, 3),
  },
  cardContent: {
    maxWidth: 400,
  },
  textField: {
    width: '100%',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  button: {
    width: '100%',
  },
  imagesWrapper: {
    position: 'relative',
  },
  imageDots: {
    position: 'absolute',
    top: -67,
    left: -67,
    right: 0,
    bottom: 0,
    width: '100%',
  },
  image: {
    position: 'absolute',
    top: -28,
    left: -28,
    right: 0,
    bottom: 0,
    width: '100%',
    maxWidth: 600,
  },
  errors: {
    marginBottom: '16px',
    marginTop: '-8px',
  },
});

function ProductCTA(props) {
  const { classes } = props;
  const [open, setOpen] = React.useState(false);
  const [isSubmitting, setSubmitting] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const { t } = useTranslation();
  const messageRequired = t('errors:Required field');
  const messageInvalidFormat = t('errors:Incorrect email format');
  return (
    <Container className={classes.root} component='section'>
      <Grid container>
        <Grid item xs={12} md={6} className={classes.cardWrapper}>
          <div className={classes.card}>
            <Formik
              initialValues={{ email: '' }}
              validate={values => {
                const errors = {} as any;
                if (!values.email) {
                  errors.email = messageRequired;
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = messageInvalidFormat;
                }
                return errors;
              }}
              onSubmit={(values, { resetForm }) => {
                setSubmitting(true);
                axios.post(props.link, {
                  email: values.email,
                }, {
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                  },
                })
                  .then((res) => {
                    setSubmitting(false);
                    return res.data;
                  })
                  .then((data) => {
                    if (data && !data.errors) {
                      setOpen(true);
                      resetForm({ values: { email: '' }});
                    }
                  })
                  .catch((error) => {
                    setSubmitting(false);
                    console.error('__error__', error);
                    return false;
                  });
              }}
            >
              {({
                  values,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isValid,
                }) => (
                <Form onSubmit={handleSubmit} className={classes.cardContent}>
                  <Typography variant='h2' component='h2' gutterBottom>
                    {t('common:Subscribe')}
                  </Typography>
                  <Typography variant='h5'>
                    {t('phrases:We don\'t send spam')}
                  </Typography>
                  <TextField
                    className={classes.textField}
                    placeholder={t('common:Email')}
                    type='email'
                    name='email'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  <ErrorMessage name='email' component='div' className={classes.errors} />
                  <Button
                    type='submit'
                    color='primary'
                    variant='contained'
                    className={classes.button}
                    disabled={!isValid || isSubmitting}
                  >
                    {t('phrases:Keep me informed')}
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className={classes.imagesWrapper}>
          <Hidden smDown>
            <div className={classes.imageDots} />
            <img
              src='https://images.unsplash.com/photo-1527853787696-f7be74f2e39a?auto=format&fit=crop&w=750&q=80'
              alt='call to action'
              className={classes.image}
            />
          </Hidden>
        </Grid>
      </Grid>
      <Snackbar
        open={open}
        onClose={handleClose}
        message={t('phrases:We will send only useful emails to you')}
      />
    </Container>
  );
}

ProductCTA.propTypes = {
  classes: PropTypes.object.isRequired,
};

// @ts-ignore
export default withStyles(styles)(ProductCTA);
