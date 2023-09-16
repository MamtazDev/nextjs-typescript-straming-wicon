import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import SectionHeader from "../Atomics/SectionHeader/SectionHeader";
import VideoCard from "../Atomics/VideoCard/VideoCard";
import v4 from "@/assets/img/v4.png"

export default function VideoBlock() {
	return (
		<>
			<div className="video-block section-padding">
				<Row>
					<Col className="mb-2" md={12} >
						<SectionHeader heading="Featured Videos" />
					</Col>

					<Col xl={3} sm={6} className="mb-3">
						<VideoCard
							imgSrc={v4.src}
							time="3:50"
							videoTitle="There are many variations of passages of Lorem"
							videoCategory="Education"
							views="1.8M"
							timeAgo="11 months"
							verified
						/>
					</Col>

					<Col xl={3} sm={6} className="mb-3">
						<VideoCard
							imgSrc={v4.src}
							time="3:60"
							videoTitle="lorem ipsum lorem ipsum fine"
							videoCategory="Education"
							views="1.8M"
							timeAgo="11 months"
							verified
						/>
					</Col>

					<Col xl={3} sm={6} className="mb-3">
						<VideoCard
							imgSrc={v4.src}
							time="3:40"
							videoTitle="Website development crush course"
							videoCategory="Education"
							views="1.8M"
							timeAgo="11 months"
						/>
					</Col>

					<Col xl={3} sm={6} className="mb-3">
						<VideoCard
							imgSrc={v4.src}
							time="3:80"
							videoTitle="We shall over come some days"
							videoCategory="Education"
							views="1.8M"
							timeAgo="11 months"
							verified
						/>
					</Col>

					<Col xl={3} sm={6} className="mb-3">
						<VideoCard
							imgSrc={v4.src}
							time="3:90"
							videoTitle="Ah deep in my heart, I do believe"
							videoCategory="Education"
							views="1.8M"
							timeAgo="11 months"
						/>
					</Col>

					<Col xl={3} sm={6} className="mb-3">
						<VideoCard
							imgSrc={v4.src}
							time="4:50"
							videoTitle="No mans land movie reviews"
							videoCategory="Education"
							views="1.8M"
							timeAgo="11 months"
							verified
						/>
					</Col>

					<Col xl={3} sm={6} className="mb-3">
						<VideoCard
							imgSrc={v4.src}
							time="4:60"
							videoTitle="Javascript Crush course in One videos"
							videoCategory="Education"
							views="1.8M"
							timeAgo="11 months"
							verified
						/>
					</Col>

					<Col xl={3} sm={6} className="mb-3">
						<VideoCard
							imgSrc={v4.src}
							time="4:80"
							videoTitle="React and nextjs crus course in one video"
							videoCategory="Education"
							views="1.8M"
							timeAgo="11 months"
							verified
						/>
					</Col>
				</Row>
			</div>
		</>
	);
}
