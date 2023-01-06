import './Style/Style.css';

export default function Main() {
    return (
        <div className="all width">
            <div className="nav">
                    <div className="flex">
                        <div className="innerLogo">
                            <img src="../leftLogo.svg" alt="" />
                        </div>
                        <div className="logo">
                            <img src="./rightLogo.svg" alt="" />
                        </div>
                    </div>
                    <ul className="font14">
                        <li>PORTFOLIO</li>
                        <li>BLOG</li>
                        <li>CV</li>
                        <li>STORE</li>
                        <li>FREELANCE</li>
                        <li>ABOUT ME</li>
                        <li> CONTACT</li>
                    </ul>
                </div>
                <div className="flex">
                    <div className="left">
                        <h1 className="blog font52">Blog Posts</h1>
                        <h1 className="ithink font52">I think so, this is it</h1>
                        <p>
                        Design begins after I begin to think about how to present an experience most successfully, whether a button I put in can solve a problem. The only point in design is not ui design, if the user does not have a good experience at the end of the product, the design will be considered unsuccessful in my opinion.
                        </p>
                        <div className="three">
                            <img src="../Twitter.svg" alt="" />
                            <img src="../Link.svg" alt="" />
                            <img src="../med.svg" alt="" />
                        </div>
                    </div>
                    <div className="right">
                        <img src="../right.svg" alt="" />
                    </div>
                </div>
            </div>
    )
};