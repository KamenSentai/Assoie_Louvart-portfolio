import resources from '@/utils/resources'

export default {
  name: 'Feedchi',
  slug: 'feedchi',
  description: 'Change the experience of buying food with others.',
  type: 'Application',
  year: 2019,
  cover: resources.FeedchiCover,
  subject: 'Food order',
  hero: [
    resources.FeedchiHero1,
    resources.FeedchiHero2,
    resources.FeedchiHero3,
  ],
  intro: {
    title: 'Change the experience of buying food with others',
    roles: [
      'Art Direction',
      'UX Design',
      'UI Design',
    ],
    text: 'During my free time I enjoyed creating a new food delivery application. Feedchi is an easy way to order your favourite dishes, recipe kits or products that you need.',
  },
  sections: [
    {
      contents: {
        title: 'Order quickly and easily',
        text: 'Feedchi offers you to chose from a wide range of quality products. I choose to make a clean and modern design so that the user can easily order and have a pleasant experience.',
      },
      media: [
        [
          resources.FeedchiScreen1,
          resources.FeedchiScreen2,
          resources.FeedchiScreen3,
        ],
      ],
    },
    {
      screen: resources.FeedchiTransition,
      contents: {
        title: 'Make a group order',
        text: 'If you want to make a collective order with Feedchi you no longer need to crowd around a screen, pass the phone from hand to hand or have to pay for everyone. Feedchi makes the process easy so you can save time. You just need to select the people you want to order with and everyone can choose what they want. Once all your friends have chosen they pay their part and all you have to do is pay yours. Then, you can share the delivery tracking with your friends. The food will arrived soon and at the same time for everyone. Enjoy !',
      },
      media: [
        [
          resources.FeedchiScreen4,
          resources.FeedchiScreen5,
        ],
        [
          resources.FeedchiScreen6,
          resources.FeedchiScreen7,
          resources.FeedchiScreen8,
        ],
      ],
    },
    {
      screen: resources.FeedchiMockup,
      media: [
        [
          resources.FeedchiScreen9,
          resources.FeedchiScreen10,
          resources.FeedchiScreen11,
        ],
        [
          resources.FeedchiScreen12,
          resources.FeedchiScreen13,
          resources.FeedchiScreen14,
        ],
      ],
    },
  ],
}
