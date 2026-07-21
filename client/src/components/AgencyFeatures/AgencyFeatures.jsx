import React from 'react';
import styles from './AgencyFeatures.module.sass';
import featuresData from './featuresData.json';
import FeatureCard from './FeatureCard';

const AgencyFeatures = () => {
  return (
   
    <section className={styles.container}>
      
      <div className={styles.featuresWrapper}>
        {featuresData.map((feature) => (
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