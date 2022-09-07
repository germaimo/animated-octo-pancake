import React from 'react';
import CardFeature from '../CardFeatures/cardFeatures';
import ItemBenefits from '../ItemBenefits/itemBenefits';

const Features = () => {
  return (
    <div>
      <CardFeature />
      <CardFeature />
      <CardFeature />

      <h2>
        Conocé los beneficios de <span>nuestras plantas</span>
      </h2>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et
        quam et sapien rutrum mattis at sit amet purus. Fusce sed odio magna.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae; Donec ut arcu neque.
      </p>

      <ItemBenefits />
      <ItemBenefits />
      <ItemBenefits />
      <ItemBenefits />

      <button>Ver bonsais</button>
    </div>
  );
};

export default Features;
