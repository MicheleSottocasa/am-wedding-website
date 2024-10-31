import styles from '../styles/Header.module.css';

const Header: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <a href="#countdown">Countdown</a>
      <a href="#story">La nostra storia</a>
      <a href="#details">Dettagli</a>
      <a href="#rsvp">RSVP</a>
      <a href="#honeymoon">Viaggio di Nozze</a>
    </nav>
  );
}

export default Header;