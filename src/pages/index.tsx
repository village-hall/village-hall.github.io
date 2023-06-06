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
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Tilton on the Hill Village Hall">
      <HomepageHeader />
      <main>
        <div className="hallmaster">
          <iframe src="https://v2.hallmaster.co.uk/Scheduler/View/11767?startRoom=19251&roomSelect=false" style={hallmasterStyle}></iframe>
        </div>
      </main>
    </Layout>
  );
}
