import Footer from "./Footer";

const myBio = {
        name: 'Collins Mwangi',
        rolea: 'Web developer',
        roleb: 'Data analyst',
        place: 'Kisumu Kenya'
    };

function Bio() {
    
    return(
        <>
            <div className="my-bio-div">
                <h1 className="my-name-point"> Hi, I am {myBio.name} </h1>
                <h1> <strong> {myBio.rolea} </strong>  and a
                      <strong> {myBio.roleb} </strong>  </h1>
                <p className="my-description-point">
                    I am an IT student at Maseno University, and I<br/> specialize in 
                    creating clean,  robust  and user friendly <br/> websites using mordern technologies, 
                    and data <br/> analysis  services to support decision making.
                </p>

                <button className="my-hire-button"> Hire me </button>
            </div>
        </>
    );
}

function MyPic() {
    return(
        <>
            
           <div className="my-web-pic-div my-name-point">
              <img src="collo-removebg-preview.png" className="my-pic"/>

              <h3> # @ {myBio.rolea} & {myBio.roleb} </h3>
            </div>
            
        </>
    );
}

function CallToAction() {
    return(
        <>
            <div className="my-name-point action-div">
                <h2> Transform your business today. </h2>
                <p>
                    Running any business? Take it to the next level of 
                    digital error and make it known online.
                </p>
                <p>
                    Contact me for website development, that will showcase your 
                    business to potential customers.
                </p>
            </div>
        </>
    );
}

function Home() {
    return(
        <>
            <div className="my-home-holder-div">
            <Bio/>
            <MyPic/>
            </div>
            <hr/>
            <CallToAction/>
            <Footer/>
        </>
    );
}

export default Home;