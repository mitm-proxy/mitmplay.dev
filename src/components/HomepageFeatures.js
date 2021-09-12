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
        Mitmplay was design as <i>Developer-Browser</i>: 
        <b>&nbsp;easy to use</b> on <b>modify, inject, logs</b> 
        <i>&nbsp;Browser traffic</i> and <b> do automation at the same time.</b>
      </>
    ),
  },
  {
    title: 'Developer needs',
    Svg: require('../../static/img/program.svg').default,
    description: (
      <>
        Convension to craft <b>rules</b>, <b>Tags</b> & it'll be auto-reload and <b>macros</b>.
        Feedback can be seen on Terminal, Console or Mitmplay Chrome-plugin.
      </>
    ),
  },
  {
    title: 'Playwright and Svelte',
    Svg: require('../../static/img/trade.svg').default,
    description: (
      <>
        Leverage <b>Playwright</b> as Intercept & Automation Engine. 
        <b>&nbsp;Svelte</b> as UI for Chrome Plugin, <i>Injected UI framework on Macros.</i> 
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
