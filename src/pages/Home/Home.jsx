import React, { useState } from "react";
import styles from './Home.module.css';
import { getImageUrl } from "../../utils";
import {Header} from '../../component/Header/Header';
// import products  from '../../../data/product';
export const Home = ()=>{
   
  // console.log(products)



  
    const  [items, setItems] = useState([

        { id: 1, author: 'Murakami',BookTitle:'After Dark',prevPrice:'$60.9',currentPrice:'$40.7',image:getImageUrl("prodimg1.png") },
        { id: 2, author: 'Murakami',BookTitle:'After Dark',prevPrice:'$60.9',currentPrice:'$40.7',image:getImageUrl("prodimg (2).png") },
        { id: 3,author: 'Murakami',BookTitle:'After Dark',prevPrice:'$60.9',currentPrice:'$40.7',image:getImageUrl("prodimg (3).png")},
        { id: 4, author: 'Murakami',BookTitle:'After Dark',prevPrice:'$60.9',currentPrice:'$40.7',image:getImageUrl("prodimg (4).png") },
        { id: 5, author: 'Murakami',BookTitle:'After Dark',prevPrice:'$60.9',currentPrice:'$40.7',image:getImageUrl("prodimg (7).png") },
        { id: 6, author: 'Murakami',BookTitle:'After Dark',prevPrice:'$60.9',currentPrice:'$40.7',image:getImageUrl("prodimg (5).png") },
        { id: 7, author: 'Murakami',BookTitle:'After Dark',prevPrice:'$60.9',currentPrice:'$40.7',image:getImageUrl("prodimg (3).png") },
        { id: 8, author: 'Murakami',BookTitle:'After Dark',prevPrice:'$60.9',currentPrice:'$40.7',image:getImageUrl("prodimg (6).png") },
        { id: 9, author: 'Murakami',BookTitle:'After Dark',prevPrice:'$60.9',currentPrice:'$40.7',image:getImageUrl("tellthewolvesimhome 1.png") },
     

]);

const  [item, setItem] = useState([
  { id: 1, authorName: 'Murakami',BooksWriten:'3',image:getImageUrl("authors (1).png") },
  { id: 2,  authorName: 'Murakami',BooksWriten:'16',image:getImageUrl("authors (2).png") },
  { id: 3,  authorName: 'Murakami',BooksWriten:'26',image:getImageUrl("authors (3).png") },
  { id: 4,  authorName: 'Murakami',BooksWriten:'10k',image:getImageUrl("authors (4).png") },
  { id: 5,  authorName: 'Murakami',BooksWriten:'77',image:getImageUrl("authors (6).png") },
  { id: 6,  authorName: 'Murakami',BooksWriten:'8',image:getImageUrl("authors (5).png") },

]);

const handleClick = () => {
  window.location.href="/product"
}

    return(
       <>

          <Header/>
          <main className={styles.main}>
             < h1 className={styles.bestSellers}>Bestsellers</h1>
             <div className={styles.bestSellersContainer}>
             {items.map((item, index) => (
                                        <div key={item.id} className={styles.bestSellersContainerItems}>
                                        <div className={styles.bestSellersContainerItemsProductImage}>
                                            <img src={item.image} alt={item.image} />
                                        </div>
                                        <div className={styles.bestSellersContainerItemsProductDetails}>
                                                 <ul className={styles.bestSellersContainerItemsProductDetailsItem}>
                                                    <li className={styles.author}>{item.author}</li>
                                                    <li className={styles.BookTitle}>{item.BookTitle}</li>
                                                    <li className={styles.rating}>5  <img src={getImageUrl("chat-bubble.png")} alt="" /></li>
                                                    <li className={styles.rating}>0.4 <img src={getImageUrl("star.png")} alt="" /></li>
                                                    <li className={styles.price}><span className={styles.currentPrice}>$90.0</span></li>
                                                    <li><button className={styles.orderBtn} onClick={handleClick} >order</button></li>
                                                 </ul>
                                        </div>
                                       
                                        <div className={styles.bestSellersContainerItemsProductBookMark}>
                                            <button className={styles.BookMark} > <img src={getImageUrl("BookMark.png")} alt="" /></button>
                                        </div>
                                        </div>
                                    ))}
                  
                
             </div>
           </main>
           <section className={styles.section1}>
             <div className={styles.container}>
                <h1>Deciding what to read next?</h1>
                <p>You’re in the right place. Tell us what titles or genres you’ve enjoyed in the past, and we’ll give you surprisingly insightful recommendations.</p>
             </div>
               <div className={styles.container}>
                   <button className={styles.readnextBtn}>
                            
                            <img src={getImageUrl("button.png")} alt="image not found"/>

                   </button>
               </div>
           </section>
         <section className={styles.section2}>
                <h1 className={styles.popularAuthors}>POPULAR AUTHORS</h1>

                  <div className={styles.popularAuthorsContainer}>
                                {item.map((list,index)=>(
                                      <div key={list.id} className={styles.popularAuthorsItems}>
                                      <div className={styles.authorImage}>
                                        <img src={list.image} alt="" />
                                      </div>
                                      <div className={styles.authorDetails}>
                                        <ul>
                                            <li>{list.BooksWriten} books</li>
                                            <li>{list.authorName}</li>
                                        </ul>
                                      </div>
                                      <div className={styles.authorBookmark}>
                                      <button className={styles.BookMarkBtn}> <img src={getImageUrl("BookMark.png")} alt="" /></button>
                                      </div>
                                  </div>
                                ))}
                             
                                
                  </div>
         </section>
         <section className={styles.section3}>
               <div className={styles.containerItemDiscount}>DISCOUNTS</div>
               <div className={styles.containerItemGift}>THE BEST BOOKS FOR A GIFT</div>
         </section>
       </>
    )
}