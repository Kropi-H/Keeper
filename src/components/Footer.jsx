import React from "react";

function Footer(){

    const date = new Date();
    const currentYear = date.getFullYear();

    return (
        <div className="footer">
            <p>
            Copyright ⓒ {currentYear}
            </p>
        </div>
    )
}

export default Footer;