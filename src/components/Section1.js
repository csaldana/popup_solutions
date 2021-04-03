import React from "react";

const Section1 = () => {
    return (
        <section id="one" className="spotlight style1 bottom">
            <span className="image fit main"><img src="/assets/images/pic02.jpg" alt="" /></span>
            <div className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-4 col-12-medium">
                            <header>
                                <h2>Odio faucibus ipsum integer consequat</h2>
                                <p>Nascetur eu nibh vestibulum amet gravida nascetur praesent</p>
                            </header>
                        </div>
                        <div className="col-4 col-12-medium">
                            <p>Feugiat accumsan lorem eu ac lorem amet sed accumsan donec.
                            Blandit orci porttitor semper. Arcu phasellus tortor enim mi
                            nisi praesent dolor adipiscing. Integer mi sed nascetur cep aliquet
                            augue varius tempus lobortis porttitor accumsan consequat
                            adipiscing lorem dolor.</p>
                        </div>
                        <div className="col-4 col-12-medium">
                            <p>Morbi enim nascetur et placerat lorem sed iaculis neque ante
                            adipiscing adipiscing metus massa. Blandit orci porttitor semper.
                            Arcu phasellus tortor enim mi mi nisi praesent adipiscing. Integer
                            mi sed nascetur cep aliquet augue varius tempus. Feugiat lorem
                            ipsum dolor nullam.</p>
                        </div>
                    </div>
                </div>
            </div>
            <a href="#two" className="goto-next scrolly">Next</a>
        </section>
    );
}

export default Section1;