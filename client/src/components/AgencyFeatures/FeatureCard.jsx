import React from 'react';
import styles from './AgencyFeatures.module.sass';

const FeatureCard = ({ icon, title, text }) => {
  return (
    <div className={styles.featureCard}>
      <div className={styles.iconBox}>
        <i className={icon}></i>
      </div>
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureText}>{text}</p>
    </div>
  );
};

export default FeatureCard;