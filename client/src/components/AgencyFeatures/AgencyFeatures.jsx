import React from 'react';
import styles from './AgencyFeatures.module.sass';
import featuresData from './featuresData.json';
import FeatureCard from './FeatureCard';

const AgencyFeatures = () => {
  return (
    <section className={styles.container}>
      {/* Твой заголовок и описание секции остаются здесь */}
      
      <div className={styles.featuresWrapper}>
        {featuresData.map((feature, index) => (
          <FeatureCard 
            key={index} 
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