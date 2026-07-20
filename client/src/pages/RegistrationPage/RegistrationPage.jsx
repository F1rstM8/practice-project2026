import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Logo from '../../components/Logo';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import styles from './RegistrationPage.module.sass';
import { clearAuthError } from '../../store/slices/authSlice';
import CONSTANTS from '../../constants';


import faqData from './faq.json';

const { TEL_NUMBER } = CONSTANTS.COMPANY_CONTACTS;

const RegistrationPage = props => {
  props.clearError();

  return (
    <div className={styles.signUpPage}>
      <div className={styles.signUpContainer}>
        <div className={styles.headerSignUpPage}>
          <Logo src={`${CONSTANTS.STATIC_IMAGES_PATH}logo.png`} />
          <div className={styles.linkLoginContainer}>
            <Link to='/login' style={{ textDecoration: 'none' }}>
              <span>Login</span>
            </Link>
          </div>
        </div>
        <RegistrationForm history={props.history} />
      </div>
      
      <div className={styles.footer}>
        <div className={styles.articlesMainContainer}>
          
         
          <div className={styles.ColumnContainer}>
            {faqData.column1.map((item, index) => (
              <React.Fragment key={index}>
                <div className={styles.headerArticle}>{item.title}</div>
                <div className={styles.article}>{item.content}</div>
              </React.Fragment>
            ))}
          </div>

        
          <div className={styles.ColumnContainer}>
            {faqData.column2.map((item, index) => (
              <React.Fragment key={index}>
                <div className={styles.headerArticle}>{item.title}</div>
                
                
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
                
              </React.Fragment>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearError: () => dispatch(clearAuthError()),
});

export default connect(null, mapDispatchToProps)(RegistrationPage);