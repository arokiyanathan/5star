import React from "react";

function BottomBlock(){

    return(
        <div className="bottom_block">
            <div className="container_12">
            <div className="grid_10 prefix_1">
                <div className="column"><a href="#">Useful Info</a><br /><a href="#">Our Staff</a></div>
                <div className="column"><a href="#">News &amp; Events
        </a><br /><a href="#">Our Guarantee</a></div>
                <div className="column"><a href="#">FAQs
        </a><br /><a href="#">Contacts</a></div>
                <div className="clear"></div>
                <div className="socials">
                    <a href="#"><i className=" icon-facebook"></i></a>
                    <a href="#"><i  className="icon-twitter"></i></a>
                    <a href="#"><i className=" icon-google-plus "></i></a>
                    <a href="#"><i className=" icon-pinterest"></i></a>
                </div>
                
            </div>
            </div>
        </div>
    );
}

export default BottomBlock;