import React from "react";
import "../footer/style.css";
import { Link } from 'react-router-dom';

const chart = () => {
    return(
        <footer className="footer">
        <div class="content">
          <div class="top">
            <div class="logo-details">
              <i class="fab fa-slack"></i>
              <span class="logo_name">Crypto Pricetaker  </span>
            </div>
            <div class="media-icons">
              <a href="#"><i class="fab fa-facebook-f"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
              <a href="#"><i class="fab fa-linkedin-in"></i></a>
              <a href="#"><i class="fab fa-youtube"></i></a>
            </div>
          </div>
          <div class="link-boxes">
            <ul class="box">
              <li class="link_name">Company</li>
              <li><a href="#">Home</a></li>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Get started</a></li>
            </ul>
            <ul class="box">
              <li class="link_name">Services</li>
              <li><a href="#">Cs Online </a></li>
              <li><a href="#">Faq</a></li>
              <li><a href="#">Logo design</a></li>
              <li><a href="#">Banner design</a></li>
            </ul>
            <ul class="box">
              <li class="link_name">Account</li>
              <li><a href="#">Profile</a></li>
              <li><a href="#">Akun</a></li>
              <li><a href="#">Prefrences</a></li>
              <li><a href="#">Subscription</a></li>
            </ul>
            <ul class="box">
              <li class="link_name">Social Media</li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Telegram</a></li>
              <li><a href="#">Youtube</a></li>
            </ul>
            <ul class="box input-box">
              <li class="link_name">Subscribe</li>
              <li><input type="text" placeholder="Enter your email"/></li>
              <li><input type="button" value="Subscribe"/></li>
            </ul>
          </div>
        </div>
        <div class="bottom-details">
          <div class="bottom_text">
            <span class="copyright_text">Copyright &#169; 2022 <a href="#">Crypto Pricetaker.</a>All rights reserved</span>
            <span class="policy_terms">
              <a href="#">Privacy policy</a>
              <a href="#">Terms & condition</a>
            </span>
          </div>
        </div>
      </footer>
    )
}
export default chart;