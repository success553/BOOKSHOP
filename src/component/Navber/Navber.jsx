import React from "react";
import { getImageUrl } from "../../utils";
export const Navber =()=>{
    return(
      <>
        
              <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
              <a class="navbar-brand" href="/">
                 <img src={getImageUrl("logo.png")} alt="image not found" />
              </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link " aria-current="page" href="/Books">Books</a>
                  </li>
                
                  <li class="nav-item">
                    <a class="nav-link " aria-current="page" href="/authors">Authors</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">What to Read?</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Gift Ideas</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">About Us</a>
                  </li>
                </ul>
                <div className="d-flex btncontainer">
                  <a href="#exampleModal" data-bs-toggle="modal" data-bs-target="#exampleModal"> <img src={getImageUrl("Search.png")} alt="image not found" /></a>
                 
                  <a href="/">   <img src={getImageUrl("Cart.png")} alt="image not found" /></a>
             
                   <button class="login-btn">LOGIN</button>
                 
                </div>
              </div>
            </div>
          </nav>
 

<div class="offcanvas offcanvas-start bg-dark" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
   <a href="/"> <h5 class="offcanvas-title" id="offcanvasExampleLabel">   <img src={getImageUrl("logo.png")} alt="image not found" /></h5></a>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div>
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link " aria-current="page" href="#">Books</a>
                  </li>
                
                  <li class="nav-item">
                    <a class="nav-link " aria-current="page" href="/authors">Authors</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">What to Read?</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Gift Ideas</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">About Us</a>
                  </li>
                </ul>
    </div>
     
  </div>
</div>



<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content bg-dark text-white">
      <div class="modal-header">
    
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
   
      
       </div>

       
      <div class="modal-body">
      <input type="search" placeholder="Search" class="form-input" />
      </div>
     
     
    </div>
  </div>
</div>

          </>
      
    )
}