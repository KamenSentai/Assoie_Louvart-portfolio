import resources from '@/utils/resources'

export default {
  name: 'Acne Studios',
  slug: 'acne-studios',
  description: 'Acne Studios new website design.',
  subject: 'E-commerce',
  year: 2019,
  cover: resources.AcneStudiosCover,
  hero: [
    resources.AcneStudiosHero1,
    resources.AcneStudiosHero2,
    resources.AcneStudiosHero3,
  ],
  intro: {
    tag: 'Intro',
    title: 'Acne Studios new design',
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
        text: 'Acne Studios has a strong identity. Their website is very clear and shows their product’s quality. My goal was to fit with Acne Studios values while adding my own touch.',
      },
      media: [
        [
          resources.AcneStudiosMedia1,
        ],
        [
          resources.AcneStudiosMedia2,
        ],
      ],
    },
    {
      screen: resources.AcneStudiosScreen1,
      media: [
        [
          resources.AcneStudiosMedia3,
        ],
      ],
    },
    {
      screen: resources.AcneStudiosScreen2,
      media: [
        [
          resources.AcneStudiosMedia4,
        ],
        [
          resources.AcneStudiosMedia5,
        ],
      ],
    },
  ],
}
