import { Yukey as resource } from '@/utils/resources'

export default {
  name: 'Yukey',
  slug: 'yukey',
  description: 'Reinventing the experience of bringing together sellers and buyers of real estate in France.',
  subject: 'Real estate',
  year: 2019,
  cover: resource.Cover,
  hero: [
    resource.Hero1,
    resource.Hero2,
    resource.Hero3,
  ],
  intro: {
    tag: 'Intro',
    title: 'Reinventing the experience of bringing together sellers and buyers of real estate in France',
    lists: [
      {
        title: 'Role',
        items: [
          'Product Owner',
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
    text: 'As part of my studies, I worked on a project for a client in the real estate sector. The goal was to create a private-to-private application that offers a new user experience with personal assistance. The purpose was to change this saturated and dishonest market by offering a benevolent application. Yukey is currently being tested by users and will soon be available on IOS and Android.',
  },
  sections: [
    {
      contents: {
        title: 'Redefining the buyer experience',
        text: 'The application is based on transparency. We display the exact address of the property and replace the personal descriptions, which are usually exaggerated and too general, with tags. The buyer can easily find the house that suits him. Then, with the help of Yukey, he/she can ask any question, which will be viewable on the site, and contact the seller for a visit.',
      },
      media: [
        [
          resource.Media1,
          resource.Media2,
        ],
        [
          resource.Media3,
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
      screen: resource.Screen1,
      contents: {
        title: 'Less than 20 min to seel your house',
        text: 'As sellers, we all know how long and stressful it can be to post a real estate advertisement. That is why, with this application, we made it easier. With Yukey, the seller can post his ad in less than 20 minutes. Then, through the chat system, he can also answer buyer’s questions and schedule visits, while being guided through the different stages of sale.',
      },
      media: [
        [
          resource.Media9,
          resource.Media10,
        ],
        [
          resource.Media11,
          resource.Media12,
          resource.Media13,
        ],
        [
          resource.Media14,
          resource.Media15,
          resource.Media16,
        ],
      ],
    },
    {
      screen: resource.Screen2,
    },
  ],
}
