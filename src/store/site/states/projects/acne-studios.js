import { AcneStudios as resource } from '@/utils/resources'

const description = 'Acne Studios new design'

export default {
  name: 'Acne Studios',
  slug: 'acne-studios',
  description: `${description}.`,
  subject: 'E-commerce',
  year: 2019,
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
          'E-commerce',
          { key: 'year' },
        ],
      },
    ],
    text: 'Last summer, during my free time, I enjoyed recreating the e-commerce website of Acne Studios. I love their colors and their minimalist identity. It was for me a challenge to recreate the website through my vision of design.',
  },
  sections: [
    {
      contents: {
        title: 'Minimalist, simplicity',
        text: 'Acne Studios has a strong identity. Their website is very clear and shows their product\'s quality. My goal was to fit with Acne Studios values while adding my own touch.',
      },
      media: [
        [
          resource.Media1,
        ],
        [
          resource.Media2,
        ],
      ],
    },
    {
      screen: resource.Screen1,
      media: [
        [
          resource.Media3,
        ],
      ],
    },
    {
      screen: resource.Screen2,
      media: [
        [
          resource.Media4,
        ],
        [
          resource.Media5,
        ],
      ],
    },
  ],
}
