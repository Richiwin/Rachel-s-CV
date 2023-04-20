import "./App.css";
import Pic1 from "./assets/images/Pic1.jpeg";
import Pic2 from "./assets/images/Pic2.jpeg";
import Pic3 from "./assets/images/Pic3.jpeg";
import Pic4 from "./assets/images/Pic4.jpeg";
import Pic5 from "./assets/images/Pic5.jpeg";
import Pic6 from "./assets/images/Pic6.jpeg";

function App() {
	return (
		<div>
			<div className="center flex p-6">
				<img className="head-image" src={Pic2} />
			</div>
            <h4 className="heading center flex">IWEBUKE RACHEL ONYEAMACHI</h4>
            <h4 className="heading center flex">FrontEnd developer</h4>
			<div className="center flex around gap-4 overflow-auto mini-image-container p-6">
				<img className="mini-image" src={Pic1} />
				<img className="mini-image" src={Pic3} />
				<img className="mini-image" src={Pic4} />
				<img className="mini-image" src={Pic5} />
				<img className="mini-image" src={Pic6} />
			</div>
			<div className="about-container">
				<div className="about-right">
					Hi!👋🏽 <br />
					<br />
					My name is Iwebuke Rachel Onyeamachi, and I'm a Front End developer based in Nigeria.
					<br />
					<br /> I see myself as a passionate developer who loves coding and bringing design imaginations to life. I focus more on building products
					using JavaScript, specifically ReactJs .
					<br />
					<br /> During my free time, i play music, sleep and research on the internet .
					<br />
				</div>
			</div>

			<div className="work-container">
				<h1>Experience</h1>
				<ul>
					<li className="work-item">
						<h2>
							Software Developer at{" "}
							<span className="cursor-pointer" onClick={() => window.open("https://ivorypay.io", "_blank")}>
								Lapeez Roll
							</span>
						</h2>
						<h5>November 2021 - march 2023</h5>
						<p>
						   	Translated designs and wireframes into high-quality code and wrote application interface code via javascript and React + Vue
                           	Participated in project meetings ,
                           	Participated in requirement gathering for projects or products,
                           	Designed a page for reporting sales transactions, 
                           	Designed a form to capture user data 

						</p>
						<p>
							I build a responsive landing page
						</p>
						<p>
							here is my profile{" "}
							<span onClick={() => window.open("https://www.linkedin.com/in/rachel-iwebuke-1a6a49240")}>linkedIn</span>
						</p>
						
					</li>
					
				</ul>

			
				<ul>
					<li className="work-item">
						<h2>
						Accounting{" "}
							<span onClick={() => window.open("")}>Stalwart Medical Center</span>
						</h2>
						<h5>July 2020 - October 2021</h5>
						</li>
						</ul>


				<h1>Education</h1>
				<ul>
					<li className="work-item">
						<h2>Qualification: HND</h2>
						<h2>
							Accounting at{" "}
							<span onClick={() => window.open("")}>Auchi Polytechnic Auchi</span>
						</h2>
						<h5>January 2016 - November 2018</h5>
						<p>
						
							
						</p>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default App;
