import styles from './Header.module.css'
import logo from '../../assets/LedgerLens-logo.png'

function Header () {
  return <div className={styles.headerContainer}>
    <div className={styles.logoContainer}>
      <img src={logo} className={styles.logo} />
    </div>
    <div className={styles.searchContainer}>
      <div className={styles.searchBar}>
        <input type='text' className={styles.input} placeholder='Search...'/>
        <button className={styles.searchButton}>
          <p className={styles.searchText}>Search</p>
        </button>
      </div>
    </div>
  </div>

}

export default Header