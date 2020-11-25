import React from 'react';

import ProductHero from './ProductHero';
import ProductValues from './ProductValues';
import ProductHowItIsWorks from './ProductHowItIsWorks';
import ProductWhyWe from './ProductWhyWe';
import ProductCTA from './ProductCTA';
import ProductSmokingHero from './ProductSmokingHero';
import AppFooter from './AppFooter';

const LandingPage = () => (
  <div>
    <ProductHero/>
    <ProductValues/>
    <ProductWhyWe />
    <ProductHowItIsWorks/>
    <ProductCTA/>
    {false && <ProductSmokingHero/>}
    <AppFooter/>
  </div>
);

export default LandingPage;
