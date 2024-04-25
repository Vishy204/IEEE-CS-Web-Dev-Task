import { useState,useEffect } from "react";
import './index.css'
import { Link } from "react-router-dom";
import { useRef } from "react";


function Message(){
   
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













    const [currentIndex, setCurrentIndex] = useState(0);
    const slidesRef = useRef(null);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        nextSlide();
      }, 2000);
  
      return () => {
        clearInterval(intervalId);
      };
    }, [currentIndex]); 
  
    const showSlide = (index) => {
      const slides = slidesRef.current.querySelectorAll('.slider-img');
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.classList.add('active');
        } else {
          slide.classList.remove('active');
        }
      });
    };
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesRef.current.querySelectorAll('.slider-img').length);
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + slidesRef.current.querySelectorAll('.slider-img').length) % slidesRef.current.querySelectorAll('.slider-img').length);
    };

    function scroll(){
        const container=document.querySelector(".body")
        container.scrollLeft+=200

    }
    function scroll1(){
        const container=document.querySelector(".body")
        container.scrollLeft-=200
    }
    function scroll2(){
        const container=document.querySelector(".body1")
        container.scrollLeft+=200

    }
    function scroll3(){
        const container=document.querySelector(".body1")
        container.scrollLeft-=200
    }

    const heartRef = useRef(null);
    const [isGlowing, setIsGlowing] = useState(false);
  
    const toggleGlow = () => {
      setIsGlowing(prev => !prev);
    };
  
    const handleClick = () => {
      toggleGlow();
      if (isGlowing) {
        heartRef.current.style.filter = 'none';
        heartRef.current.style.color = 'black';
      } else {
        heartRef.current.style.color = 'red';
      }
    };

    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
      const savedMode = localStorage.getItem('darkMode');
      if (savedMode === 'true') {
          setIsDarkMode(true);
          document.body.classList.add('dark-mode');
      }
  }, []);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'true');
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'false');
    }
};




return(
    <div className="container">

    <div className="header">
    <div className="borders">
                <Link to="/" className='MacLink'>
                <img id="image" width={200} height={100} src="https://www.galaxytool.com/images/galaxy-group-3c-logo.png " loading="lazy"></img>
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

                
                    
                
                
                <Link to="/Cart" className="MacLink">
                <a className="caart">
                <img className="cart" src="https://imgs.search.brave.com/wprEx86hUI2q6RSFWLsR1WBc8zcZQbzyycuaR9p-0Vg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNC8w/Ni8xOS8wMC81OS9z/aG9wcGluZy1jYXJ0/LTM3MTk4MF82NDAu/cG5n"></img>
                <h5 className="caaart">Your <br></br>Cart</h5>
                
        
        
                </a>
                </Link>
                <button className="but" onClick={toggleDarkMode} >{isDarkMode ? 'Light Mode' : 'Dark Mode'}</button>

        

            </div>
            <div className="navigation">
            <nav>
                <a className="nlyy"><span id="phoneText" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >Mobiles & Accessories</span></a>
                <a className="link" ><span id="laptopText" onMouseOver={handleLaptopPopup} onMouseOut={handleLaptopPopupOut} ref={laptopTextRef}>Computers & Tablets</span></a>
                <a className="link" ><span id="watchText" onMouseOver={handleWatchPopup} onMouseOut={handleWatchPopupOut} ref={watchTextRef}>Smart Technology</span></a>
                <a className="link" ><span id="offerText" onMouseOver={handleOfferPopup} onMouseOut={handleOfferPopupOut} ref={offerTextRef}>Offers</span></a>
            </nav>
            </div>
            <div id="phonePopup" class="popup" className="phonepoppp" ref={phonePopupRef}>
        
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

        <div id="laptopPopup" class="popup" className="phonepoppp" ref={laptopPopupRef}>
        
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


        <div id="watchPopup" class="popup" className="phonepoppp" ref={watchPopupRef}>
        
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
            <img className="picframe" src="https://img-prd-pim.poorvika.com/navigation/Firebolt-emerald-smartwatch.jpg"></img>
        </div>
        <div>
            <img className="picframe" src="https://img-prd-pim.poorvika.com/navigation/Conekt-Rhythm-Smart-Audio-Sunglasses.jpg"></img>
        </div>
        <div className="clearer"></div>
        </div>


        <div id="offerPopup" class="popup" className="phonepoppp" ref={offerPopupRef}>
        
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




        <div className="slider-container">
      <div className="slides" ref={slidesRef}>
        <img className={`slider-img ${currentIndex === 0 ? 'active' : ''}`} src="https://img-prd-pim.poorvika.com/cdn-cgi/image/width=1900,height=600,quality=75/pageimg/iPhone-15-Webnew-wweb.jpg" alt="Image 1" />
        <img className={`slider-img ${currentIndex === 1 ? 'active' : ''}`} src="https://img-prd-pim.poorvika.com/cdn-cgi/image/width=1900,height=600,quality=75/pageimg/Samsung-Galaxy-S24-Series-Desktop-View-new111111-.jpg" alt="Image 2" />
        <img className={`slider-img ${currentIndex === 2 ? 'active' : ''}`} src="https://img-prd-pim.poorvika.com/cdn-cgi/image/width=1900,height=600,quality=75/pageimg/ICICI-BANK-OFFER-Site-View.jpg" alt="Image 3" />
        <img className={`slider-img ${currentIndex === 3 ? 'active' : ''}`} src="https://img-prd-pim.poorvika.com/cdn-cgi/image/width=1900,height=600,quality=75/pageimg/Samsung-neo-qled-8k-Smart-tv-at-poorvika.jpg" alt="Image 4" />
        <img className={`slider-img ${currentIndex === 4 ? 'active' : ''}`} src="src/screenslide.png" alt="Image 5" />
      </div>
      <button className="btn btn-prev" onClick={prevSlide}><img className="arrows" src="https://c8.alamy.com/comp/R1PKK9/left-arrow-vector-icon-isolated-on-transparent-background-left-arrow-transparency-logo-concept-R1PKK9.jpg" alt="Previous" /></button>
      <button className="btn btn-next" onClick={nextSlide}><img className="arrows" src="https://www.shutterstock.com/image-vector/right-arrow-vector-icon-isolated-600w-1187746312.jpg" alt="Next" /></button>
    </div>
    <img id="banner" src="src/download (3).png"></img>
    </div>

    <div>
<div className="main">
    <h3 className="phineas">5G Mobile Phones</h3>
    <button className="scroll" onClick={scroll}>&gt;</button>
    <button className="scroll" onClick={scroll1}>&lt;</button>
    <div>
    <div className="body">
        <div className="first">
        <div
      ref={heartRef}
      onClick={handleClick}
      style={{
        display: 'inline-block',
        fontSize: '18px',
        cursor: 'pointer',
        marginRight: '10px',
        float:'right',
        ...(isGlowing && {
          filter: 'drop-shadow(0 0 5px #f00)',
          color: 'red',
        }),
      }}
    >
      &#x2764;
    </div>
 
            <img src="https://img-prd-pim.poorvika.com/cdn-cgi/image/width=150,height=150,quality=75/product/xiaomi-14-5g-jade-green-512gb-12gb-ramfront-back-view.png" className="pic1"></img>
            <p className="head1"><b>Xiaomi 14 5G</b></p>
            <p className="head1"> ( Jade Green,12GB-512GB )</p>
            <p className="price1"><del>₹79,999</del>&nbsp; ₹69,999</p>
           
        </div>
        <div className="second">
        <div ref={heartRef} onClick={handleClick} style={{
        display: 'inline-block',
        fontSize: '18px',
        cursor: 'pointer',
        marginRight: '10px',
        float:'right',
        
      }}
    >
      &#x2764; 
    </div>
            
            <img src="https://img-prd-pim.poorvika.com/cdn-cgi/image/width=150,height=150,quality=75/product/Vivo-v30-pro-5g-classic-black-512gb-12gb-ram-Front-Back-View.png" className="pic1"></img>
            <p className="head1"><b>Vivo V30 Pro 5G</b></p>
            <p className="head1"> ( Classic Black, 12GB-512GB  )</p>
            <p className="price1"><del>₹51,999</del>&nbsp; ₹46,999</p>
           
        </div>
        <div className="second">
        <div ref={heartRef} onClick={handleClick} style={{
        display: 'inline-block',
        fontSize: '18px',
        cursor: 'pointer',
        marginRight: '10px',
        float:'right',
        
      }}
    >
      &#x2764; 
    </div>
            
            <img src="https://img-prd-pim.poorvika.com/cdn-cgi/image/width=150,height=150,quality=75/product/Realme-12-pro-plus-5g-navigator-beige-12gb-256gb-ram-Front-Back-View.png" className="pic1"></img>
            <p className="head1"><b>Realme 12 Pro Plus 5G</b></p>
            <p className="head1"> (  Beige,12GB-256GB   )</p>
            <p className="price1"><del>₹33,999</del>&nbsp; ₹31,499</p>
           
        </div>
        <div className="second">
        <div ref={heartRef} onClick={handleClick} style={{
        display: 'inline-block',
        fontSize: '18px',
        cursor: 'pointer',
        marginRight: '10px',
        float:'right',
        
      }}
    >
      &#x2764; 
    </div>
            
            <img src="https://img-prd-pim.poorvika.com/cdn-cgi/image/width=150,height=150,quality=75/product/Oppo-F25-Pro-5G-Ocean-Blue-8GB-256GB-Front-Back-View.png" className="pic1"></img>
            <p className="head1"><b>Oppo F25 Pro 5G</b></p>
            <p className="head1"> ( Ocean Blue, 8GB-256GB   )</p>
            <p className="price1"><del>₹25,999</del>&nbsp; ₹21,499</p>
           
        </div>
      
        <div className="second">
        <div ref={heartRef} onClick={handleClick} style={{
        display: 'inline-block',
        fontSize: '18px',
        cursor: 'pointer',
        marginRight: '10px',
        float:'right',
        
      }}
    >
      &#x2764; 
    </div>
            
            <img src="https://img-prd-pim.poorvika.com/cdn-cgi/image/width=150,height=150,quality=75/product/Vivo-V30-5G-Peacock-Green-8GB-128GB-Front-Back-View.png" className="pic1"></img>
            <p className="head1"><b>Vivo V30 5G</b></p>
            <p className="head1"> ( Peacock Green, 8GB )</p>
            <p className="price1"><del>₹38,990</del>&nbsp; ₹33,990</p>
           
        </div>
        <div className="second">
        <div ref={heartRef} onClick={handleClick} style={{
        display: 'inline-block',
        fontSize: '18px',
        cursor: 'pointer',
        marginRight: '10px',
        float:'right',
        
      }}
    >
      &#x2764; 
    </div>
            
            <img src="https://img-prd-pim.poorvika.com/cdn-cgi/image/width=150,height=150,quality=75/product/apple-iphone-15-plus-yellow-128gb-front-back-view.png" className="pic1"></img>
            <p className="head1"><b>Apple iPhone 15 Plus</b></p>
            <p className="head1"> (  Yellow,128GB  )</p>
            <p className="price1"><del>₹82,990</del>&nbsp; ₹89,990</p>
           
        </div>
        
        <div className="second">
        <div ref={heartRef} onClick={handleClick} style={{
        display: 'inline-block',
        fontSize: '18px',
        cursor: 'pointer',
        marginRight: '10px',
        float:'right',
        
      }}
    >
      &#x2764; 
    </div>
            
            <img src="https://img-prd-pim.poorvika.com/cdn-cgi/image/width=150,height=150,quality=75/product/oppo-reno-11-pro-5g-rock-grey-256gb-12gb-ram-front-back-view.png" className="pic1"></img>
            <p className="head1"><b>Oppo Reno 11 Pro 5G </b></p>
            <p className="head1"> ( Blue,128GB  )</p>
            <p className="price1"><del>₹44,999</del>&nbsp; ₹39,999</p>
           
        </div>
        <div className="second">
        <div ref={heartRef} onClick={handleClick} style={{
        display: 'inline-block',
        fontSize: '18px',
        cursor: 'pointer',
        marginRight: '10px',
        float:'right',
        
      }}
    >
      &#x2764; 
    </div>
            
            <img src="https://img-prd-pim.poorvika.com/cdn-cgi/image/width=150,height=150,quality=75/product/samsung-galaxy-s23-fe-5g-Purple-256gb-8gb-ram-front-back-view.png" className="pic1"></img>
            <p className="head1"><b>Samsung Galaxy S23 FE 5G</b></p>
            <p className="head1"> ( Purple,8GB-256GB  )</p>
            <p className="price1"><del>₹84,999</del>&nbsp; ₹59,999</p>
           
        </div>

    </div>
    </div>
    </div>
    <br></br>
    <div className="main">
    <h3 className="phineas">Laptops</h3>
    <button className="scroll1" onClick={scroll2}>&gt;</button>
    <button className="scroll1" onClick={scroll3}>&lt;</button>
    
    <div>
    <div className="body1">
        <Link to="/MacDetails" className="MacLink" >
        <div className="first">
        <div ref={heartRef} onClick={handleClick} style={{
        display: 'inline-block',
        fontSize: '18px',
        cursor: 'pointer',
        marginRight: '10px',
        float:'right',
        
      }}
    >
      &#x2764; 
    </div>
            
            <img src="https://img-prd-pim.poorvika.com/cdn-cgi/image/width=150,height=150,quality=75/product/apple-macbook-air-m2-chip-with-8-core-cpu-and-10-core-gpu-mac-os-laptop-15-3-inch-midnight-mqkx3hn-a-8gb-ram-256gb-ssd-front-view.png" className="pic1"></img>
            <p className="head1"><b>Apple MacBook Air M2 Chip</b></p>
            <p className="head1"> ( Midnight,8GB-256GB )</p>
            <p className="price1"><del>₹1,34,900</del>&nbsp; ₹1,21,990</p>
           
        </div>
        </Link>
        <div className="second">
        <button className="heart" id="heart1" >❤</button>
            
            <img src="https://img-prd-pim.poorvika.com/cdn-cgi/image/width=150,height=150,quality=75/product/Lenovo-ideapad-3-intel-core-i5-11th-gen-windows-11-home-laptop-82h803twin-arctic-grey-8gb-ram-512gb-ssd-Front-View.png" className="pic1"></img>
            <p className="head1"><b>Lenovo IdeaPad 3</b></p>
            <p className="head1"> ( Arctic Grey,8GB-512GB )</p>
            <p className="price1"><del>₹49,999</del>&nbsp; ₹44,999</p>
           
        </div>
        <div className="second">
        <button className="heart" id="heart1" >❤</button>
            
            <img src="https://img-prd-pim.poorvika.com/cdn-cgi/image/width=150,height=150,quality=75/product/asus-vivobook-15-intel-core-i5-12th-gen-windows-11-home-laptop-quiet-blue-x1502za-ej532ws-8gb-ram-512gb-ssd-front-view.png" className="pic1"></img>
            <p className="head1"><b>Asus VivoBook 15 </b></p>
            <p className="head1"> ( Quiet Blue,8GB-512GB )</p>
            <p className="price1"><del>₹70,990</del>&nbsp; ₹47,990</p>
           
        </div>
        <div className="second">
        <button className="heart" id="heart1" >❤</button>
            <img src="https://img-prd-pim.poorvika.com/cdn-cgi/image/width=150,height=150,quality=75/product/Hp-15s-intel-celeron-n4500-windows-11-home-laptop-15s-fq3066tu-jet-black-8gb-ram-512gb-ssd-Front-View.png" className="pic1"></img>
            <p className="head1"><b>HP 15s Intel Celeron N4500 </b></p>
            <p className="head1"> ( Jet Black,8GB-512GB )</p>
            <p className="price1"><del>₹31,990</del>&nbsp; ₹28,499</p>
           
        </div>
      
        <div className="second">
        <button className="heart" id="heart1" >❤</button>
            <img src="https://img-prd-pim.poorvika.com/cdn-cgi/image/width=150,height=150,quality=75/product/samsung-galaxy-book3-intel-core-i7-13th-gen-windows-11-home-laptop-silver-np750xfg-kb3in-16gb-ram-512gb-ssd-front.png" className="pic1"></img>
            <p className="head1"><b>Samsung Galaxy Book3 </b></p>
            <p className="head1">  ( Silver,16GB-512GB )</p>
            <p className="price1"><del>₹1,12,990</del>&nbsp; ₹81,990</p>
           
        </div>
        <div className="second">
        <button className="heart" id="heart1" >❤</button>
            <img src="https://img-prd-pim.poorvika.com/cdn-cgi/image/width=150,height=150,quality=75/product/asus-tuf-gaming-f15-intel-core-i5-11th-gen-windows-11-home-laptop-fx506hf-hn024w-graphite-black-8gb-ram-512gb-ssd-front-view.png" className="pic1"></img>
            <p className="head1"><b>ASUS TUF Gaming F15</b></p>
            <p className="head1">  ( Graphite Black,8GB-512GB )</p>
            <p className="price1"><del>₹75,990</del>&nbsp; ₹53,990</p>
           
        </div>
        
        <div className="second">
        <button className="heart" id="heart1" >❤</button>
            <img src="https://img-prd-pim.poorvika.com/cdn-cgi/image/width=150,height=150,quality=75/product/dell-inspiron-3511-intel-core-i5-11th-gen-windows-11-home-laptop-carbon-black-d560745win9b-8gb-ram-512gb-ssd-front-view.png" className="pic1"></img>
            <p className="head1"><b>Dell Inspiron 3511 </b></p>
            <p className="head1"> ( 8GB-512GB,Carbon Black )</p>
            <p className="price1"><del>₹54,990</del>&nbsp; ₹53,990</p>
           
        </div>
        <div className="second">
        <button className="heart" id="heart1" >❤</button>
            <img src="https://img-prd-pim.poorvika.com/cdn-cgi/image/width=150,height=150,quality=75/product/hp-15-ryzen-5-7520u-windows-11-home-laptop-natural-silver-15-fc0028au-8gb-ram-512gb-ssd-front-view.png" className="pic1"></img>
            <p className="head1"><b>HP 15 Ryzen 5 7520U </b></p>
            <p className="head1"> ( Natural Silver,8GB-512GB )</p>
            <p className="price1"><del>₹55,691</del>&nbsp; ₹45,990</p>
           
        </div>
       
        

    </div>

    </div>
    </div>
    </div>
    <img className="banner1" src="https://img-prd-pim.poorvika.com/pageimg/Gaming-laptop.jpg"></img>
    <div className="main">
    <h3 className="phineas">Smart Watches</h3>
    <button className="scroll1" onClick={scroll2}>&gt;</button>
    <button className="scroll1" onClick={scroll3}>&lt;</button>
    
    <div>
    <div className="body1">
        
        <div className="first">
        <div ref={heartRef} onClick={handleClick} style={{
        display: 'inline-block',
        fontSize: '18px',
        cursor: 'pointer',
        marginRight: '10px',
        float:'right',
        
      }}
    >
      &#x2764; 
    </div>
    <img src="https://img-prd-pim.poorvika.com/cdn-cgi/image/width=150,height=150,quality=75/product/Conekt-slay-pro-smartwatch-black-Front-View.png" className="pic1"></img>
            <p className="head1"><b>Conekt Slay Pro </b></p>
            <p className="head1"> ( Black )</p>
            <p className="price1"><del>₹9,999</del>&nbsp; ₹1,999</p>
           
        </div>
      
        <div className="second">
        <button className="heart" id="heart1" >❤</button>
            
            <img src="https://img-prd-pim.poorvika.com/cdn-cgi/image/width=150,height=150,quality=75/product/Fire-boltt-asteroid-smartwatch-orange-Front-Side-View-Image.png" className="pic1"></img>
            <p className="head1"><b>Fire-Boltt Asteroid </b></p>
            <p className="head1"> ( Orange )</p>
            <p className="price1"><del>₹15,999</del>&nbsp; ₹2,499</p>
           
        </div>
        <div className="second">
        <button className="heart" id="heart1" >❤</button>
            
            <img src="https://img-prd-pim.poorvika.com/cdn-cgi/image/width=150,height=150,quality=75/product/Huami-amazfit-pop-3r-smartwatch-metallic-Silver-Front-Left-View.png" className="pic1"></img>
            <p className="head1"><b>Huami Amazfit Pop 3R </b></p>
            <p className="head1"> ( Silver Strap )</p>
            <p className="price1"><del>₹6,999</del>&nbsp; ₹4,999</p>
           
        </div>
        <div className="second">
        <button className="heart" id="heart1" >❤</button>
            <img src="https://img-prd-pim.poorvika.com/cdn-cgi/image/width=150,height=150,quality=75/product/fire-boltt-atlas-smartwatch-black-left-view.png" className="pic1"></img>
            <p className="head1"><b>Fire-Boltt Atlas </b></p>
            <p className="head1"> ( Jet Black )</p>
            <p className="price1"><del>₹18,999</del>&nbsp; ₹1,999</p>
           
        </div>
      
        <div className="second">
        <button className="heart" id="heart1" >❤</button>
            <img src="https://img-prd-pim.poorvika.com/cdn-cgi/image/width=150,height=150,quality=75/product/fire-boltt-blizzard-ultra-smartwatch-multi-gold-front-left-view.png"  className="pic1"></img>
            <p className="head1"><b>Fire-Boltt Blizzard Ultra  </b></p>
            <p className="head1">  (  Multi Gold )</p>
            <p className="price1"><del>₹21,000</del>&nbsp; ₹2,499</p>
           
        </div>
        <div className="second">
        <button className="heart" id="heart1" >❤</button>
            <img src="https://img-prd-pim.poorvika.com/cdn-cgi/image/width=150,height=150,quality=75/product/fire-boltt-vogue-smartwatch-rose-gold-left-view.png" className="pic1"></img>
            <p className="head1"><b>Fire-Boltt Vogue </b></p>
            <p className="head1">  ( Rose Gold )</p>
            <p className="price1"><del>₹14,999</del>&nbsp; ₹1,999</p>
           
        </div>
        
        <div className="second">
        <button className="heart" id="heart1" >❤</button>
            <img src="https://img-prd-pim.poorvika.com/cdn-cgi/image/width=150,height=150,quality=75/product/ambrane-wise-crest-smartwatch-camo-brown-front-view.png" className="pic1"></img>
            <p className="head1"><b>Ambrane Wise Crest </b></p>
            <p className="head1"> ( Camo Brown )</p>
            <p className="price1"><del>₹6,499</del>&nbsp; ₹1,499</p>
           
        </div>
        <div className="second">
        <button className="heart" id="heart1" >❤</button>
            <img src="https://img-prd-pim.poorvika.com/cdn-cgi/image/width=150,height=150,quality=75/product/Fire-boltt-torrent-smartwatch-gold-mesh-Front-Left-View.png" className="pic1"></img>
            <p className="head1"><b>Fire-Boltt Torrent</b></p>
            <p className="head1"> ( Silver Mesh)</p>
            <p className="price1"><del>₹19,999</del>&nbsp; ₹3,499</p>
           
        </div>
        </div>
        </div>

        <div className="main">
    <h3 className="phineas">True Wireless Earphones</h3>
    <button className="scroll1" onClick={scroll2}>&gt;</button>
    <button className="scroll1" onClick={scroll3}>&lt;</button>
    
    <div>
    <div className="body1">
        
        <div className="first">
        <div ref={heartRef} onClick={handleClick} style={{
        display: 'inline-block',
        fontSize: '18px',
        cursor: 'pointer',
        marginRight: '10px',
        float:'right',
        
      }}
    >
      &#x2764; 
    </div>
    <img src="https://img-prd-pim.poorvika.com/cdn-cgi/image/width=150,height=150,quality=75/product/Apple-Airpods-2-True-Wireless-White-01.png" className="pic1"></img>
            <p className="head1"><b>Apple AirPods 2 </b></p>
            <p className="head1"> ( White )</p>
            <p className="price1"><del>₹14,990</del>&nbsp; ₹12,990</p>
           
        </div>
      
        <div className="second">
        <button className="heart" id="heart1" >❤</button>
            
            <img src="https://img-prd-pim.poorvika.com/cdn-cgi/image/width=150,height=150,quality=75/product/Sony-WF-C500-Truly-Wireless-Headphones-Black-Open-View.png" className="pic1"></img>
            <p className="head1"><b>Sony WF-C500  </b></p>
            <p className="head1"> ( Black )</p>
            <p className="price1"><del>₹8,990</del>&nbsp; ₹5,499</p>
           
        </div>
        <div className="second">
        <button className="heart" id="heart1" >❤</button>
            
            <img src="https://img-prd-pim.poorvika.com/cdn-cgi/image/width=150,height=150,quality=75/product/Fingers-Go-Hi-Pods.png" className="pic1"></img>
            <p className="head1"><b>Fingers Go-Hi Pods </b></p>
            <p className="head1"> ( Matte Black )</p>
            <p className="price1"><del>₹1,999</del>&nbsp; ₹990</p>
           
        </div>
        <div className="second">
        <button className="heart" id="heart1" >❤</button>
            <img src="https://img-prd-pim.poorvika.com/cdn-cgi/image/width=150,height=150,quality=75/product/boat-nirvana-ion-true-wireless-ivory-white-front-view.png" className="pic1"></img>
            <p className="head1"><b>Boat Nirvana Ion </b></p>
            <p className="head1"> ( Ivory White )</p>
            <p className="price1"><del>₹7,990</del>&nbsp; ₹2,999</p>
           
        </div>
      
        <div className="second">
        <button className="heart" id="heart1" >❤</button>
            <img src="https://img-prd-pim.poorvika.com/cdn-cgi/image/width=150,height=150,quality=75/product/jbl-tune-beam-true-wireless-black-front-view.png"  className="pic1"></img>
            <p className="head1"><b>JBL Tune Beam  </b></p>
            <p className="head1">  (  Black )</p>
            <p className="price1"><del>₹7,999</del>&nbsp; ₹7,499</p>
           
        </div>
        <div className="second">
        <button className="heart" id="heart1" >❤</button>
            <img src="https://img-prd-pim.poorvika.com/cdn-cgi/image/width=150,height=150,quality=75/product/sony-wf-c700n-truly-wireless-headphones-black-front-view.png" className="pic1"></img>
            <p className="head1"><b>Sony WF-C700N </b></p>
            <p className="head1">  ( Black )</p>
            <p className="price1"><del>₹12,999</del>&nbsp; ₹14,999</p>
           
        </div>
        
        <div className="second">
        <button className="heart" id="heart1" >❤</button>
            <img src="https://img-prd-pim.poorvika.com/cdn-cgi/image/width=150,height=150,quality=75/product/apple-airpods-pro-2nd-generation-true-wireless-white-Color.png" className="pic1"></img>
            <p className="head1"><b>Apple AirPods Pro 2nd Gen </b></p>
            <p className="head1"> ( White )</p>
            <p className="price1"><del>₹26,990</del>&nbsp; ₹21,499</p>
           
        </div>
        <div className="second">
        <button className="heart" id="heart1" >❤</button>
            <img src="https://img-prd-pim.poorvika.com/cdn-cgi/image/width=150,height=150,quality=75/product/tecno-ace-a3-single-earbuds-wirelees-black-front-view.png" className="pic1"></img>
            <p className="head1"><b>Tecno Ace A3</b></p>
            <p className="head1"> ( Black)</p>
            <p className="price1"><del>₹1,999</del>&nbsp; ₹299</p>
           
        </div>
        </div>
        </div>
       
        

    </div>
       
        

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

export default Message;