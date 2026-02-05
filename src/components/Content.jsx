import Logo1 from "../assets/clients/first.svg?react";
import Logo2 from "../assets/clients/second.svg?react";
import Logo3 from "../assets/clients/third.svg?react";
import Logo4 from "../assets/clients/fourth.svg?react";
import Logo5 from "../assets/clients/fifth.svg?react";
import Logo6 from "../assets/clients/sixth.svg?react";
import Logo7 from "../assets/clients/seventh.svg?react";
import MembersIcon from "../assets/members-icon.svg?react";
import AssociationsIcon from "../assets/national -associations-icon.svg?react";
import GroupsIcon from "../assets/groups-icon.svg?react";
import ThreeYears from "../assets/three-years.svg?react";
import Members from "../assets/stats/members.svg?react";
import Clubs from "../assets/stats/clubs.svg?react";
import Bookings from "../assets/stats/bookings.svg?react";
import Credit from "../assets/stats/credit.svg?react";
import styles from "./style/Content.module.css";

function Content() {
  return (
    <>
      <section className={styles.clients}>
        <div className="container">
          <h2>Our Clients</h2>
          <p>We have been working with some Fortune 500+ clients</p>
          <div className="flex">
            <Logo1 />
            <Logo2 />
            <Logo3 />
            <Logo4 />
            <Logo5 />
            <Logo6 />
            <Logo7 />
          </div>
        </div>
      </section>
      <section className={styles.services}>
        <div className="container">
          <h2>
            Manage your entire community <br />
            in a single system
          </h2>
          <p className={styles.subText}>Who is Nextcent suitable for?</p>
          <div className={`${styles.cardsContainer} flex`}>
            <div className={styles.servicesCard}>
              <MembersIcon />
              <h3>
                Membership <br />
                Organisations
              </h3>
              <p className="mini">
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </div>
            <div className={styles.servicesCard}>
              <AssociationsIcon />
              <h3>
                National <br />
                Associations
              </h3>
              <p className="mini">
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </div>
            <div className={styles.servicesCard}>
              <GroupsIcon />
              <h3>
                Clubs And <br />
                Groups
              </h3>
              <p className="mini">
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.threeYears}`}>
        <div className="container flex">
          <ThreeYears />
          <div className={`${styles.text}`}>
            <h2>The unseen of spending three years at Pixelgrade</h2>
            <p className="mini">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
            </p>
            <button>Learn More</button>
          </div>
        </div>
      </section>
      <section className={`${styles.stats} silverBg`}>
        <div className="container flex">
          <div>
            <h2>
              Helping a local <br />
              <span>business reinvent itself </span>
            </h2>
            <p>We reached here with our hard work and dedication</p>
          </div>
          <div className={`${styles.numbers}`}>
            <div className="flex">
              <Members />
              <h3>
                2,245,341 <br />
                <p>Members</p>
              </h3>
            </div>
            <div className="flex">
                <Clubs />
              <h3>
                46,328 <br />
                <p>Clubs</p>
              </h3>
            </div>
            <div className="flex">
                <Bookings />
              <h3>
                828,867
                <br />
                <p>Event Bookings</p>
              </h3>
            </div>
            <div className="flex">
                <Credit />
              <h3>
                1,926,436
                <br />
                <p>Payments</p>
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Content;
