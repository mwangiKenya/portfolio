
const myBio = {
    name: "Collins Mwangi",
    rolea: "Web developer",
    roleb: "Data analyst",
    home: "Nakuru Kenya",
    currentPlace: "Maseno district, Kisumu county"
};

function MyPic() {
    return(
        <>
            <div>
                <img src="about-removebg-preview.png"/>
            </div>
        </>
    );
}

function MyData() {
    return(
        <>
              <div>
                <div>
                    <h1> About me </h1>
                    <p>
                        Hi 👋, I’m {myBio.name}, from {myBio.home}, a passionate Web Developer 
                        and Data Analyst currently pursuing a Bachelor’s degree 
                        in Information Technology at Maseno University.
                    </p>
                </div>

                <div>
                    <h1> My journey </h1>
                    <p>
                        I started my tech journey with a curiosity about how 
                        websites and applications work. Over time, this curiosity 
                        turned into a strong passion for building responsive, user-friendly 
                        web applications and analyzing data to extract meaningful insights.
                    </p>
                </div>
              </div>
        </>
    );
}

function About() {
    return(
        <>
            <div className="my-home-holder-div">
                
                <MyPic/>
                <MyData/>
            </div>
        </>
    );
}

export default About;