export type Testimonial = {
  name: string;
  title: string;
  img: string;
  logo: string;
  logoDark?: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: 'Nathan Wade',
    title: 'Senior Director of Engineering',
    img: '/img/testimonials/sproutward-nathan.jpg',
    logo: '/img/testimonials/sproutward-logo.svg',
    quote: `Our company has strict protocols to ensure customer data is protected, but maintaining parallel
    customer environments has been a nightmare. Architect's automated environment provisioning
    helped us re-focus on feature development and less on infra - as it should be!`,
  },
  {
    name: 'Stanis Laus Billy',
    title: 'Vice President of Engineering',
    img: '/img/testimonials/decisionpointhealth-billy.jpeg',
    logo: '/img/testimonials/decisionpointhealth-logo.png',
    quote: `Our team struggled with synchronizing our environments and wasted the time of our most senior
    engineers. Architect simplified deployments so much that it not only improved synchronization
    but also reduced our engineering overhead. What used to take 3 senior engineers to do is now no
    more than a part-time job.`,
  },
  {
    name: 'Chris Howes',
    title: 'CTO',
    img: '/img/testimonials/beacon-chris.png',
    logo: '/img/testimonials/beacon-logo.png',
    quote: `As a solo dev founder, I was able to launch my MVP faster with Architect.io. Their continuous
    delivery platform allowed me to go from a Docker Compose file to being fully deployed to
    Kubernetes in an afternoon, and I know I'll never have to worry about managing my production
    deployments.`,
  },
];
