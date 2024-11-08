import Link from 'next/link';
import Image from 'next/image';

import FB from '../../public/facebook.svg';
import twtr from '../../public/twitter.svg';
import ln from '../../public/linkedin.svg';

export default function Footer() {
  const footerSections = [
    {
      title: 'Learn',
      links: [
        { text: 'Sexual Health', href: '#' },
        { text: 'Weight loss', href: '#' },
        { text: 'Hair Loss', href: '#' },
        { text: 'Mental Health', href: '#' },
      ],
    },
    {
      title: 'Popular',
      links: [
        { text: 'Sildenafil', href: '#' },
        { text: 'Generic for Viagra®', href: '#' },
        { text: 'Cialis®', href: '#' },
        { text: 'Tadalafil®', href: '#' },
        { text: 'Generic for Cialis®', href: '#' },
        { text: 'Minoxidil Solution', href: '#' },
        { text: 'Finasteride Pills', href: '#' },
        { text: 'Topical Finasteride', href: '#' },
        { text: 'Sertraline for PE', href: '#' },
        { text: 'Sertraline', href: '#' },
        { text: 'Generic for Zoloft®', href: '#' },
        { text: 'Escitalopram', href: '#' },
        { text: 'Generic for Lexapro®', href: '#' },
      ],
    },
    {
      title: 'Hims',
      links: [
        { text: 'About Us', href: '#' },
        { text: 'Good Health', href: '#' },
        { text: 'How It Works', href: '#' },
        { text: 'Medical Experts', href: '#' },
        { text: 'Editorial Standards', href: '#' },
        { text: 'FAQs', href: '#' },
        { text: 'Advocacy', href: '#' },
        { text: 'Investors', href: '#' },
      ],
    },
    {
      title: 'Careers',
      links: [
        { text: 'Professionals', href: '#' },
        { text: 'Providers', href: '#' },
        { text: 'How It Works', href: '#' },
      ],
    },
    {
      title: 'Connect',
      links: [
        { text: 'Customer Help Center', href: '#' },
        { text: 'Press Center', href: '#' },
      ],
    },
  ];

  const footerLinks = [
    { text: 'Terms & conditions', href: '#' },
    { text: 'Privacy Policy', href: '#' },
    { text: 'Sitemap', href: '#' },
    { text: 'Telehealth Consent & Open Payments', href: '#' },
    { text: 'Consumer Health Data Privacy Policy', href: '#' },
    { text: 'Your privacy choices', href: '#' },
  ];

  const socialLinks = [
    { img: twtr, href: '#' },
    { img: FB, href: '#' },
    { img: ln, href: '#' },
  ];

  return (
    <footer>
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-left">
            <h1>For Men</h1>
          </div>
          <div className="links-wrapper">
            {footerSections.map((section, index) => (
              <div key={index}>
                <h5>{section.title}</h5>
                <ul>
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link className="footer-link" href={link.href}>
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="x-divider"></div>
        <div className="bottom-links-footer">
          <ul className="footer-extra-links">
            {footerLinks.map((link, index) => (
              <li key={index}>
                <Link className="footer-link" href={link.href}>
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="social-links">
            {socialLinks.map((link, index) => (
              <li key={index}>
                <Link className="footer-link" href={link.href}>
                  <Image src={link.img} alt="Social icon" width={24} height={24} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <p>&copy; 2024 Hims & Hers Health, Inc. All rights reserved. HIMS, HERS, H, and HIMS & HERS are trademarks of Hims, Inc.</p>
      </div>
    </footer>
  );
}