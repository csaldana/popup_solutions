import React from "react";

const Banner = () => {
    return (
        <section id="banner">
            <div className="content">
                <header>
                    <h2>The future has landed</h2>
                    <p>And there are no hoverboards or flying cars.<br />
                    Just apps. Lots of mother flipping apps.</p>
                </header>
                <span className="image"><img src="/assets/images/pic01.jpg" alt="" /></span>
            </div>
            <a href="#one" className="goto-next scrolly">Next</a>
        </section>
    );
}

export default Banner;