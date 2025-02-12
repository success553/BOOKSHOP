import React from "react";
import styles from './Footer.module.css';
import { getImageUrl } from "../../utils";

export const Footer =()=>{
    return(
         <>
              <footer className={styles.footer}>
                  <div className={styles.container}>
                     <img src={getImageUrl("logo.png")} alt="image not found" />
                  </div>
                  <div className={styles.container}></div>
              </footer>
              <div className={styles.bottomFooter}>
                   <div className={styles.container}>
                     <a href="">Terms and Condition</a>
                     <a href="">Privacy and policies</a>
                   </div>
                   <div className={styles.container}>
                     <a href="">Terms and Condition</a>
                     <a href="">Privacy and policies</a>
                   </div>
              </div>
         </>
    );
}