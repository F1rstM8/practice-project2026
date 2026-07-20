import React from 'react';
import styles from './AgencyFeatures.module.sass';

const featuresData = [
  {
    icon: 'fas fa-handshake',
    title: 'Consultant Led',
    text: 'Work one-on-one with a Atom branding consultant.',
  },
  {
    icon: 'fas fa-users',
    title: 'Crowd Powered',
    text: 'Work with our top rated Creatives and receive a huge breadth of ideas.',
  },
  {
    icon: 'fas fa-chart-pie',
    title: 'Trademark Reports',
    text: 'Comprehensive trademark screening on your shortlisted names.',
  },
  {
    icon: 'fas fa-bullhorn',
    title: 'Audience Testing',
    text: 'Get rapid feedback from real people on your shortlist of business names.',
  },
];

const AgencyFeatures = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Like A Naming Agency, But Better</h2>
      <p className={styles.subheading}>
        With Atom's managed contests, leverage our team's naming expertise and our pool of 300K+ naming experts. Our hybrid-solution partners you with a trained Atom branding consultant who will guide your crowdsourcing process step-by-step to get the best results possible.
      </p>

      <div className={styles.featuresWrapper}>
        {featuresData.map((feature, index) => (
          <div key={index} className={styles.featureCard}>
            <div className={styles.iconBox}>
              <i className={feature.icon}></i>
            </div>
            <h3 className={styles.featureTitle}>{feature.title}</h3>
            <p className={styles.featureText}>{feature.text}</p>
          </div>
        ))}
      </div>

      <button className={styles.learnMoreBtn}>Learn More</button>
    </section>
  );
};

export default AgencyFeatures;