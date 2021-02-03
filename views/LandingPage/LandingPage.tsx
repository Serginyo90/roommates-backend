import React from 'react';

import ProductHero from './ProductHero';
import ProductValues from './ProductValues';
import ProductHowItIsWorks from './ProductHowItIsWorks';
import ProductWhyWe from './ProductWhyWe';
import ProductCTA from './ProductCTA';
import ProductSmokingHero from './ProductSmokingHero';
import AppFooter from './AppFooter';
import SelectForLanguage from '../common/SelectForLanguage';

const LandingPage = ({ link }) => (
  <div>
    <SelectForLanguage />
    <ProductHero/>
    <ProductValues/>
    <ProductWhyWe />
    <ProductHowItIsWorks/>
    <ProductCTA link={link} />
    {false && <ProductSmokingHero/>}
    <AppFooter/>
  </div>
);

export default LandingPage;
