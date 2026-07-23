import React from 'react';
import styles from './AgencyFeatures.module.sass';
import featuresData from './featuresData.json';
import FeatureCard from './FeatureCard';

const AgencyFeatures = () => {
  return (
    <section className={styles.container}>
    
      <div className={styles.header}>
        <h2>{featuresData.heading}</h2>
        <p>{featuresData.paragraph}</p>
      </div>
      <div className={styles.featuresWrapper}>
        {featuresData.features.map((feature) => (
          <FeatureCard
            key={feature.id}
            icon={feature.icon}
            title={feature.title}
            text={feature.text}
          />
        ))}
      </div>
    </section>
  );
};

export default AgencyFeatures;
