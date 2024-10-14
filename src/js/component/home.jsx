import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";

const cardsData = [
	{
	  title: "Card Title 1",
	  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nulla officia sapiente nihil, possimus praesentium.",
	  buttonLabel: "Find Out More!",
	},
	{
	  title: "Card Title 2",
	  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nulla officia sapiente nihil, possimus praesentium.",
	  buttonLabel: "Find Out More!",
	},
	{
	  title: "Card Title 3",
	  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nulla officia sapiente nihil, possimus praesentium.",
	  buttonLabel: "Find Out More!",
	},
	{
	  title: "Card Title 4",
	  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nulla officia sapiente nihil, possimus praesentium.",
	  buttonLabel: "Find Out More!",
	},
  ];

const Home = () => {
	return (
		<div className="container-fluid m-0 p-0">
			<Navbar 
				title={"Start Bootstrap"}
				firstNavbarItem={"Home"}
				secondNavbarItem={"About"}
				thirdNavbarItem={"Services"}
				fourthNavbarItem={"Contact"}
				/>
			<div className="d-flex flex-column justify-content-center align-items-center min-vh-100 m-2 m-lg-5">
				<Jumbotron
					title={"A Warm Welcome!"}
					description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum commodi enim sapiente non quibusdam dolorem dolore eius ab similique possimus deserunt rerum, deleniti ipsam quos consequatur officiis, maxime quia nisi."}
					buttonLabel={"Call to action!"}
				/>
				<div className="row">
						{cardsData.map((card, index) => (
							<div className="col-12 col-lg-3 d-grid gap-3 d-flex flex-row">
								<Card 
									key={index}
									cardTitle={card.title}
									cardDescription={card.description}
									cardButtonLabel={card.buttonLabel}	
								/>
							</div>
						))}
				</div>	
			</div>
		</div>
	);
};

export default Home;
