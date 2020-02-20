import env from '@/utils/env'
import separator from '@/utils/separator'

export default {
  content: [
    {
      title: {
        text: 'Hey, nice to meet you !',
      },
      paragraph: 'I’m Assoïe, 4th year student at HETIC, a French digital designer. I am passionate about design and looking forwoard to work with talented people around the world on interesting projects.',
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
            'Junior Designer',
          ],
          [
            '2019',
            'Internship at Unilog',
            '🐘',
            'Junior Designer',
          ],
        ],
      },
    },
    {
      title: {
        tag: 'h2',
        text: 'In details',
      },
      paragraph: 'A year ago, I chose to do my internship at Unilog company in Bangalore, India, as Junior Designer. Working with passionated people helped me improve my skills. It was my first time in India and it became my life strongest experience. I discovered new culture and incredible people. It was a real chance for me to work in another country in a different environment. I dream of getting such wonderful experience again ! My second internship was in Paris at ET SI, also as Junior Designer for 5 months.',
    },
    {
      title: {
        tag: 'h2',
        text: 'And today',
      },
      paragraph: 'I’m currently looking for a 6 months internship beginning Mid-June 2020 anywhere around the world! Please feel free to contact me for more information. I\'ll be more than happy to chat with you about any opportunities!',
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
  description: 'I’m Assoïe and I’m passionate about design and looking forwoard to work with talented people around the world on interesting projects.',
  title: 'About',
}
