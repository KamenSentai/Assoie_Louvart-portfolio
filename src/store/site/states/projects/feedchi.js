import { Feedchi as resource } from '@/utils/resources'

const description = 'Change the experience of buying food with others'

export default {
  name: 'Feedchi',
  slug: 'feedchi',
  description: `${description}.`,
  subject: 'Food order',
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
          'Application',
          { key: 'year' },
        ],
      },
    ],
    text: 'During our spare time, with a friend, we enjoyed creating a new food delivery application. Feedchi is an easy way to order your favorite dishes, recipe kits or products that you need.',
  },
  sections: [
    {
      contents: {
        title: 'Order quickly and easily',
        text: 'Feedchi enables you to choose from a wide range of quality products. We chose to make a clean and modern design so that the user can easily order and have a pleasant experience.',
      },
      media: [
        [
          resource.Media1,
          resource.Media2,
          resource.Media3,
        ],
      ],
    },
    {
      screen: resource.Screen1,
      contents: {
        title: 'Make a group order',
        text: 'If you want to make a collective order with Feedchi, you no longer need to crowd around a screen, pass the phone from hand to hand or have to pay for everyone. Feedchi makes the process easy, so you can save time. You just need to select the people you want to order with, and everyone can choose what they want. Once all your friends have chosen, they pay their part and all you have to do is pay yours. Then, you can share the delivery tracking with your friends. The food will arrive soon — and at the same time — for everyone. Enjoy !',
      },
      media: [
        [
          resource.Media4,
          resource.Media5,
        ],
        [
          resource.Media6,
          resource.Media7,
          resource.Media8,
        ],
      ],
    },
    {
      screen: resource.Screen2,
      media: [
        [
          resource.Media9,
          resource.Media10,
          resource.Media11,
        ],
        [
          resource.Media12,
          resource.Media13,
          resource.Media14,
        ],
      ],
    },
  ],
}
