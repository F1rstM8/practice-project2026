import React from 'react';

import styles from '../../pages/RegistrationPage/RegistrationPage.module.sass';
import faqData from '../../pages/RegistrationPage/faq.json';
import CONSTANTS from '../../constants';
import ContactBlock from './ContactBlock';

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

              {item.type === 'contact' ? (
                <ContactBlock />
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
