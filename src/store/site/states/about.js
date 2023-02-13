import env from '@/utils/env'
import separator from '@/utils/separator'

const description = 'I\'m Assoïe, a Paris based full-time Freelance Product Designer and UX/UI Designer. Curious and invested designer, my goal is to design and improve the experiences you offer to your users. I intervene on the research phases, but also on the UX/UI design phases. Passionate about design, I like to work on the whole project. My numerous experiences in agencies and at the client\'s allow me to adapt to any situation and type of project.'

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
            'FREELANCE (+5 years)',
            '2018 - 2023',
            'Product Designer / UX/UI Designer',
            '🌍',
          ],
          [
            'USE ALL FIVE',
            '2022 - 2023',
            'UX/UI Designer',
            'Los Angeles 🌇',
          ],
          [
            'VO',
            '2022',
            'UX/UI Designer',
            'Paris 🥐',
          ],
          [
            'ULTRANOIR',
            '2021',
            'UX/UI Designer + Creative Designer',
            'Paris 🥐',
          ],
          [
            'FANTASY',
            '2020',
            'UX/UI Designer',
            'New York 🗽',
          ],
          [
            'YUKEY',
            '2019',
            'Product Designer',
            'Paris 🥐',
          ],
          [
            'ET SI',
            '2019',
            'UX/UI Designer',
            'Paris 🥐',
          ],
          [
            'UNILOG',
            '2018',
            'Product Designer',
            'Bangalore 🐘',
          ],
        ],
      },
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
            name: 'Mail',
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
