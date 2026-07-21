import React from 'react';
import styles from './DomainCard.module.sass';

const DomainCard = ({ domain }) => {
  return (
   
    <article className={styles.card}>
      <div className={styles.logoContainer}>
        <img src={domain.logoUrl} alt={`Logo for ${domain.domainName}`} />
      </div>
      <div className={styles.infoContainer}>
       
        <h3 className={styles.domainName}>{domain.domainName}</h3>
        <p className={styles.price}>{domain.price}</p>
      </div>
    </article>
  );
};

export default DomainCard;