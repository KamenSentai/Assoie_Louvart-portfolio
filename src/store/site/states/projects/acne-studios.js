import resources from '@/utils/resources'

export default {
  name: 'Acne Studios',
  slug: 'acne-studios',
  description: 'Acne Studios new website design.',
  type: 'E-commerce',
  year: 2019,
  cover: resources.AcneStudiosCover,
  subject: 'E-commerce',
  hero: [
    resources.AcneStudiosHero1,
    resources.AcneStudiosHero2,
    resources.AcneStudiosHero3,
  ],
  intro: {
    title: 'Acne Studio new design',
    roles: [
      'Art Direction',
      'UX Design',
      'UI Design',
    ],
    text: 'Last summer, during my free time I enjoyed recreating Acne Studios e-commerce website. I love their colors and their minimalist indentity and it was for me a challenge to recreate the website through my vision of design.',
  },
  sections: [
    {
      contents: {
        title: 'Minimalist, simplicity',
        text: 'Acne Studio has a strong identity. Their website is very clear and shows their products quality. My goal was to fit with Acne Studio values while adding my own touch.',
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
