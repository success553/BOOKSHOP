import react,{useState} from 'react';
import styles from './Product.module.css';
import { getImageUrl } from "../../utils";



export const Product =()=>{

     const  [ booksOfInterest, setItems] = useState([
          { id: 1, author: 'Murakami',BookTitle:'After Dark',prevPrice:'$60.9',currentPrice:'$40.7',image:getImageUrl("tellthewolvesimhome 1 (11).png") },
          { id: 2, author: 'xq',BookTitle:'Mater Magarita',prevPrice:'$60.9',currentPrice:'$40.7',image:getImageUrl("tellthewolvesimhome 2.png") },
          { id: 3,author: 'mmmm',BookTitle:'She Beyond Sun',prevPrice:'$60.9',currentPrice:'$40.7',image:getImageUrl("prodimg (3).png")},
          { id: 4, author: 'Murakami',BookTitle:'The Design Of Everything',prevPrice:'$60.9',currentPrice:'$40.7',image:getImageUrl("tellthewolvesimhome 1 (1).png") },
          { id: 5, author: 'Murakami',BookTitle:'Hello I Am Erik',prevPrice:'$60.9',currentPrice:'$40.7',image:getImageUrl("tellthewolvesimhome 2-2.png") },
          { id: 6, author: 'Murakami',BookTitle:'Fromthe memories of a Non-Enemy Combatant',prevPrice:'$60.9',currentPrice:'$40.7',image:getImageUrl("tellthewolvesimhome 2_2.png") },
     
     ]);
     const  [ customersReview, setItem] = useState([
        { id: 1, author: 'Murakami',BookTitle:'After Dark',prevPrice:'$60.9',currentPrice:'$40.7',image:getImageUrl("img.png")},
        { id: 2, author: 'xq',BookTitle:'Mater Magarita',prevPrice:'$60.9',currentPrice:'$40.7',image:getImageUrl("img (1).png") },
        { id: 3,author: 'mmmm',BookTitle:'She Beyond Sun',prevPrice:'$60.9',currentPrice:'$40.7',image:getImageUrl("prodimg (3).png")},
        { id: 4, author: 'Murakami',BookTitle:'The Design Of Everything',prevPrice:'$60.9',currentPrice:'$40.7',image:getImageUrl("tellthewolvesimhome 1 (1).png") },
       
   
   ]);
    return(
        <div className={styles.container}>
          <div className={styles.product}>

             <div className={styles.navigation}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/Books">| Books</a></li>
                    <li><a href="/Books">| Allbooks</a></li>
                    <li><a href="/Books/this-book">| Muscle Alan trotter</a></li>
                 
                    
                </ul>
             </div>
             <div className={styles.productContainer}>
                  <div className={styles.productContainerItem}>
                      <div className={styles.productImageContainer}>
                         <img src={getImageUrl("tellthewolvesimhome 1 (9).png")}/>
                      </div>
                      <div className={styles.productDetails}>

                        <ul>
                            <li> <small> Alen Trotter</small></li>
                            <li className={styles.bookTitle}><h2>MUSCLE</h2></li>
                            <li  className={styles.reactions}> <small>star</small>45 1000 4review</li>
                            <br/>
                            <li>
                                 <ul className={styles.list}>
                                    <li> Category  <small>Novel</small></li>
                                    <li> Publish dates<small> May 2007</small></li>
                                    <li> language <small>English</small></li>
                                    <li> Pages <small>20B</small></li>
                                    <li> Read time <small>4-6hours</small></li>
                                    <li> Type <small>Hardover</small></li>
                                    <li> Publisher <small>Harvill Secker</small></li>
                                 </ul>
                            </li>
                             <br/>
                            <li><h2><span>$10.50 </span>$10.50</h2></li>
                            <br/>
                            <li> <button className={styles.buy}>BUY NOW</button>  <button>ADD TO BAG</button></li>
                        </ul>

                      </div>
                  </div>
                  <div className={styles.productContainerItem}>
                    <div className={styles.summeryPlotContainer}>
                        <div className={styles.summeryPlot}>
                            <h2>PLOT SUMMARY <button className={styles.collapseBtn}><img src={getImageUrl("button_2.png")}/></button></h2>
                            <p>In a hard-boiled city of crooks, grifts and rackets lurk a pair of toughs: Box and _____. They're the kind of men capable of extracting apologies and reparations, of teaching you a chilling lesson. They seldom think twice, and ask very few questions.Until one night over the poker table, they encounter a pulp writer with wild ideas and an unscrupulous private detective, leading them into what is either a classic mystery, a senseless maze of corpses, or an inextricable fever dream . . . Drunk on cinematic and literary influence, Muscle is a slice of noir fiction in collapse, a ceaselessly imaginative story of violence, boredom and madness.
                            </p>
                         </div>
                         <div className={styles.summeryPlotReception}>
                                <h2>RECEPTION  <button className={styles.collapseBtn}><img src={getImageUrl("button-1.png")}/></button></h2>
                         </div>

                    </div>
                 
                   
                  </div>
             </div>
          </div>

          <div className={styles.alsoLikeContainer}>
                   <h5 className={styles.alsoLikeLabel}>YOU MAY ALSO LIKE</h5>
                   <div className={styles.alsoLikeBookContainer}>
                     {booksOfInterest.map((item,index)=>(
                            <div key={item.id} className={styles.alsoLikeBookContainerItem}>
                            <div className={styles.booksOfInterestImage}>
                                <img src={item.image}/>
                            </div>
                            <div className={styles.booksOfInterestDetail}>
                                <ul>
                                    <li>Don Delillo</li>
                                    <li><b>The Name</b></li>
                                </ul>
                            </div>
                            </div>
                     ))}
                      
                     
                   </div>
                   <h5 className={styles.readersReviewContainerLabel}>READERS REVIEWS </h5>
                   <div className={styles.bookReviewContainer}>
                         {customersReview.map((items,index)=>(
                                            <div className={styles.bookReviewContainerItem}>
                                            <div className={styles.reviewUserDetails}>
                                                <div className={styles.reviewUserImage}>
                                                    <img src={items.image}/>
                                                </div>
                                                <div className={styles.reviewUserFullname}> <h5>Geoffrey Mott</h5></div>
                                                <div className={styles.reviewUserDateOfReview}>10 october 2022</div>
                                            </div>
                                            <div className={styles.reviewText}>
                                            <small>
                                                <img src={getImageUrl("star.png")}/>4</small>
                                                <p>Muscle by Alan Trotter is a fresh piece of noir fiction. Our main characters are the two crooks Box and _____. They are on the hunt for odd jobs that most of us, hopefully, would not be willing to fulfill. It felt reminiscent of both A Clockwork Orange and The Time Machine. I guess that can seem like a strange combination, but Alan Trotter made it work.When Box and _____. encounter a private detective and this strange writer, events quickly start to unravel. Oh, and there is a girl of course! Ixsas</p>
                                            </div>
                                            </div>
                         ))}
                      
                   
                      
                   </div>
          </div>
         
          </div>
    );
}