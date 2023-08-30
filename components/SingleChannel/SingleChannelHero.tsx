import channelBanner from "@/assets/img/channel-banner.png"
import s2 from "@/assets/img/s2.png"

export default function SingleChannelHero() {
	return (
		<>
			<div className="single-channel-image">
				<img
					className="img-fluid"
					alt=""
					src={channelBanner.src}
				/>
				<div className="channel-profile">
					<img
						className="channel-profile-img"
						alt=""
						src={s2.src}
					/>
					<div className="social hidden-xs">
						Social &nbsp;
						<a className="fb mr-1" href="#">
							Facebook
						</a>
						<a className="tw mr-1" href="#">
							Twitter
						</a>
						<a className="gp" href="#">
							Google
						</a>
					</div>
				</div>
			</div>
		</>
	);
}
