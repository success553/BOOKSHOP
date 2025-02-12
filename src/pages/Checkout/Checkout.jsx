import React from "react";
import styles from './Checkout.module.css';

export const Checkout =()=>{
    return(
         <div className={styles.Checkout}>
              <div className={styles.navigateTo}>
                 <ul>
                    <li> back to bag</li>
                    <li className={styles.activeItem}> | contact information </li>
                    <li>shipping method </li>
                    <li>payment </li>
                 </ul>
              </div>

              <div className={styles.container}>
                  <div className={styles.containerItem}>
                     <div className={styles.contactInformation}>
                        <h5>CONTACT INFORMATION  <u className={styles.floatText}>Edit</u></h5>
                         <p>Name  <span className={styles.floatText}>Michael Success</span></p>
                         <p>Contact <span className={styles.floatText}>+99467433482638</span></p>
                     </div>
                     <br />
                     <br />
                     <div className={styles.shippingMethod}>
                            <h4>SHIPPING METHOD</h4>
                            <form action="" className={styles.shippingForm}>
                                <div className={styles.groupForm}>
                                     <select type="days" name="" id="" placeholder="Today">
                                         <option value="">Today</option>
                                     </select>
                                     <input type="time" name="" id="" value="Time"/>
                                </div>
                                <div className={styles.groupForm}>
                                     <input type="text" name="" placeholder="Address" className={styles.customerAddress}/>
                                    
                                </div>
                                <div className={styles.groupForm}>
                                  <textarea name="" placeholder="Note" className={styles.customerNote}></textarea>
                                    
                                </div>
                                <div className={styles.groupForm}>
                                <button className={styles.shippingBtn}>    CONTINUE TO PAYMENT</button>
                                    
                                </div>
                                
                            </form>
                     </div>
                  </div>
                  <div className={styles.containerItem}>

                       <div className={styles.orderSummery}>
                       <h5>ORDER SUMMARY  <u className={styles.floatText}>Edit</u></h5>
                         <table className={styles.orderSummeryTable}>
                                   <thead>

                                        <tr>
                                             <th>BOOKS</th>
                                             <th>QTY</th>
                                             <th>Price</th>
                                        </tr>

                                   </thead>
                                   <tbody>
                                       <tr>
                                             <td>Hello I am Erik</td>
                                             <td>1</td>
                                             <td>$10.5</td>
                                        </tr>
                                        <tr>
                                             <td>Muscle</td>
                                             <td>1</td>
                                             <td>Price</td>
                                        </tr>
                                        <tr>
                                             <td>Subtotal</td>
                                             <td>2</td>
                                             <td>Price</td>
                                        </tr>
                                        <tr>
                                             <td>Shipping</td>
                                             <td></td>
                                             <td>FREE</td>
                                        </tr>


                                   </tbody>
                                
                         </table>
                         <h2>TOTAL  <span className={styles.floatText}>$33.0</span></h2>
                       </div>
                       <div className={styles.promoCode}>
                           <input type="text" name="" placeholder="promocode" id="" />
                           <button>APPLY</button>
                       </div>

                  </div>
              </div>
         </div>
    );
}