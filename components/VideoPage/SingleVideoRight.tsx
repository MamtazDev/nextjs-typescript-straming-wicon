// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

import VideoCardList from "./VideoCardList";
import SectionHeader from "../Atomics/SectionHeader/SectionHeader";
import { Col, Row } from "react-bootstrap";
import v1 from "@/assets/img/v1.png"

const SingleVideoRight = () => {
	return (
		<>
			<div className="single-video-right">
				<Row>
					<Col md={12}>
						<AdBlock />
						<SectionHeader heading="Up Next" />
					</Col>
					<Col md={12}>
						<VideoCardList
							imgSrc={v1.src}
							time="3:50"
							videoTitle="Here are many variati of passages of Lorem"
							views="1.8M"
							timeAgo="11 Months"
							videoCategory="Education"
							verified
						/>
						<VideoCardList
							imgSrc={v1.src}
							time="3:50"
							videoTitle="Duis aute irure dolor in reprehenderit in."
							views="1.8M"
							timeAgo="11 Months"
							videoCategory="Education"
							verified
						/>
						<VideoCardList
							imgSrc={v1.src}
							time="3:50"
							videoTitle="Culpa qui officia deserunt mollit anim"
							views="1.8M"
							timeAgo="11 Months"
							videoCategory="Education"
						/>
						<VideoCardList
							imgSrc={v1.src}
							time="3:50"
							videoTitle="Deserunt mollit anim id est laborum."
							views="1.8M"
							timeAgo="11 Months"
							videoCategory="Education"
							verified
						/>
						<VideoCardList
							imgSrc={v1.src}
							time="3:50"
							videoTitle="Exercitation ullamco laboris nisi ut."
							views="1.8M"
							timeAgo="11 Months"
							videoCategory="Education"
							verified
						/>
						<VideoCardList
							imgSrc={v1.src}
							time="3:50"
							videoTitle="There are many variations of passages of Lorem"
							views="1.8M"
							timeAgo="11 Months"
							videoCategory="Education"
						/>
						<AdBlock />
						<VideoCardList
							imgSrc={v1.src}
							time="3:50"
							videoTitle="Exercitation ullamco laboris nisi ut."
							views="1.8M"
							timeAgo="11 Months"
							videoCategory="Education"
							verified
						/>
						<VideoCardList
							imgSrc={v1.src}
							time="3:50"
							videoTitle="There are many variations of passages of Lorem"
							views="1.8M"
							timeAgo="11 Months"
							videoCategory="Education"
							verified
						/>
					</Col>
				</Row>
			</div>
		</>
	);
};

function AdBlock() {
	return (
		<>
			<div className="adblock">
				<div className="img">
					Google AdSense
					<br />
					336 x 280
				</div>
			</div>
		</>
	);
}

export default SingleVideoRight;
export { AdBlock };
