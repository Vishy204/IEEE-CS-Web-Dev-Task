import { useRef } from 'react';
import './Cart.css'
import { Link } from 'react-router-dom';

function Caart(){
    const phonePopupRef = useRef(null);

    const handleMouseOver = () => {
      if (phonePopupRef.current) {
        console.log('Mouse over');
        phonePopupRef.current.style.display = 'block';
      }
    };
  
    const handleMouseOut = () => {
      if (phonePopupRef.current) {
        console.log('Mouse out');
        phonePopupRef.current.style.display = 'none';
      }
    };
  
    
    const laptopTextRef = useRef(null);
    const laptopPopupRef = useRef(null);
  
    const handleLaptopPopup = () => {
      if (laptopPopupRef.current) {
        laptopPopupRef.current.style.display = 'block';
      }
    };
  
    const handleLaptopPopupOut = (event) => {
      const { relatedTarget } = event;
      const laptopText = laptopTextRef.current;
      const laptopPopup = laptopPopupRef.current;
  
      if (
        laptopText &&
        laptopPopup &&
        !laptopText.contains(relatedTarget) &&
        !laptopPopup.contains(relatedTarget)
      ) {
        laptopPopup.style.display = 'none';
      }
    };

    const watchTextRef = useRef(null);
    const watchPopupRef = useRef(null);
  
    const handleWatchPopup = () => {
      if (watchPopupRef.current) {
        watchPopupRef.current.style.display = 'block';
      }
    };
  
    const handleWatchPopupOut = (event) => {
      const { relatedTarget } = event;
      const watchText = watchTextRef.current;
      const watchPopup = watchPopupRef.current;
  
      if (
        watchText &&
        watchPopup &&
        !watchText.contains(relatedTarget) &&
        !watchPopup.contains(relatedTarget)
      ) {
        watchPopup.style.display = 'none';
      }
    };
   
    const offerTextRef = useRef(null);
    const offerPopupRef = useRef(null);
  
    const handleOfferPopup = () => {
      if (offerPopupRef.current) {
        offerPopupRef.current.style.display = 'block';
      }
    };
  
    const handleOfferPopupOut = (event) => {
      const { relatedTarget } = event;
      const offerText = offerTextRef.current;
      const offerPopup = offerPopupRef.current;
  
      if (
        offerText &&
        offerPopup &&
        !offerText.contains(relatedTarget) &&
        !offerPopup.contains(relatedTarget)
      ) {
        offerPopup.style.display = 'none';
      }
    };
    

    return(
        <div>
            <div className="borders">
                <Link to="/" className='MacLink'>
                <img id="image" width={200} height={100} src="https://www.galaxytool.com/images/galaxy-group-3c-logo.png"></img>
                </Link>
                <input className="sbar" type="text" size={50} placeholder="Search for Products"></input>
                <button className="but">Search</button>
                <select>
                    <option>Delivery Place</option>
                    <option>To Bangalore</option>
                    <option>To Vellore</option>
                    <option>To Chennai</option>
                    <option>To Mumbai</option>
                    <option>To Delhi</option>
                </select>
                <Link to="/register" className="MacLink">
                    <a className="login">
                    <img className="user" src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg"></img>
                    <h5 className="usertext">Sign Up</h5>
                    </a>
                </Link>
                <Link to="/YourCart" className="MacLink">
                <a className="caart">
                <img className="cart" src="https://imgs.search.brave.com/wprEx86hUI2q6RSFWLsR1WBc8zcZQbzyycuaR9p-0Vg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNC8w/Ni8xOS8wMC81OS9z/aG9wcGluZy1jYXJ0/LTM3MTk4MF82NDAu/cG5n"></img>
                <h5 className="caaart">Your <br></br>Cart</h5>
                
        
        
                </a>
                </Link>

        

            </div>
            <div className="navigation">
            <nav>
                <a className="nlyy"><span id="phoneText" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >Mobiles & Accessories</span></a>
                <a className="link" ><span id="laptopText" onMouseOver={handleLaptopPopup} onMouseOut={handleLaptopPopupOut} ref={laptopTextRef}>Computers & Tablets</span></a>
                <a className="link" ><span id="watchText" onMouseOver={handleWatchPopup} onMouseOut={handleWatchPopupOut} ref={watchTextRef}>Smart Technology</span></a>
                <a className="link" ><span id="offerText" onMouseOver={handleOfferPopup} onMouseOut={handleOfferPopupOut} ref={offerTextRef}>Offers</span></a>
            </nav>
            </div>
            <div id="phonePopup" class="popup" className="phonepop" ref={phonePopupRef}>
        
        
            <div className="frame1">
        <article><h4>Mobile Types</h4></article>
        <section>
        
        <ul>
            <li>IPhones</li>
            <li>Smart Phones</li>
            <li>Basic Phones</li>
        </ul>
        <article><h4>Brands</h4></article>
        <ul>
            <li>Apple</li>
            <li>Nokia</li>
            <li>Samsung</li>
        </ul>
        </section>
        </div>
        <div className="frame2">
        <article><h4>Battery Size</h4></article>
        <section>
            <ul>
                <li>4000mAh</li>
                <li>5000mAh</li>
                <li>6000mAh</li>
            </ul>
        </section>
        <article><h4>Accessories</h4></article>
        <section>
            <ul>
                <li>Phone Cases</li>
                <li>Screen Protectors</li>
                <li>Chargers</li>
            </ul>
        </section>
        </div>
        <div className="frame1">
        <article><h4>Operating Systems</h4></article>
        <section>
            <ul>
                <li>iOS</li>
                <li>Android</li>
                <li>Windows Phone</li>
            </ul>
        </section>
        <article><h4>Camera Features</h4></article>
        <section>
            <ul>
                <li>Triple Camera Setup</li>
                <li>Night Mode</li>
                <li>4K Video Recording</li>
            </ul>
        </section>
        </div>
        <div>
            <img className="picframe" src="https://img-prd-pim.poorvika.com/navigation/Reno-11-5G.jpg"></img>
        </div>
        <div>
            <img className="picframe" src="https://img-prd-pim.poorvika.com/navigation/V30-Pro.jpg"></img>
        </div>
        <div className="clearer"></div>
        </div>

        <div id="laptopPopup" class="popup" className="phonepop" ref={laptopPopupRef}>
        
        <div className="frame1">
        <article><h4>Laptop Brands</h4></article>
        <section>
            <ul>
                <li>Apple</li>
                <li>Dell</li>
                <li>HP</li>
            </ul>
        </section>
        <article><h4>Laptop Types</h4></article>
        <section>
            <ul>
                <li>Ultrabooks</li>
                <li>Gaming Laptops</li>
                <li>2-in-1 Convertibles</li>
            </ul>
        </section>
        </div>
        <div className="frame2">
        <article><h4>Laptop Screen Size</h4></article>
        <section>
            <ul>
                <li>13 inches</li>
                <li>15 inches</li>
                <li>17 inches</li>
            </ul>
        </section>
        <article><h4>Laptop Operating Systems</h4></article>
        <section>
            <ul>
                <li>Windows</li>
                <li>macOS</li>
                <li>Chrome OS</li>
            </ul>
        </section>
        </div>
        <div className="frame1">
        <article><h4>Tablet Brands</h4></article>
        <section>
            <ul>
                <li>Apple</li>
                <li>Samsung</li>
                <li>Amazon</li>
            </ul>
        </section>
        <article><h4>Tablet Types</h4></article>
        <section>
            <ul>
                <li>iPads</li>
                <li>Android Tablets</li>
                <li>Amazon Fire Tablets</li>
            </ul>
        </section>
        </div>
        <div>
            <img className="picframe" src="https://img-prd-pim.poorvika.com/navigation/Asus-tuf-gaming-f15.jpg"></img>
        </div>
        <div>
            <img className="picframe" src="https://img-prd-pim.poorvika.com/navigation/Apple-ipad.jpg"></img>
        </div>
        <div className="clearer"></div>
        </div>


        <div id="watchPopup" class="popup" className="phonepop" ref={watchPopupRef}>
        
        <div className="frame1">
        <article><h4>Watch Brands</h4></article>
        <section>
            <ul>
                <li>Apple</li>
                <li>Samsung</li>
                <li>Fitbit</li>
            </ul>
        </section>
        <article><h4>Watch Types</h4></article>
        <section>
            <ul>
                <li>Smartwatches</li>
                <li>Fitness Trackers</li>
                <li>Hybrid Watches</li>
            </ul>
        </section>
        </div>
        <div className="frame2">
        <article><h4>Watch Display</h4></article>
        <section>
            <ul>
                <li>AMOLED</li>
                <li>LCD</li>
                <li>E-ink</li>
            </ul>
        </section>
        <article><h4>Watch Features</h4></article>
        <section>
            <ul>
                <li>Heart Rate Monitor</li>
                <li>GPS Tracking</li>
                <li>Water Resistance</li>
            </ul>
        </section>
        </div>
        <div className="frame1">
        <article><h4>Watch Strap Material</h4></article>
        <section>
            <ul>
                <li>Stainless Steel</li>
                <li>Leather</li>
                <li>Silicone</li>
            </ul>
        </section>
        <article><h4>Watch Battery Life</h4></article>
        <section>
            <ul>
                <li>Up to 1 week</li>
                <li>Up to 2 weeks</li>
                <li>Up to 1 month</li>
            </ul>
        </section>
        </div>
        <div>
            <img className="picframe" src="https://img-prd-pim.poorvika.com/navigation/Firebolt-emerald-smartwatch.jpg" loading='lazy' ></img>
        </div>
        <div>
            <img className="picframe" src="https://img-prd-pim.poorvika.com/navigation/Conekt-Rhythm-Smart-Audio-Sunglasses.jpg"></img>
        </div>
        <div className="clearer"></div>
        </div>


        <div id="offerPopup" class="popup" className="phonepop" ref={offerPopupRef}>
        
        <div className="frame1">
        
        </div>
        <div className="frame2">
      
        </div>
        <div className="frame1">
    
        </div>
       
        <div>
            <img className="picframe" src="https://img-prd-pim.poorvika.com/navigation/Anniversary-sale-Menu-banner.jpg"></img>
        </div>
        <div className="clearer"></div>
        </div>
            <div id="empty-caart" className="cart-borders">
                <h1 id="cart-h1">Your Cart is empty</h1>
                <img id="cart-img" src="https://img.poorvika.com/common/emty-cart.jpg"></img>
                <br></br><br></br>
                <Link to='/'>
                <button id="cart-but">Continue Shopping</button>
                </Link>
            </div>
          
            <div id='cart-borr'>
                <table id='cart-table'>
                    <tr className='table-row'>
                        <th className='cart-table-header'>Contact Information</th>
                        <th className='cart-table-header'>Support</th>
                        <th className='cart-table-header'>Policies</th>
                        <th className='cart-table-header'>Know More</th>
                    </tr>
                    <tr className='table-row'>
                        <td className='cart-table-data' id="cart-aaa">Head Office</td>
                        <td className='cart-table-data'>Contact us</td>
                        <td className='cart-table-data'>T & C</td>
                        <td className='cart-table-data'>About us</td>
                    </tr>
                    <tr className='table-row'>
                        <td className='cart-table-data' rowSpan={2}>Galaxy Tech Pvt Ltd, Vellore Institute <br></br>of Technology, Vellore</td>
                        <td className='cart-table-data'>Site map</td>
                        <td className='cart-table-data'>Privacy Policy</td>
                        <td className='cart-table-data'>Our stores</td>
                    </tr>
                    <tr className='table-row'>
                        
                        <td className='cart-table-data'>One assist</td>
                        <td className='cart-table-data'>CSR & Whistle Policy</td>
                        <td className='cart-table-data'>Service Centers</td>
                    </tr>
                </table>
                <br></br><br></br>
                <h3 style={{color:'purple'}}>About us:</h3>
                <p id="cart-para">Galaxy tech is the Largest Tech Retailer in India, spanning across 460+ showrooms in and around Tamil Nadu, Karnataka, Pondicherry, Mumbai, Pune and Trivandrum, famous for their touch & feel experience. Galaxy Tech sells a wide category of devices in its showrooms and Online portal, ranging from the Best Smartphones, Laptops, Computers, Smart Devices, Smart TVs to Accessories. Galaxy Tech's E-Commerce platform caters to customers across India where Customers can Comfortably Order their devices with just a tap and get them delivered Safely with delivery options such as 2 Hours Delivery, Same Day Delivery, Next Day Delivery, and a Pickup at the Store option based on their location. Having served over 5 Crore+ Happy Customers, Galaxy Tech takes pride in being India's leading retailer for Top Brands like Apple, Samsung, Oppo, Vivo, Xiaomi, OnePlus, Redmi, Realme, Nokia, etc.</p>
            </div>
        </div>
    )

}

export default Caart;