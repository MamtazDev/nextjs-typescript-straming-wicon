// import ListChannel from "./ListChannel";

// const ChannelSidebarList = () => {
// 	return (
// 		<>
// 			<li className="nav-item channel-sidebar-list">
// 				<h6>SUBSCRIPTIONS</h6>
// 				<ul>
// 					<ListChannel
// 						href="/subscriptions"
// 						imgSrc="/img/s1.png"
// 						label="Your Life"
// 					/>

// 					<ListChannel
// 						href="/subscriptions"
// 						imgSrc="/img/s2.png"
// 						label="Unboxing"
// 						labelBadge="warning"
// 						badgeValue="2"
// 					/>
// 					<ListChannel
// 						href="/subscriptions"
// 						imgSrc="/img/s3.png"
// 						label="Product / Service"
// 					/>
// 					<ListChannel
// 						href="/subscriptions"
// 						imgSrc="/img/s4.png"
// 						label="Gaming"
// 					/>
// 				</ul>
// 			</li>
// 		</>
// 	);
// };

// export default ChannelSidebarList;



import React from "react";
import ListChannel from "./ListChannel";
import s1 from "@/assets/img/s1.png"
import s2 from "@/assets/img/s2.png"
import s3 from "@/assets/img/s3.png"
import s4 from "@/assets/img/s4.png"

const ChannelSidebarList: React.FC = () => {
  return (
    <li className="nav-item channel-sidebar-list">
      <h6>SUBSCRIPTIONS</h6>
      <ul>
        <ListChannel
          href="/subscriptions"
          imgSrc={s1.src}
          label="Your Life"
        />

        <ListChannel
          href="/subscriptions"
          imgSrc={s2.src}
          label="Unboxing"
          labelBadge="warning"
          badgeValue="2"
        />
        <ListChannel
          href="/subscriptions"
          imgSrc={s3.src}
          label="Product / Service"
        />
        <ListChannel
          href="/subscriptions"
          imgSrc={s4.src}
          label="Gaming"
        />
      </ul>
    </li>
  );
};

export default ChannelSidebarList;


