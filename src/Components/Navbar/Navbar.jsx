import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Não Acredito</div>
      <div className={styles.buttons}>
        <button className={styles.actionButton}>Compre Agora</button>
        <button className={styles.actionButton}>Outros Produtos</button>
      </div>
    </nav>
  );
}

export default Navbar;
