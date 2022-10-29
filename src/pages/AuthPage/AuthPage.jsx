import React from 'react';
import { AuthForm } from '../../components/AuthForm/AuthForm';
import styles from './AuthPage.module.css';

export const AuthPage = () => {
  return (
    <section className={styles.authPage}>
      <div className={`${styles.container} ${styles.addFlex}`}>
        <div className={styles.blockInfo}>
          <h2 className={styles.title}>Pro Test</h2>
          <p className={styles.text}>
            <strong>[</strong> We will help you find weak points in knowledge so
            that you can strengthen it. We will show you what is relevant to
            know for a <span className={styles.textSpan}>QA Engineer</span> and
            will try to make the learning process more diverse
            <span className={styles.textSpan}>_ ]</span>
          </p>
        </div>
        <AuthForm className={styles.divForm} />
      </div>
    </section>
  );
};
