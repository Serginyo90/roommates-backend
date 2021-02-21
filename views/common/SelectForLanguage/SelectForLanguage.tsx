import i18next from 'i18next';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { withStyles } from '@material-ui/core/styles';
import { ROOMMATES_LANGUAGE, MyStorage } from '../../_document';

import Select from '../../universal/Select';

import PropTypes from 'prop-types';

const styles = () => ({
  languageSelect: {
    color: '#ffffff',
    borderBottom: '1px solid white',
    ['& svg']: {
      color: '#ffffff',
    },
  },
  wrapper: {
    position: 'absolute',
    top: '8px',
    right: '16px',
    zIndex: 999,
  },
});

const SelectForLanguage = ({ classes }) => {
  const { t } = useTranslation();
  const [language, setLanguage] = useState(MyStorage.getItem(ROOMMATES_LANGUAGE));
  return (
    <div className={classes.wrapper}>
      <Select
        className={classes.languageSelect}
        input={{
          name: 'languages',
          value: language,
          onChange: (e) => {
            MyStorage.setItem(ROOMMATES_LANGUAGE, e.target.value);
            setLanguage(e.target.value);
            i18next.changeLanguage(e.target.value).then((tf) => {
              console.log('__language_changed__', tf('common:Begin'));
            });
          },
        }}
        options={[
          { value: 'en', label: t('languages:en') },
          { value: 'ru', label: t('languages:ru') },
        ]}
        getLabel={option => t(`languages:${(option && option.value)}`)}
      />
    </div>
  );
};

SelectForLanguage.propTypes = {
  white: PropTypes.bool,
};

// @ts-ignore
export default withStyles(styles)(SelectForLanguage);
