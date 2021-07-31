import { FC, ReactElement } from 'react';
import styles from './Footer.module.css';

const Footer: FC = (): ReactElement => {
  const date: Date = new Date();
  const currentYear: number = date.getFullYear();

  return (
    <footer className={styles.footer}>
      <small>
        © {currentYear} - The books and their images belongs to their author.
      </small>
    </footer>
  );
};

export default Footer;
