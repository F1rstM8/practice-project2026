import React from 'react';

import styles from '../../pages/RegistrationPage/RegistrationPage.module.sass'; 
import faqData from '../../pages/RegistrationPage/faq.json';
import CONSTANTS from '../../constants';

const { TEL_NUMBER } = CONSTANTS.COMPANY_CONTACTS;

const RegistrationFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.articlesMainContainer}>
        
        
        <div className={styles.ColumnContainer}>
       
          {faqData.column1.map((item) => (
           
            <article key={item.id}>
              <h3 className={styles.headerArticle}>{item.title}</h3>
              <div className={styles.article}>{item.content}</div>
            </article>
          ))}
        </div>

        <div className={styles.ColumnContainer}>
          {faqData.column2.map((item) => (
            <article key={item.id}>
              <h3 className={styles.headerArticle}>{item.title}</h3>
              
              {item.content === 'special-contact-block' ? (
                <div className={styles.article}>
                  Check out our <span className={styles.orangeSpan}>FAQs</span> or
                  send us a <span className={styles.orangeSpan}>message</span>. For
                  assistance with launching a contest, you can also call us at {TEL_NUMBER} or schedule a{' '}
                  <span className={styles.orangeSpan}>Branding Consultation</span>
                </div>
              ) : (
                <div className={styles.article}>{item.content}</div>
              )}
            </article>
          ))}
        </div>

      </div>
    </footer>
  );
};

export default RegistrationFooter;