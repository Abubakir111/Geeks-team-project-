import styles from './Overlay.module.css'

const Overlay = ( {exit} ) => {
  return (
    <div onClick={exit} className={styles.overlay}></div>
  )
}

export default Overlay