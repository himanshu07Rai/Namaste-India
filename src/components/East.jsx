import React from "react";
import "./styles.css";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { north } from "./Database";
import Carousel from "./Carousel";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import ArrowDownwardRoundedIcon from "@material-ui/icons/ArrowDownwardRounded";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";
import ArrowUpwardRoundedIcon from "@material-ui/icons/ArrowUpwardRounded";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	scroll-snap-type: y mandatory;
	overflow-y: scroll;
	height: 100vh;
`;

const Block = styled.div`
	scroll-snap-align: start;
	background-size: cover;
	position: relative;
`;

const Item = styled.div`
	scroll-snap-align: start;
	height: 100vh;
	width: 100%;
	background-image: url(${(p) => p.s});
	background-color: #eac;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`;

const About = styled.div`
	height: 100%;
	position: absolute;
	top: 70%;
	left: 20px;
	color: #fff;
	font-size: 100px;
	padding: 20px;
	color: rgb(255, 255, 255);
	font-weight: 900;

	@keyframes textShow {
		from {
			opacity: 0;
			left: -100%;
		}
		to {
			opacity: 1;
			left: 0%;
		}
	}
	animation-name: textShow;
	animation-duration: 1s;
`;

const pageVariant = {
	initial: {
		opacity: 0,
		x: "-100%",
		scale: 1.2,
	},
	in: {
		opacity: 1,
		x: "0",
		scale: 1,
	},
	out: {
		opacity: 0,
		x: "-100%",
		scale: 1.2,
	},
};

const pageTransition = {
	type: "tween",
	ease: "easeOut",
	duration: 0.5,
};

const Place = (props) => {
	const { s, d, city, att } = props;
	console.log(props);
	return (
		<Block>
			<Item s={s}>
                <About>{city}</About>
                <Carousel cardData={att} />
			</Item>
		</Block>
	);
};

console.log(north);
const East = () => {
	return (
		<>
			<NavLink className="arrow right" to="/" exact>
				<ArrowBackRoundedIcon />
			</NavLink>
			<motion.div
				style={{ position: "absolute" }}
				variants={pageVariant}
				transition={pageTransition}
				initial="initial"
				animate="in"
				exit="out"
				className="bg east"
				id="East"
			>
				<Container>
					{north.map((city, index) => (
						<Place
							key={index}
							city={city.place}
							s={city.dp}
							d={city.desc}
							att={city.attractions}
						/>
					))}
				</Container>
			</motion.div>
		</>
	);
};

export default East;
