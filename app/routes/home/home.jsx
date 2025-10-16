import ifundImg from '~/assets/ifund.png';
import aurpayImg from '~/assets/aurpay.png';
import aioImg from '~/assets/aio.png';
import ccImg from '~/assets/cc.png';
import bcrImg from '~/assets/bcr.png';
import hashtechImg from '~/assets/hashtech.png';
import saasImg from '~/assets/saas.png';
import cyberImg from '~/assets/cyber.png';
import smileFastImg from '~/assets/smile_fast.png';
import discordbotImg from '~/assets/discordbot.png';
import scrapingImg from '~/assets/scraping.png';
import cryptoImg from '~/assets/crypto.png';
import pdfImg from '~/assets/pdf.png';
import aiMeetingImg from '~/assets/AI-meeting.png';
import mbImg from '~/assets/mb.png';
import ecommerceImg from '~/assets/e-commecrces.png';
import networktoolImg from '~/assets/networktool.png';
import profilePlaceholder from '~/assets/laptop-holder.png';
import fallbackImg from '~/assets/profile.jpg';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { json } from '@remix-run/node';
import { Intro } from './intro';
import { TechStack } from './tech-stack';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState, createRef } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

// Add a simple loader to fix hydration mismatch
export const loader = async ({ request }) => {
  return json({});
};

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Full Stack Developer',
    description: `Portfolio of ${config.name} — a developer born and raised in the UAE with a strong focus on backend systems, automation, and blockchain projects. Passionate about cars, coding, snooker, and a good beef burger.`,
  });
  
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const details = useRef();

  const projects = [
    {
      title: 'IFund',
      description:
        'Receivable discounting platform to securely upload, verify, and manage financial documents.',
      buttonLink: 'https://ifundfactoring.com/',
      image: ifundImg,
    },
    {
      title: 'Aurpay',
      description:
        'A non-custodial crypto payment gateway for businesses. It lets merchants accept Bitcoin, Ethereum, stablecoins, and Lightning with low fees, real-time payouts, and easy integrations like Shopify and WooCommerce.',
      buttonLink: 'https://aurpay.net/',
      image: aurpayImg,
    },
    {
      title: 'All-in-One (AIO)',
      description:
        'Blockchain-powered crypto payment gateway consolidating payments into a single address.',
      buttonLink: 'https://allinone.cash/',
      image: aioImg,
    },
    {
      title: 'Crypto Card',
      description:
        'Create and recharge virtual crypto cards with secure wallet integrations.',
      buttonLink: 'https://crypto-card.store/',
      image: ccImg,
    },
    {
      title: 'BCR Ltd. UK',
      description:
        'BCR Ltd. UK is the top 3 supplier of construction Profiles in Ajman, UAE.',
      buttonLink: 'https://www.bcrprofiles.com/',
      image: bcrImg,
    },
    {
      title: 'Hash Tech',
      description: 'Professional web presence for a technology services provider.',
      buttonLink: 'https://hashtechno.com/',
      image: hashtechImg,
    },
    {
      title: 'EvocaData (SaaS)',
      description:
        'SaaS lead marketplace for managing and analyzing business data.',
      buttonLink: 'https://app.avocadata.com/',
      image: saasImg,
    },
    {
      title: 'Cyber Arena',
      description: 'Esports and gaming platform engaging players and communities.',
      buttonLink: 'https://cyber-arena.co/',
      image: cyberImg,
    },
    {
      title: 'SmileFast – CMS',
      description:
        'Custom CMS for SmileFast to manage content and services.',
      buttonLink: 'https://smilefast.com/',
      image: smileFastImg,
    },
    {
      title: 'Miami Bikes – CRM',
      description:
        'Tailored CRM for bike retail and wholesale operations.',
      buttonLink: 'http://miamibikes.onlinecrmpro.com/login.php',
      image: mbImg,
    },
    {
      title: 'Discord Bot',
      description:
        'Automated moderation, custom commands, and real-time crypto price tracking.',
      buttonLink: '/contact',
      image: discordbotImg,
    },
    {
      title: 'Web Scraping & Automation',
      description:
        'Scrapers for e-commerce data and automation of repetitive workflows.',
      buttonLink: '/contact',
      image: scrapingImg,
    },
    {
      title: 'Crypto Price Tracker',
      description:
        'Real-time crypto price tracking with alerts on volatility.',
      buttonLink: '/contact',
      image: cryptoImg,
    },
    {
      title: 'PDF & Excel Automation',
      description:
        'Automated creation and formatting for business reporting.',
      buttonLink: '/contact',
      image: pdfImg,
    },
    {
      title: 'AI Meeting Assistant',
      description:
        'Transcribes meetings, translates languages, and generates minutes.',
      buttonLink: '/contact',
      image: aiMeetingImg,
    },
    {
      title: 'E-commerce Automation Bot',
      description:
        'Monitors stock and prices, notifies users of best deals.',
      buttonLink: '/contact',
      image: ecommerceImg,
    },
    {
      title: 'Network Monitoring Tool',
      description:
        'Tracks servers and APIs, alerts on downtime or latency via email/Telegram.',
      buttonLink: '/contact',
      image: networktoolImg,
    },
  ];

  const projectRefs = useRef(projects.map(() => createRef()));

  useEffect(() => {
    const sections = [intro, ...projectRefs.current, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <TechStack />
      <div className={styles.projectsSection}>
  <Heading
    as="h2"
    level={3}
    className={styles.projectsHeading}
    style={{ color: '#fff' }}
  >
    Projects
  </Heading>
</div>
      {projects.map((project, i) => {
        const isEven = (i + 1) % 2 === 0;
        const buttonText = project.buttonLink.startsWith('/')
          ? 'Contact'
          : 'Visit website';
        return (
          <ProjectSummary
            key={project.title}
            id={`project-${i + 1}`}
            alternate={isEven}
            sectionRef={projectRefs.current[i]}
            visible={visibleSections.includes(projectRefs.current[i].current)}
            index={i + 1}
            title={project.title}
            description={project.description}
            buttonText={buttonText}
            buttonLink={project.buttonLink}
            model={{
              type: 'laptop',
              alt: project.title,
              textures: [
                {
                  srcSet: `${project.image} 1280w, ${project.image} 2560w`,
                  placeholder: profilePlaceholder,
                },
              ],
            }}
          />
        );
      })}
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
