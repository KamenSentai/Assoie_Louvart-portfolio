import env from '@/utils/env'
import separator from '@/utils/separator'

const description = 'I’m Assoïe, a French full time Freelance Product Designer. I am passionate about design and looking forward to work with talented people on interesting projects.'

export default {
  content: [
    {
      title: {
        text: 'Hey, nice to meet you !',
      },
      paragraph: description,
    },
    {
      title: {
        tag: 'h2',
        text: 'Experiences',
      },
      list: {
        class: 'grid',
        items: [
          [
            'ULTRANOIR',
            '2021',
            'Junior Visual Designer',
            'Paris 🥐',
          ],
          [
            'FANTASY',
            '2020',
            'Visual Designer Intern',
            'New York 🗽',
          ],
          [
            'ET SI',
            '2019',
            'Design Intern',
            'Paris 🥐',
          ],
          [
            'UNILOG',
            '2018',
            'Design Intern',
            'Bangalore 🐘',
          ],
        ],
      },
    },
    {
      title: {
        tag: 'h2',
        text: 'In details',
      },
      paragraph: 'Two years ago, I chose to do my internship at UNILOG company in Bangalore, India, as Junior Designer. Working with passionated people helped me improve my skills. It was my first time in India and it became my life strongest experience. My second internship was in Paris at ET SI, also as Junior Designer for 5 months. For my last internship I had the chance to intern at FANTASY as a Visual Designer for 6 months. This experience allowed me to work on great project for famous brands with amazing designers.',
    },
    {
      title: {
        tag: 'h2',
        text: 'And today ?',
      },
      paragraph: 'I just finished my 1 year apprenticeship at ULTRANOIR where I had the chance to work for luxury brands. Actually, I am available for freelance. Please feel free to contact me for more informations. I’ll be more than happy to chat with you about any opportunities!',
    },
    {
      isSocial: true,
      title: {
        tag: 'h2',
        text: 'SAY HI !',
      },
      list: {
        class: 'link',
        items: [
          {
            name: 'Email',
            title: 'louvartassoie@gmail.com',
            link: 'mailto:louvartassoie@gmail.com',
          },
          {
            name: 'Dribbble',
            title: 'Assoïe Louvart',
            link: 'https://dribbble.com/alouvart',
          },
          {
            name: 'Behance',
            title: 'Assoïe Louvart',
            link: 'https://www.behance.net/alouvart',
          },
          {
            name: 'LinkedIn',
            title: 'Assoïe Louvart',
            link: 'https://www.linkedin.com/in/asso%C3%AFe-louvart-8333049b/',
          },
          {
            name: 'Resume',
            icon: 'Download',
            title: 'Download my resume',
            link: '/static/Assoie_Louvart-resume.pdf',
          },
        ],
      },
    },
  ],
  credits: {
    text: `${new Date().getFullYear()} - ${env.NAME} — Coded with love by ${separator} ✨`,
    separator,
    coder: {
      name: 'Alain',
      site: 'https://twitter.com/AlainCVT',
    },
  },
  description,
  title: 'About',
}
