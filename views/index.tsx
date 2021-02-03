import React from 'react';
import LandingPage from './LandingPage';

import './styles.scss';
import { i18Init } from './_document';

i18Init();

const Index = ({ link }) => {
  return <LandingPage link={link} />;
};

export default Index;
