import env from '@/utils/env'
import separator from '@/utils/separator'

export default {
  content: [
    {
      title: {
        text: 'Hey, nice to meet you !',
      },
      paragraph: 'I am Assoïe Louvart a French Digital Designer and 4th year student at HETIC, Paris. I am passionate about design and looking forward to working with talented people around the world on interesting projects.',
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
            '2020',
            'Internship',
            '🌎',
            'Maybe with you ?',
          ],
          [
            '2019',
            'Internship at ET SI',
            '🥐',
            'Design Intern',
          ],
          [
            '2019',
            'Internship at Unilog',
            '🐘',
            'Design Intern',
          ],
        ],
      },
    },
    {
      title: {
        tag: 'h2',
        text: 'In details',
      },
      paragraph: 'A year ago, I chose to do my internship at Unilog company in Bangalore, India, as Design Intern. Working with highly-motivated people helped me to improve my skills. This was my first time in India, and it became my life’s strongest experience. I discovered new culture and incredible people. It was a real chance for me to work in another country in a different environment. I dream of achieving another such wonderful experience ! My second internship was in Paris at ET SI, also as Design Intern, for 6 months. I worked for many brands during which time I was able to develop my design skills in graphic design, photography and branding.',
    },
    {
      title: {
        tag: 'h2',
        text: 'And today',
      },
      paragraph: 'I am currently looking for a 6 month internship beginning Mid-June 2020 anywhere around the world ! Please feel free to contact me for more information. I will be more than happy to chat with you about any opportunities !',
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
  description: 'I am Assoïe Louvart a French Digital Designer and 4th year student at HETIC, Paris. I am passionate about design and looking forward to working with talented people around the world on interesting projects.',
  title: 'About',
}
