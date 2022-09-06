import React from 'react';
import ItemBenefits from '../components/ItemBenefits/itemBenefits';

//En este caso hay que mandar la clase de fontawesome para ver si 

const home = () => {
  return (
    <div>
      <ItemBenefits
        icon="faLightbulb"
        title="Estimula tu mente"
        text="Promueve la mejora de tu percepción, paciencia y creatividad"
      />
    </div>
  );
};

export default home;
