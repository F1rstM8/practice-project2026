import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './RecommendedPage.module.sass';
import DomainCard from '../../components/DomainCard/DomainCard';
import recommendedData from '../../data/recommended.json';

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
  
          <section className={styles.gridSection}>
            <div className={styles.sectionHeader}>
              <h2>🔥 Popular Domains</h2>
              <p>Browse and interact to get personalized picks</p>
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