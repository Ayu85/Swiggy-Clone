import { useState } from "react";
const AboutSection = ({ desc }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="border-slate-500 border-2">
      {isVisible === false ? (
        <button
          onClick={() => {
            setIsVisible(true);
          }}
        >
          show &#8964;
        </button>
      ) : (
        <button
          onClick={() => {
            setIsVisible(false);
          }}
        >
          hide &#129173;
        </button>
      )}

      {isVisible && <div>{desc}</div>}
    </div>
  );
};
function About() {
  return (
    <>
      <div className="about flex flex-col gap-10 justify-center items-center  mt-10">
        <img
          src="https://miro.medium.com/v2/resize:fit:1400/1*qvhMfaZBh8cHOuOJP2myTA.png"
          className="w-96 rounded-2xl"
        />
      </div>

      <AboutSection
        desc={`History
In 2011, Sriharsha Majety and Nandan Reddy designed an e-commerce website called Bundl to facilitate courier service and shipping within India.[7] Bundl was halted in 2014 and rebranded to enter the food delivery market.[8] At the time, the food delivery sector was in turmoil as several notable startups, such as Foodpanda (later acquired by Ola Cabs), TinyOwl (later acquired by Zomato) and Ola Cafe (later closed) were struggling.[7][8] Majety 
and Reddy approached Rahul Jaimini, formerly with Myntra, and founded Swiggy in August 2014.[9][7][8]
In January 2017, Swiggy started its cloud kitchen chain called "The Bowl Company".[10] In November 2017, Swiggy started a kitchen incubator business called Swiggy Access, opening a network of ready-to-occupy kitchens for its restaurant partners.[11] By 2019, over 1,000 Swiggy Access kitchens were operational, according to a TechCrunch report.[12]`}
      />

      <AboutSection
        desc={`Funding
        In 2015, Swiggy received a $2 million investment from Accel and SAIF Partners, along with additional investment from Norwest Venture Partners.[8] The following year,
         it raised $15 million from both previous and new investors, including Bessemer Venture Partners and Harmony Partners  
        In 2017, Naspers led an $80 million funding round into Swiggy.[8] By September 2018, Swiggy was valued at around $3.3 billion, and in April 2020, Swiggy was valued at around $3.6 billion.[27]
        In July 2021, Swiggy raised $1.25 billion from SoftBank, Prosus and other investors, at a valuation of $5.5 billion.[28]
        In January 2022, Swiggy's valuation rose to $10.7 billion after a $700-million fundraise led by US asset manager Invesco.[29]`}
      />
    </>
  );
}
export default About;
