import './Style/style.css'

export default function product(){
    return(
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
            <div className="midZurag">
                <img src="../ux.png" alt="" />
            </div>
            <div className="mid flex width">
                <h1 className="firstH">
                    What does a product designer (UX/UI) do?
                </h1>
            </div>
            <div>
                <p>
                Just like graphic design and web development, UX design trends come and go for a reason. UX is 
                all about developing a better digital world for humanity. It’s a field that requires innovation, but 
                that is constantly evolving. Regularly following UX design blogs can help you keep on top of 
                changes in the industry, as well as develop your UX skills.
                <br/>
                Additionally, many UX design blogs expose you to case studies detailing an app or web’s 
                successful development, along with how its usability was improved. Reading about these types of 
                cases can help give you ideas. In this sense, UX design blogs can help provide an indication for the 
                kinds of directions your future projects should take. 
                <br/>
                Additionally, many UX design blogs expose you to case studies detailing an app or web’s 
                successful development, along with how its usability was improved. Reading about these types of 
                cases can help give you ideas. In this sense, UX design blogs can help provide an indication for the 
                kinds of directions your future projects should take.
                </p>
            </div>
        </div>
    )
}