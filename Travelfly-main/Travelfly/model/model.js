var homeContent = `<section class="promo-tours">
<div class="promo promo-israel israel">
    <div class="Israel">
        <h3 class="first-text">ISRAEL <br> from $1000</h3>
        <button class="button button1">LEARN MORE</button>
    </div>
</div>
</div>
<div class="promo promo-USA ">
    <div class="USA">
        <h3 class="second-text">U.S.A <br> from $1500</h3>
        <button class="button button2" id="USA">LEARN MORE</button>
    </div>
</div>
<div class="promo promo-AUS">
    <div class="AUS">
        <h3 class="third-text">AUSTRALIA <br> from $1800</h3>
        <button class="button button3" id="AUS">LEARN MORE</button>
    </div>
</div>
</section>
<section class="booking-form">
<h1 class="section-title">Booking form</h1>
<div class="name row mobile">
    <input class="user" type="text" placeholder="name...">
    <input class="email" type="text" placeholder="email...">
</div>
<div class="location row mobile">
    <input class="country" type="text" placeholder="country...">
    <input class="hotel" type="text" placeholder="hotel...">
</div>
<div class="row">
    <label for="c-in" class="Check-label">Check-in</label>
    <input class="Check-in" type="text" placeholder="2/11/2021">
</div>
<div class="row">
    <label for="c-out" class="Check-label">Check-out</label>
    <input class="Check-out" type="text" placeholder="2/11/2021">
</div>
<div class="people row">
    <div class="Adult-left">
        <label for="Adult" class="Adult-label Label">Adult</label>
        <select class="Adult" name="Adult" id="Adults">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
        </select>
    </div>
    <div class="children-centered">
        <label for="Children" class="Children-label Label">Children</label>
        <select class="Children" name="Children" id="Children">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
        </select>
    </div>
    <div class="rooms-right">
        <label for="Rooms" class="Rooms-label Label">Rooms</label>
        <select class="Rooms" name="Rooms" id="Rooms">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
    </div>
</div>
<div class="message">
    <textarea name="Message" id="message" cols="60" rows="10" placeholder="message..."></textarea>
</div>
<div class="button-wrap">
    <button class="submit">SUBMIT</button>
</div>
</section>`;
var aboutContent = `<div class="about-top-section">
<div class="border"><h1><div class="border-bottom">ABOUT: </div></h1></div>
<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
    rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
    explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
    consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
    dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
    incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div class="about-bottom-section">
<div class="border"><h3><div class="border-bottom">Client Quotes:</div></h3></div>
<div class="client">
    <div class="client-image client1">
        <!--<img src="images/Icon.jpg" alt="Icon">-->
    </div>
    <div class="client-quote">
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. </p>
        <div class="client-name">- Miranda Brown</div>
    </div>
</div>
<div class="client">
    <div class="client-image client2">
        <!--<img src="images/Icon.jpg" alt="Icon">-->
    </div>
    <div class="client-quote">
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. </p>
        <div class="client-name">- Johnathan wes</div>
    </div>
</div>
</div>`;
var toursContent = `<div class="tours-content">
<div class="tourPromo tourOne">
    <p class="Location">Israel</p>
    <p class="price">from $1000</p>
    <a href="#" id="Israel"><span class="promoBtn">Learn More</span></a>
</div>
<div class="tourPromo tourTwo">
    <p class="Location">U.S.A</p>
    <p class="price">from $1500</p>
    <a href="USATour.html" id="USA"><span class="promoBtn">Learn More</span></a>
</div>
<div class="tourPromo tourThree">
    <p class="Location">Australia</p>
    <p class="price">from $1800</p>
    <a href="AusTour.html" id="AUS"><span class="promoBtn">Learn More</span></a>
</div>
<div class="tourPromo tourFour">
    <p class="Location">New Zealand</p>
    <p class="price">from $1200</p>
    <a href="NewZTour.html" id="NewZ"><span class="promoBtn">Learn More</span></a>
</div>
<div class="tourPromo tourFive">
    <p class="Location">France</p>
    <p class="price">from $2500</p>
    <a href="FranceTour.html" id="France"><span class="promoBtn">Learn More</span></a>
</div>
<div class="tourPromo tourSix">
    <p class="Location">Egypt</p>
    <p class="price">from $900</p>
    <a href="EgyptTour.html" id="Egypt"><span class="promoBtn">Learn More</span></a>
</div>
<div class="tourPromo tourSeven">
    <p class="Location">Japan</p>
    <p class="price">from $1300</p>
    <span class="promoBtn" id="Japan">Learn More</span>
</div>
<div class="tourPromo tourEight">
    <p class="Location">Canada</p>
    <p class="price">from $2000</p>
    <span class="promoBtn" id="Canada">Learn More</span>
</div>
<div class="tourPromo tourNine">
    <p class="Location">U.A.E</p>
    <p class="price">from $3000</p>
    <span class="promoBtn" id="UAE">Learn More</span>
</div>
</div>
`;
var specialContent = `<div class="mid-section">
<div class="border"><h3><div class="border-bottom">SPECIAL OFFER(S): </div></h3></div>
    <div class="row-special">
        <div class="special-offer-01 SpecialImage">
            <!-- Special Offer Image -->
        </div>
        <div class="specialText">
            <div class="border"><h4 class="SpecialName"><div class="border-bottom">BARCELONA, SPAIN</div></h4></div>
            <h5 class="per-off">(20% off!)</h5>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                totam
                rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
                sunt
                explicabo. </p>
            <span class="specbtn">LEARN MORE</span>
        </div>
    </div>

    <div class="row-special">
        <div class="special-offer-02 SpecialImage">
            <!-- Special Offer Image -->
        </div>
        <div class="specialText">
            <div class="border"><h4 class="SpecialName"><div class="border-bottom">BANGKOK, THAILAND</div></h4></div>
            <h5 class="per-off">(10% off!)</h5>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                totam
                rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
                sunt
                explicabo. </p>
            <span class="specbtn">LEARN MORE</span>
        </div>
    </div>
</div>`;
var blogContent = `<div class="blog">
<div class="blog-border">
    <h3>
        <div class="blog-border-bottom">BLOG: </div>
    </h3>
</div>

<div class="blogNumber1"></div>
<div class="blog-image">

</div>
<div class="blogText">
    <p class="blogText1">Sed et persipiatis unde omnis iste natus</p>
    <p class="blogText2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
        doloremque
        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
        beatae
        vitae dicta sunt explicabo. </p>
</div>

<div class="blogNumber2"></div>
<div class="blog-image">

</div>
<div class="blogText">
    <p class="blogText1">Sed et persipiatis unde omnis iste natus</p>
    <p class="blogText2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
        doloremque
        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
        beatae
        vitae dicta sunt explicabo. </p>
</div>

</div>`;
var contactContent = ` <div class="content-section">
<div class="section-one">
    <div class="cont-border">
        <h3>
            <div class="cont-border-bottom">CONTACT US: </div>
        </h3>
    </div>
    <div class="img-cont">
        <!-- Map image of contact page -->
    </div>
    <div class="location-info">
        <p>travel-fly Inc.<br>
            8901 Marmora Road,<br>
            Glasgow, D04 89GR.<br>
            Freephone:+1 800 559 6580<br>
            Telephone:+1 800 603 6035<br>
            FAX:+1 800 889 9898<br>
            E-mail: mail@travelfly.org</p>
    </div>
</div>
<div class="section-two">
    <input class="contact-us" type="text" placeholder="Your name...">
    <input class="contact-us" type="text" placeholder="Email Address...">
    <input class="contact-us" type="text" placeholder="Company...">
    <input class="contact-us-message" type="text" placeholder="Message...">
    <button class="message-send-button">SEND MESSAGE</button>
</div>
</div>`;
var IsraelContent = `<div class="three-columns">
<div class="Tourimg image-one"></div>
<div class="Tourimg image-two"></div>
<div class="Tourimg image-three"></div>
</div>
<div class="text">
<div class="Day">
    <div id="border"><h3><div id="border-bottom">Day #1</div></h3></div>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
        sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
        est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
        modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div class="Day">
    <div id="border"><h3><div id="border-bottom">Day #2</div></h3></div>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
        sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
        est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
        modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div class="Day">
    <div id="border"><h3><div id="border-bottom">Day #3</div></h3></div>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
        sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
        est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
        modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>`
var USAContent = ``;
var AUSContent = ``;
var NewZContent = ``;
var FranceContent = ``;
var EgyptContent = ``;
var JapanContent = ``;
var CanadaContent = ``;
var UAEContent = ``;

var homeStuff = `<div id="title" class="title">
<h1>travel-fly</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, Fugiat aliquid minus nemo sed est.</p>
</div>`;
var aboutStuff = ``;
var toursStuff = `<div id="title" class="tour-title">
<h1>tours</h1>
</div>`;
var specialStuff = ``;
var blogStuff = ``;
var contactStuff = ``;
var IsraelStuff = `<header class="Israel1">
<span>Israel tour package</span>
<p class="lowerRight">STARTING FROM $1000 (prices may vary)</p>
</header>`;
var USAStuff = ``;
var AUSStuff = ``;
var NewZStuff = ``;
var FranceStuff = ``;
var EgyptStuff = ``;
var JapanStuff = ``;
var CanadaStuff = ``;
var UAEStuff = ``;

export function getPageContent(pageId) {
    $("#app").html(eval(pageId));
}
export function getPageStuff(pageId) {
    $("#app2").html(eval(pageId));
}