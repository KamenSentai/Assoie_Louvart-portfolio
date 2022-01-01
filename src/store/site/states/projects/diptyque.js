import { Diptyque as resource } from '@/utils/resources'

const description = 'Diptyque digital experience'

export default {
  name: 'Diptyque',
  slug: 'diptyque',
  description: `${description}.`,
  subject: 'Perfume and candle brand',
  year: 2021,
  cover: resource.Cover,
  hero: [
    resource.Hero1,
    resource.Hero2,
    resource.Hero3,
  ],
  intro: {
    tag: 'Intro',
    title: description,
    lists: [
      {
        title: 'Role',
        items: [
          'Art Direction',
          'UX Design',
          'UI Design',
        ],
      },
      {
        title: 'What',
        items: [
          'Websites',
          'Newsletters',
          { key: 'year' },
        ],
      },
    ],
    text: 'As part of my apprenticeship, I worked for Diptyque, a luxury candle and fragrance where I was responsible for the brand\'s digital experience.',
  },
  sections: [
    {
      contents: {
        title: 'Unleash the rose',
        text: 'For Eau Rose’s 10th anniversary, Diptyque did a collaboration with Maurice Harris a famous American florist. For the launch of the new collection I worked on the website  where I had to recreate Maurice\'s workshop in which the artist present his floral interpretation of the collection and where users can buy the products.',
      },
      media: [
        [
          resource.Media1,
        ],
      ],
    },
    {
      screen: resource.Screen1,
      media: [
        [
          resource.Media2,
        ],
        [
          resource.Media3,
        ],
      ],
    },
    {
      contents: {
        title: 'Landing pages',
        text: 'Diptyque has a strong identity. Their website is very clear and presents the new collections and products through different universes. I had the chance to work on several landing pages like "Diptyque le grand tour" and many newsletters.',
      },
      screen: resource.Screen2,
      media: [
        [
          resource.Media4,
        ],
        [
          resource.Media5,
          resource.Media6,
          resource.Media7,
        ],
        [
          resource.Media8,
          resource.Media9,
          resource.Media10,
        ],
      ],
    },
  ],
}
