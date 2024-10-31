import { useEffect, useState } from 'react';
import moment from 'moment';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  const [countdown, setCountdown] = useState<string>('');

  useEffect(() => {
    const weddingDate = moment("2025-07-19");
    const updateCountdown = () => {
      const now = moment();
      const duration = moment.duration(weddingDate.diff(now));
      setCountdown(`${duration.days()}d ${duration.hours()}h ${duration.minutes()}m ${duration.seconds()}s`);
    };
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <section id="countdown" className={styles.section}>
        <h1>Benvenuti al Nostro Matrimonio</h1>
        <p>Countdown al giorno speciale: {countdown}</p>
      </section>

      <section id="story" className={styles.section}>
        <h2>Come ci siamo incontrati</h2>
        <p>Marni dice che... Andre dice che...</p>
      </section>

      <section id="details" className={styles.section}>
        <h2>Dettagli del Matrimonio</h2>
        <p><strong>Cerimonia:</strong> Chiesa di S. Eufemia alle ore 15:00</p>
        <p><strong>Festa:</strong> Cascine Ghisolfa alle ore 17:00</p>
        <h3>Parcheggi:</h3>
        <ul>
          <li>Plazza Mercato (davanti a farmacia) - a pagamento</li>
          <li>Via Filippo Turati 5 - Disco Orario</li>
          <li>Via Carroccio 8 - Gratis, No Disco</li>
        </ul>
      </section>

      <section id="rsvp" className={styles.section}>
        <h2>Conferma la tua presenza</h2>
        <button className={styles.button}>Conferma qui</button>
      </section>

      <section id="honeymoon" className={styles.section}>
        <h2>Viaggio di Nozze</h2>
        <p>Se vuoi contribuire al nostro viaggio, clicca qui!</p>
        <button className={styles.button}>Contribuisci</button>
      </section>
    </div>
  );
}

export default Home;