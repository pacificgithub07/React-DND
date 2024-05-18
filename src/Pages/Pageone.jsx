import React from 'react'
import styles from "./Pageone.css";
import toolBoxImage from '../Image/toolBox.jpg'
function Pageone() {
  return (
    <>
      <div className={styles.home__section}>
        <div>
          <img src={toolBoxImage}alt="" />
        </div>
        <h2 className={styles.home__section__title}>
          Welcome to Course Builder
        </h2>
        <p className={styles.home__section__para}>
          Create, share, and track your online courses with ease.
        </p>
      </div>
    </>
  )
}

export default Pageone
