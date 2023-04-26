import React from "react";

function Home(){
    const banner_style={
        height:"auto"
    };
    return(
        <div className="container_12">
            <div className="grid_8 prefix_2">
                <div id="mi-slider" className="mi-slider">
                    {/*<a href="#" className="prev1"></a>*/}
                    <ul>
                        <li className=""><a href="#"><img src="images/fruit1.jpg" alt="" /></a></li>
                        <li><a href="#"><img src="images/fruit2.jpg" alt="" /></a></li>
                        <li><a href="#"><img src="images/fruit3.jpg" alt="" /></a></li>
                    </ul>
                    <ul>
                        <li className=""><a href="#"><img src="images/veg1.jpg" alt="" /></a></li>
                        <li><a href="#"><img src="images/veg2.jpg" alt="" /></a></li>
                        <li><a href="#"><img src="images/veg3.jpg" alt="" /></a></li>
                    </ul>
                    <ul>
                        <li className=""><a href="#"><img src="images/meat1.jpg" alt="" /></a></li>
                        <li><a href="#"><img src="images/meat2.jpg" alt="" /></a></li>
                        <li><a href="#"><img src="images/meat3.jpg" alt="" /></a></li>
                    </ul>
                    <ul>
                        <li className=""><a href="#"><img src="images/dier1.jpg" alt="" /></a></li>
                        <li><a href="#"><img src="images/dier2.jpg" alt="" /></a></li>
                        <li><a href="#"><img src="images/dier3.jpg" alt="" /></a></li>
                    </ul>
                    
                    <nav>
                        <a href="#">Fruits</a>
                        <a href="#">Vegetables</a>
                        <a href="#">Dairy</a>
                        <a href="#">Herbs</a>
                    </nav>
                    {/*<a href="#" className="next1"></a>*/}
                </div>
            </div>
            <div className="clear"></div>
            <div className="grid_8">
            <h3>Welcome to Organic Company</h3>
            <img src="images/page1_img1.jpg" alt="" className="img_inner fleft" />
            <div className="extra_wrapper">
                <p>Want to learn more about this freebie designed by TemplateMonster.com? Follow the <a href="http://blog.templatemonster.com/free-website-templates/">link</a></p>
                <p><a href="http://www.templatemonster.com/category/agriculture-website-templates/" rel="nofollow">Find more themes of this kind at the category of premium Agriculture Website Templates.</a></p>
            </div>
            <div className="clear"></div>
            Aliquam nibh ante, egestas id dictum a, commodo luctus libero. Praesent faucibus malesuada faucibus. Donecyl laoreet metus id laoreet malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetu orci sed nulla facilisis consequat. Curabitur vel lorem sit amet nulla ullamcorper fermentum. 
            <div className="grid_4 alpha">
                <div className="banner maxheight1x" style={banner_style}>
                <h3><a href="#">100% Eco &amp; <br /> Organic</a></h3>
                </div>
                <h3>Our Mission</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis erat mattis neque facilisis, sit amet ultriciesyt erat rutrum. Cras facilisis, nulla vel viverra auctor, leo ame magna sodales felis, quis malesuada.</p>
                <ul className="list">
                <li><a href="#">Duis massa elit, auctor non pellentesque vel.</a></li>
                <li><a href="#">Nullam eget dignissim nisi, aliquam feugiat nibh. </a></li>
                <li><a href="#">Ut nisi nibh, sagittis ut semper elementum.</a></li>
                <li><a href="#">Pellentesque a odiohasellus vitae libero vel.</a></li>
                <li><a href="#">Justo pretium dignissimteger semper in estgue.</a></li>
                <li><a href="#"> In laoreet lacus eros, vel pulvinar urna ultut.</a></li>
                </ul>
            </div>
            <div className="grid_4 omega">
                <div className="banner b1 maxheight1x" style={banner_style}>
                <h3><a href="#">Control of <br /> the Quality </a></h3>
                </div>
                <h3>What We Offer</h3>
                <p>Retrolom ipsum dolor sit met, consectetur ipiscing elit. In mollis erat mattis neque facilisis, sit amet ultriciesert erat rutrum. Bras facilisis, nulla vel viverra aucto ame magna sodales felis, quis  nibh odio. </p>
                <ul className="list">
                <li><a href="#">Setrolis assa elit, auctor non  reto lo. </a></li>
                <li><a href="#">Master lam eget dignissim nliam feugiat nibherty. </a></li>
                <li><a href="#">Do nisi nibh  ut semper ntumertolillente derto.</a></li>
                <li><a href="#">Sertloque a odiohasellus vitae libero velertlo fer.</a></li>
                <li><a href="#">Monrilo sto pretium dignissimerwtoli moloer. </a></li>
                <li><a href="#">Ontnteger semper in estgue destro.</a></li>
                </ul>
            </div>
            <div className="clear"></div>
            </div>
            <div className="grid_3 prefix_1">
            
            
                <ul id="carousel" className="elastislide-list">
                    <li><a href="#"><img src="images/page1_img2.jpg" alt="" /></a></li>
                    <li><a href="#"><img src="images/page1_img3.jpg" alt="" /></a></li>
                    <li><a href="#"><img src="images/page1_img4.jpg" alt="" /></a></li>
                    <li><a href="#"><img src="images/page1_img2.jpg" alt="" /></a></li>
                    <li><a href="#"><img src="images/page1_img3.jpg" alt="" /></a></li>
                    <li><a href="#"><img src="images/page1_img4.jpg" alt="" /></a></li>
                    <li><a href="#"><img src="images/page1_img2.jpg" alt="" /></a></li>
                    <li><a href="#"><img src="images/page1_img3.jpg" alt="" /></a></li>
                    <li><a href="#"><img src="images/page1_img4.jpg" alt="" /></a></li>
                </ul>
                
                <div className="car_div">
                    <div className="title">What People Say</div>
                    <ul id="carousel1" className="">
                        <li>“Lorem ipsum dolor sit amet, tetur adipiscing elit. In ollis erat matti neque facilisis, sit amet .”</li>
                        <li>"Retrolom ipsum dolor sit met, consectetur ipiscing elit. In mollis erat mattis neque."</li>
                        <li>"Aliquam nibh ante, egestas id dictum a, commodo luctus libero. Praesent faucibus."</li>
                    </ul>
                    <a href="#" className="prev1"></a><a href="#" className="next1"></a>
                </div>
            </div>
        </div>
    );
}

export default Home;