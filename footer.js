const footerHTML = `<footer class="section-footer">
    <div class="footer-container container">
      <div class="content_1">
        <img src="./images/Logo_1.3.jpg" style="border-radius: 10%;" alt="logo">
        <p>Nautical, Unveil Cutting-Edge Fashion: Your Style Destination!
        </p>
        <img src="./images/credit cards.png" alt="cards">
      </div>
      <div class="content_2">
      <h4>SHOPPING</h4>
      <a href="#">Men Store</a>
      <a href="#">Women Store</a>
      <a href="#">Accessories</a>
      <a href="#">Sales & Discount</a>
      </div>
      <div class="content_3">
      <h4>Experiences</h4>
      <a href="./contact.html">Contact Us</a>
      <a href="" target="_blank">Paymet Method</a>
      <a href="" target="_blank">Delivery</a>
      <a href="" target="_blank">Return and Exchange</a>
    </div>
    <div class="content_4">
      <h4>NEWSLETTER</h4>
      <P>Be the first to know about new<br/>arrivals, sales & promos!</P>
      <div class="f-mail">
        <input type="email" placeholder="Your Email">
        <i class="bx bx-envelope"></i>
      </div>
      <hr/>
    </div>
    </div>
   </footer>`;

   const footerElem = document.querySelector(".section-footer");
   footerElem.insertAdjacentHTML("afterbegin", footerHTML);