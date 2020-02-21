import resources from '@/utils/resources'

export default {
  name: 'Mealthy',
  slug: 'mealthy',
  description: 'Reinventing the experience of diet application.',
  subject: 'Eat better',
  year: 2019,
  cover: resources.MealthyCover,
  hero: [
    resources.MealthyHero1,
    resources.MealthyHero2,
    resources.MealthyHero3,
  ],
  intro: {
    tag: 'Intro',
    title: 'Reinventing the experience of diet application',
    lists: [
      {
        title: 'Role',
        items: [
          'Illustrator',
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
    text: 'As part of my courses, I worked on a project in which we had to integrate a food scanner API. We came up with the idea of creating an application for people who want to take care of their nutrition. Our goal was to create an application different from the existing ones with a whole new approach.',
  },
  sections: [
    {
      contents: {
        title: 'Taking care of yourself',
        text: 'The idea was to create an endearing and cute avatar who would replace a pet so that the user would want to take care of it. I avoided a very "human" avatar because I believe that subjects such as weight gain, weight loss and everything related to the body can be sensitive subjects: I did not want to fall into the trap of moralizing and judging our user\'s state of health. The avatar does not represent us but what we eat. Before starting you will be asked some questions about your eating habits and your goals to create your personal “mealthie”.',
      },
      media: [
        [
          resources.MealthyMedia1,
          resources.MealthyMedia2,
          resources.MealthyMedia3,
        ],
        [
          resources.MealthyMedia4,
          resources.MealthyMedia5,
          resources.MealthyMedia6,
        ],
      ],
    },
    {
      screen: resources.MealthyScreen1,
      contents: {
        title: 'Goals every day',
        text: 'Each day there are 3 goals to achieve in order to gain game coins. You will get information about your diet, your calorie count and your health state. When you will scan your food, the app will tell you the value of the food and if it’s good or bad. If the food is not recommended, it will propose an alternative. Also, with the coins you gain, you will be able to personalize your mealthie so it will become special and unique for you !',
      },
      media: [
        [
          resources.MealthyMedia7,
          resources.MealthyMedia8,
          resources.MealthyMedia9,
        ],
        [
          resources.MealthyMedia10,
          resources.MealthyMedia11,
          resources.MealthyMedia12,
        ],
      ],
    },
    {
      screen: resources.MealthyScreen2,
    },
  ],
}
