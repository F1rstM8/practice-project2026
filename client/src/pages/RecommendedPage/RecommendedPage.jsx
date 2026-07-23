import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './RecommendedPage.module.sass';
import DomainCard from '../../components/DomainCard/DomainCard';
import recommendedData from '../../data/recommended.json';

const interactedDomains = [
  { id: 1, name: 'Gqil.com', logoText: 'Gqil' },
  { id: 2, name: 'BLLT.com', logoText: 'BLLT' },
  { id: 3, name: 'Egyj.com', logoText: 'Egyj' },
  { id: 4, name: 'Teat.com', logoText: 'TEST' },
];

const RecommendedPage = () => {
  return (
    <>
      <Header />
      
      <main className={styles.pageWrapper}>
        
  
        <section className={styles.heroSection}>
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
        </section>

        <div className={styles.mainContainer}>
          
         
          <section className={styles.interactedSection}>
            <div className={styles.interactedHeader}>
              <span>📊</span>
              <span>Based on 4 domains you interacted with</span>
            </div>
            <div className={styles.interactedGrid}>
              {interactedDomains.map((domain) => (
                <div key={domain.id} className={styles.interactedCard}>
                  <div className={styles.interactedLogo}>{domain.logoText}</div>
                  <div className={styles.interactedInfo}>
                    <span className={styles.interactedName}>{domain.name}</span>
                    <span className={styles.viewedBadge}>Viewed</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <hr className={styles.divider} />

          {/* MAIN GRID SECTION (UPDATED) */}
          <section className={styles.gridSection}>
            <div className={styles.sectionHeader}>
              <h2>💡 Inspired by what you liked</h2>
              <p>Curated picks based on your recent activity</p>
            </div>
            
            <div className={styles.cardsGrid}>
              {recommendedData.map((domain) => (
                <DomainCard key={domain.id} domain={domain} />
              ))}
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
};

export default RecommendedPage;