import React from "react";

function Footer(){
    var copyright_year=(new Date).getFullYear();
    return(
        <footer>    
            <div className="container_12">
                <div className="grid_12">
                    <div className="copy">
                        Copyright © <span id="copyright-year">{copyright_year}</span>,  5 Star Fruit and Veg. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;