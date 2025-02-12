import React from "react";

import styles from './Header.module.css';

export const Header =() =>{
    return(
     
              <header className={styles.header}>
                    <div className={styles.welcomeText}>
                     <h1>  Reading makes the world huge</h1>
                    </div>
                    <div className={styles.containerCarousel}>
                        <div className={styles.containerCarouselItem}>
                             <div className={styles.text}>
                                <h1>FIND SOMETHING TO READ</h1>
                                <p>Fancy something unusual and unpredictable? Funny or exciting? No problem. Check out the collections we have prepared for you.</p>
                             </div>
                              <button className={styles.browseNowBtn}>BROWSE NOW</button>
                        </div>
                        <div className={styles.containerCarouselItem}></div>
                    </div>
              </header>
         
    )
}