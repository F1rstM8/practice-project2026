import React from 'react';
import styles from './AgencyFeatures.module.sass';

const FeatureCard = ({ icon, title, text }) => {
  return (
    
    <article className={styles.featureCard}>
      <div className={styles.iconBox} aria-hidden="true">
        <i className={icon}></i>
      </div>
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureText}>{text}</p>
    </article>
  );
};

export default FeatureCard;