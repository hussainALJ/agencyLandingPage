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
import HowTo from "../assets/how-to.svg?react";
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
      <section className={`${styles.assay}`}>
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
      <section className={`${styles.assay}`}>
        <div className="container flex">
          <HowTo />
          <div className={`${styles.text}`}>
            <h2>How to design your site footer like we did</h2>
            <p className="mini">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices
              mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
              dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
              ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
              commodo faucibus efficitur quis massa. Praesent felis est, finibus
              et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
              ipsum id gravida.
            </p>
            <button>Learn More</button>
          </div>
        </div>
      </section>
      <section className={`${styles.assay} silverBg`}>
        <div className="container flex">
          <img
            src="/tesla.jpg"
            alt=""
            width={"326px"}
            height={"326px"}
            style={{ objectFit: "cover" }}
          />
          <div className={`${styles.text}`}>
            <p>
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </p>
            <span>Tim Smith</span>
            <p>British Dragon Boat Racing Association</p>
            <div className="flex">
              <Logo1 />
              <Logo2 />
              <Logo3 />
              <Logo4 />
              <Logo5 />
              <Logo6 />
              <a href="">
                <span>Meet all customers</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 16L19.2929 12.7071C19.6834 12.3166 19.6834 11.6834 19.2929 11.2929L16 8M19 12L5 12"
                    stroke="#4CAF4F"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.services}>
        <div className="container">
          <h2>Caring is the new marketing</h2>
          <p className={styles.subText}>
            The Nexcent blog is the best place to read about the latest
            membership insights, trends and more. See who's joining the
            community, read about how our community are increasing their
            membership income and lot's more.​
          </p>
          <div className={`${styles.cardsContainer} flex`}>
            <div>
              <img
                src="/img-1.jpg"
                alt=""
                width={"368px"}
                height={"286px"}
                style={{ objectFit: "cover" }}
              />
              <div className={`${styles.titleCard} silverBg`}>
                <h4>Creating Streamlined Safeguarding Processes with OneRen</h4>
                <a href="">
                  <span>Readmore</span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 16L19.2929 12.7071C19.6834 12.3166 19.6834 11.6834 19.2929 11.2929L16 8M19 12L5 12"
                      stroke="#4CAF4F"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <img
                src="/img-2.jpg"
                alt=""
                width={"368px"}
                height={"286px"}
                style={{ objectFit: "cover" }}
              />
              <div className={`${styles.titleCard} silverBg`}>
                <h4>
                  What are your safeguarding responsibilities and how can you
                  manage them?
                </h4>
                <a href="">
                  <span>Readmore</span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 16L19.2929 12.7071C19.6834 12.3166 19.6834 11.6834 19.2929 11.2929L16 8M19 12L5 12"
                      stroke="#4CAF4F"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <img
                src="/img-3.jpg"
                alt=""
                width={"368px"}
                height={"286px"}
                style={{ objectFit: "cover" }}
              />
              <div className={`${styles.titleCard} silverBg`}>
                <h4>Revamping the Membership Model with Triathlon Australia</h4>
                <a href="">
                  <span>Readmore</span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 16L19.2929 12.7071C19.6834 12.3166 19.6834 11.6834 19.2929 11.2929L16 8M19 12L5 12"
                      stroke="#4CAF4F"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.getDemo} silverBg flex`}>
        <h1>Pellentesque suscipit fringilla libero eu.</h1>
        <button className="flex">
          Get a Demo{" "}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.2503 11.0001L13.7201 8.53039C14.013 8.23749 14.013 7.7626 13.7201 7.4697L11.2503 4.99997M13.5004 8.00004L2.50012 8.00004"
              stroke="white"
              stroke-width="1.1"
              stroke-linecap="round"
            />
          </svg>
        </button>
      </section>
    </>
  );
}

export default Content;
