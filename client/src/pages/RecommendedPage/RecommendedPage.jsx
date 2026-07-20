import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './RecommendedPage.module.sass';


const inspiredDomains = [
  { name: 'Egyj.com', price: '$2899', color: '#f8f9fa', text: '#d93025' },
  { name: 'GqiL.com', price: '$2199', color: '#f8f9fa', text: '#1a73e8' },
  { name: 'OIRU.COM', price: '$85821', color: '#f8f9fa', text: '#d93025' },
  { name: 'BLLT.com', price: '$34995', color: '#f8f9fa', text: '#174ea6' },
  { name: 'UYJQ.com', price: '$1978', color: '#311042', text: '#ffffff' },
  { name: '4Q4.com', price: '$96200', color: '#f8f9fa', text: '#3c4043' },
  { name: 'Jvuy.com', price: '$5799', color: '#110d0e', text: '#fbbc04' },
  { name: 'OTKO.com', price: '$9149', color: '#f1f3f4', text: '#202124' },
  { name: 'caqy.com', price: '$2993', color: '#f8f9fa', text: '#000000' },
  { name: 'VBZY.com', price: '$5399', color: '#f8f9fa', text: '#ea4335' },
];


const similarDomains = [
  { name: 'QYFI.COM', price: '$24183', color: '#f8f9fa', text: '#1a73e8' },
  { name: 'Licu.com', price: '$199995', color: '#f8f9fa', text: '#174ea6' },
  { name: 'Oruq.com', price: '$7399', color: '#3c4043', text: '#ffffff' },
  { name: 'aqow.com', price: '$9050', color: '#202124', text: '#ffffff' },
  { name: 'WaWm.com', price: '$12205', color: '#f8f9fa', text: '#d93025' },
];

const RecommendedPage = () => {

  const renderCard = (domain, index) => (
    <div key={index} className={styles.card}>
      <div 
        className={styles.cardLogo} 
        style={{ backgroundColor: domain.color, color: domain.text }}
      >
        <span>{domain.name.split('.')[0]}</span>
      </div>
      <div className={styles.cardInfo}>
        <span className={styles.domainName}>{domain.name}</span>
        <span className={styles.domainPrice}>{domain.price}</span>
      </div>
    </div>
  );

  return (
    <>
      <Header />
      <div className={styles.pageWrapper}>
      
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1>✨ Recommended For You</h1>
              <p>Personalized picks based on your browsing & favorites</p>
            </div>
            <div className={styles.searchContainer}>
              <input 
                type="text" 
                placeholder="Refine by keyword (e.g., tech, health, food...)" 
                className={styles.searchInput}
              />
              <button className={styles.refineBtn}>Refine</button>
            </div>
          </div>
        </div>

        <div className={styles.mainContainer}>
        
          <section className={styles.gridSection}>
            <div className={styles.sectionHeader}>
              <h2>💡 Inspired by what you liked</h2>
              <p>Curated picks based on your recent activity</p>
            </div>
            <div className={styles.cardsGrid}>
              {inspiredDomains.map(renderCard)}
            </div>
          </section>

         
          <section className={styles.gridSection}>
            <div className={styles.sectionHeader}>
              <h2>🔄 Similar in style</h2>
              <p>Names with matching characteristics & vibe</p>
            </div>
            <div className={styles.cardsGrid}>
              {similarDomains.map(renderCard)}
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RecommendedPage;