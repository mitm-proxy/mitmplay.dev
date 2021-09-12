import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

// Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
// ahead and move your docs into the <code>docs</code> directory.
// To craft rule of interception, to active/deactive tags rule, CLI arguments 
const FeatureList = [
  {
    title: 'Developer Experience',
    Svg: require('../../static/img/browser.svg').default,
    description: (
      <>
        Mitmplay was design to be Developer Browser: 
        <b>&nbsp;easy to use</b> on modify, inject, logs 
        Browser traffic and <b> do automation at the same time.</b>
      </>
    ),
  },
  {
    title: 'Focus on Developer needs',
    Svg: require('../../static/img/program.svg').default,
    description: (
      <>
        Easy craft Interception rules and rules will be auto-reload. 
        Feedback can be seen on the Terminal, DevTools Console / Mitmplay Plugin.
      </>
    ),
  },
  {
    title: 'Playwright and Svelte',
    Svg: require('../../static/img/trade.svg').default,
    description: (
      <>
        Leverage <b>Playwright</b> as Intercept & Automation Engine. 
        <b>Svelte</b> to build Chrome Plugin, internal macros & <i>Injected UI in user defined macros.</i> 
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
