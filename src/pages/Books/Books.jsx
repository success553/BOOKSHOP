import React, { useState }  from "react";
import styles from './Books.module.css';
import { getImageUrl } from "../../utils";

export const Books =()=>{

     const  [items, setItems] = useState([
           { id: 1, author: 'PATRIC NESS',BookTitle:'After Dark',prevPrice:'$60.9',currentPrice:'$40.7',image:getImageUrl("prodimg1.png") },
           { id: 2, author: 'MIKHALL BULGAKOV',BookTitle:'Mater Magarita',prevPrice:'$60.9',currentPrice:'$40.7',image:getImageUrl("prodimg (2).png") },
           { id: 3,author: 'DANIEL GARGALLO',BookTitle:'She Beyond Sun',prevPrice:'$60.9',currentPrice:'$40.7',image:getImageUrl("prodimg (3).png")},
           { id: 4, author: 'DONARD A.NORMAN',BookTitle:'The Design Of Everything',prevPrice:'$60.9',currentPrice:'$40.7',image:getImageUrl("prodimg (4).png") },
           { id: 5, author: 'ERIK',BookTitle:'Hello I Am Erik',prevPrice:'$60.9',currentPrice:'$40.7',image:getImageUrl("prodimg (7).png") },
           { id: 6, author: 'ALEX GILVARRY',BookTitle:'Fromthe memories of a Non-Enemy Combatant',prevPrice:'$60.9',currentPrice:'$40.7',image:getImageUrl("prodimg (5).png") },
           { id: 7, author: 'DANIEL GARGALLO',BookTitle:'SHE BEYOND SUN',prevPrice:'$60.9',currentPrice:'$40.7',image:getImageUrl("prodimg (3).png") },
           { id: 8, author: 'MARIO PUZO',BookTitle:'THE GOD FATHER',prevPrice:'$60.9',currentPrice:'$40.7',image:getImageUrl("prodimg (6).png") },
           { id: 9, author: 'MURAKAMI',BookTitle:'After Dark',prevPrice:'$60.9',currentPrice:'$40.7',image:getImageUrl("tellthewolvesimhome 1.png") },
         
   
   ]);
    return(
         <>
             <div className={styles.booksContainer}>
                <div className={styles.heading}>
                    
                </div>
                <div className={styles.ecommerceContainer}>
                     <div className={styles.filterContainer}>
                         <div className={styles.filterContainerItem}>
                      
                         <ul className={styles.searchHistory}>
                                 <li className={styles.filterText} >FILTER</li>
                                 <li className={styles.resultText}>120 result</li>
                                 <li className={styles.searchHistoryItem}>Reset All</li>
                                 <li className={styles.searchHistoryItem}>English <img src={getImageUrl("x.png")} alt="..." /></li>
                                 <li className={styles.searchHistoryItem}>Hardcover <img src={getImageUrl("x.png")} alt="..." /></li>
                                 <li className={styles.searchHistoryItem}>Rib Knits <img src={getImageUrl("x.png")} alt="..." /></li>
                         </ul>
                         </div>
                         <div className={styles.filterContainerItem}>
                           <select name="" className={styles.filterSelectBtn} id="">
                              <option value="">FEATURES</option>
                           </select>
                         </div>
                     </div>

                     <div className={styles.containerBook}>

                          <div className={styles.SortingContainer}>

                            <h4 className={styles.sortingLabels}>CATEGORIES</h4>
                            <div className={styles.sortByCategory}>
                                 <input type="text" placeholder="FIND CATEGORY" />
                                  <div className={styles.categories}>
                                     <ul>
                                       <li><span>Imaginative Literature  <img src={getImageUrl("Vector 335.png")}/></span> </li>
                                    
                                         <li><span>Solentific Literature    <img src={getImageUrl("Vector 335.png")}/></span></li>
                                   
                                          <li><span>Business   <img src={getImageUrl("Vector 335.png")}/></span></li>
                                    
                                         <li><span>Educational   <img src={getImageUrl("Vector 335.png")}/></span></li>
                                    
                                          <li><span>Other   <img src={getImageUrl("Vector 335.png")}/></span></li>
                                     </ul>
                                  </div>
                            </div>
                            
                            <h4 className={styles.sortingLabels}>publish date</h4>
                             <div className={styles.sortByYearPublish}>
                                <select name="" id="">
                                    <option value="">All Year</option>
                                </select>
                             </div>
                             
                            <h4 className={styles.sortingLabels}>language</h4>
                            <div className={styles.sortByLanguages}>
                                <ul>
                                    <li><input type="checkbox" name=""class="form-check-input" id="" checked/><span>English</span></li>
                                    <li><input type="checkbox" name=""class="form-check-input" id="" /><span>Russain</span></li>
                                    <li><input type="checkbox" name=""class="form-check-input" id="" /><span>Azerbajani</span></li>
                                  
                            
                                </ul>
                              
                            </div>
                            <h4 className={styles.sortingLabels}>price</h4>
                            <div className={styles.sortByPrice}>
                                 <span className={styles.priceMin}>$5</span> to<span className={styles.priceMax}>$180</span>
                                 <br />
                                 <input type="range" name="" id="" />
                            </div>
                            <h4 className={styles.sortingLabels}>publishing house</h4>
                            <div className={styles.sortByPublishingHouse}>
                                <ul>
                                    <li><input type="checkbox" name="" class="form-check-input" id="" checked/><span>USA</span></li>
                                    <li><input type="checkbox" name=""class="form-check-input" id="" /><span>Russai</span></li>
                                    <li><input type="checkbox" name=""class="form-check-input" id="" /><span>Nigeria</span></li>
                                    <li><input type="checkbox" name=""class="form-check-input" id="" /><span>France</span></li>
                                
                            
                                </ul>
                              
                            </div>
                            <h4 className={styles.sortingLabels}>cover style</h4>
                            <div className={styles.sortByCoverStyle}>
                                 <ul>
                                    <li><input type="radio" name="cover"class="form-check-input" id="" /><span>Hard Cover</span></li>
                                    <li><input type="radio" name="cover"class="form-check-input"id="" /><span>Soft Cover</span></li>
                                 </ul>
                            </div>
                            <h4 className={styles.sortingLabels}>other</h4>
                            <div className={styles.sortByOthers}>
                                 <ul>
                                    <li><input type="checkbox" name=""class="form-check-input"id="" /><span>4+ stars</span></li>
                                    
                                 </ul>
                            </div>

                          </div>
                          <div className={styles.containerBookItem}>
                          {items.map((item, index) => (
                                  <div key={item.id}className={styles.bookCard}>
                                   <div className={styles.bookCardHeader}>
                                    <img src={getImageUrl("BookMark.png")} alt="" />
                                   </div>
                                  <div className={styles.bookCardImage}>
                                     <img src={item.image}alt="" />
                                  </div>
                                
                                  <div className={styles.bookCarddetails}>
                                      <small>{item.author}</small>
                                      <ul>
                                          <li><h5>{item.BookTitle}</h5></li>
                                          <li><button>14 <img src={getImageUrl("chat-bubble.png")} alt="" /></button> <button>48 <img src={getImageUrl("star.png")} alt="" />stars</button></li>
                                          <li><h4>$10.50</h4></li>
                                      </ul>
                                  </div>
                               </div>
                            ))}
                           
                             {/* <div className={styles.bookCard}></div>
                             <div className={styles.bookCard}></div>
                             <div className={styles.bookCard}></div>
                             <div className={styles.bookCard}></div>
                             <div className={styles.bookCard}></div>
                             <div className={styles.bookCard}></div>
                             <div className={styles.bookCard}></div>



                             <div className={styles.bookCard}></div> */}

                          </div>

                     </div>
                </div>

             </div>
         </>
    );
}