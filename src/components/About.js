import React from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });

  let myStyle = {
    color: props.mode === 'dark'?'white':'#042743',
    backgroundColor: props.mode === 'dark'?'rgb(36 74 104)':'white',
    // border:'2px solid',
    // borderColor:props.mode === 'dark'?'white':'#042743'
  }
 
  return (
    <div className="container">
      <h2 className="my-2" style={{color: props.mode === 'dark'?'white':'#042743'}}>About-Us</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze Your Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              If you receive huge amounts of unstructured data in the form of
              text (emails, social media conversations, chats), you are probably
              aware of the challenges that come with analyzing this
              data.Manually processing and organizing text data takes time, it
              is tedious, inaccurate, and it can be expensive if you need to
              hire extra staff to sort through text.learn more about what text
              analysis is, how to perform text analysis using AI tools, and why
              it is more important than ever to automatically analyze your text
              in real time
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Your phone comes with a built-in texting app, but you might not
              always want to use it. After all, SMS texting uses your wireless
              plan, which might cost you money — especially when roaming
              internationally. There are a slew of free texting apps that can
              use WiFi instead or have other advantages beyond the standard
              texting app on your phone. Here are seven of the best options that
              are available for both iPhone and Android.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              A website is compatibility plays a huge role in the success of an
              e-commerce business. The reason being that incompatibility with
              certain browsers limits the audience of that website. This leads
              to the limited traffic on that particular website which can bring
              down its conversion. This means that browser compatibility is
              among the prime aspects to cater to while a website is in the
              development phase.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
