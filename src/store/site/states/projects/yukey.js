import resources from '@/utils/resources'

export default {
  name: 'Yukey',
  slug: 'yukey',
  description: 'Reinventing the experience of bringing together sellers and buyers of real estate in France.',
  type: 'Application',
  year: 2019,
  cover: resources.YukeyCover,
  subject: 'Real estate',
  hero: [
    resources.YukeyHero1,
    resources.YukeyHero2,
    resources.YukeyHero3,
  ],
  intro: {
    title: 'Reinventing the experience of bringing together sellers and buyers of real estate in France',
    roles: [
      'Product Owner',
      'UX Design',
      'UI Design',
    ],
    text: 'As part of my studies, I worked on a project for a client in the real estate sector. The goal was to create a private-to-private application that offers a new user experience with personal assistance. The goal was to change this saturated and dishonest market by offering a benevolent application. Yukey is currently being tested by users and will soon be availible on IOS and Android.',
  },
  sections: [
    {
      contents: {
        title: 'Redefining the buyer experience',
        text: 'The application is based on transparency. This is why we decided to display the exact address of the property and replace the personal descriptions, usually exaggerated and too general with tags. The buyer can easily find the house that suits him and with the help of Yukey he can ask any question that will be visible to everyone and contact the seller for a visit.',
      },
      media: [
        [
          resources.YukeyMedia1,
          resources.YukeyMedia2,
        ],
        [
          resources.YukeyMedia3,
          resources.YukeyMedia4,
          resources.YukeyMedia5,
        ],
        [
          resources.YukeyMedia6,
          resources.YukeyMedia7,
          resources.YukeyMedia8,
        ],
      ],
    },
    {
      screen: resources.YukeyTransition,
      contents: {
        title: 'Less than 20 min to seel your house',
        text: 'As a seller, we all know how long and stressful it can be to post a real estate ad. That is why with this application we made it easier. It is through Yukey and a chat system that the seller can be guided through the different stages and post his ad in less than 20 minutes. He can also answer buyers\' questions and schedule visits.',
      },
      media: [
        [
          resources.YukeyMedia9,
          resources.YukeyMedia10,
        ],
        [
          resources.YukeyMedia11,
          resources.YukeyMedia12,
          resources.YukeyMedia13,
        ],
        [
          resources.YukeyMedia14,
          resources.YukeyMedia15,
          resources.YukeyMedia16,
        ],
      ],
    },
    {
      screen: resources.YukeyMockup,
    },
  ],
}
