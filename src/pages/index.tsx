import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h3 className="hero__subtitle">{siteConfig.title}</h3>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  const hallmasterStyle = {
    width: "100%",
    height: "800px",
  };
  const introTextStyle = {
    padding: "2em",
  }
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Tilton on the Hill Village Hall">
      <HomepageHeader />
      <main>
        <div style={introTextStyle}>
          <p>
            Our village hall is set in lovely Leicestershire countryside and is located in the heart of the village with the church, local pub and village shop only a few minutes walk away.<br/><br/>
            Tilton on the Hill village hall is host to weekly events such as “Singing for Fun” and daily events like “Tiddlywinks pre-school”. Whether you are a villager or event organiser, you are assured of a hearty welcome.<br/><br/>
            The hall is available for hire to all and we can cater for events from birthday parties to weddings and everything in between. Please use the booking form below to start planning your event.
          </p>
        </div>
        <div className="hallmaster">
          <iframe src="https://v2.hallmaster.co.uk/Scheduler/View/11767?startRoom=19251&roomSelect=false" style={hallmasterStyle}></iframe>
        </div>
      </main>
    </Layout>
  );
}
