import resources from '@/utils/resources'

export default {
  name: 'Feedchi',
  slug: 'feedchi',
  description: 'Change the experience of buying food with others.',
  subject: 'Food order',
  year: 2019,
  cover: resources.FeedchiCover,
  hero: [
    resources.FeedchiHero1,
    resources.FeedchiHero2,
    resources.FeedchiHero3,
  ],
  intro: {
    tag: 'Intro',
    title: 'Change the experience of buying food with others',
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
          'Application',
          2019,
        ],
      },
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
          resources.FeedchiMedia1,
          resources.FeedchiMedia2,
          resources.FeedchiMedia3,
        ],
      ],
    },
    {
      screen: resources.FeedchiScreen1,
      contents: {
        title: 'Make a group order',
        text: 'If you want to make a collective order with Feedchi you no longer need to crowd around a screen, pass the phone from hand to hand or have to pay for everyone. Feedchi makes the process easy so you can save time. You just need to select the people you want to order with and everyone can choose what they want. Once all your friends have chosen they pay their part and all you have to do is pay yours. Then, you can share the delivery tracking with your friends. The food will arrived soon and at the same time for everyone. Enjoy !',
      },
      media: [
        [
          resources.FeedchiMedia4,
          resources.FeedchiMedia5,
        ],
        [
          resources.FeedchiMedia6,
          resources.FeedchiMedia7,
          resources.FeedchiMedia8,
        ],
      ],
    },
    {
      screen: resources.FeedchiScreen2,
      media: [
        [
          resources.FeedchiMedia9,
          resources.FeedchiMedia10,
          resources.FeedchiMedia11,
        ],
        [
          resources.FeedchiMedia12,
          resources.FeedchiMedia13,
          resources.FeedchiMedia14,
        ],
      ],
    },
  ],
}
