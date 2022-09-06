import React from 'react';
import grid from '../../styles/grid.module.css';
import styles from './itemBenefits.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faWind, faLeaf, faSmile } from '@fortawesome/free-regular-svg-icons';

const ItemBenefits = (props) => {
  console.log(props.icon)
  return (
    <div className={`${styles.itemBenefit}`}>
      <div className={`${styles.itemBenefit_icon}`}>
        <FontAwesomeIcon
          icon={props.icon === "faLightbulb" ? faLightbulb : props.icon === "faWind" ? faWind : props.icon === "faLeaf" ? faLeaf : props.icon === "faSmile" ? faSmile : ""}
          style={{ fontSize: 40, color: '#F6FFE0' }}
        />
      </div>
      <div className={`${styles.itemBenefit_text}`}>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default ItemBenefits;
