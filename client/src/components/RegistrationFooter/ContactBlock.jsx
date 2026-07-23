import React from 'react';
import styles from './ContactBlock.module.sass';

import CONSTANTS from '../../constants';
const { TEL_NUMBER } = CONSTANTS.COMPANY_CONTACTS;

const ContactBlock = () => {
  return (
    <div className={styles.contactWrapper}>
      Check out our <span className={styles.orangeText}>FAQs</span> or
      send us a <span className={styles.orangeText}>message</span>. For
      assistance with launching a contest, you can also call us at {TEL_NUMBER} or schedule a{' '}
      <span className={styles.orangeText}>Branding Consultation</span>
    </div>
  );
};

export default ContactBlock;