import resources from '@/utils/resources'

export default {
  name: 'Mealthy',
  slug: 'mealthy',
  description: 'Reinventing the experience of diet application.',
  type: 'Application',
  year: 2019,
  cover: resources.MealthyCover,
  subject: 'Eat well',
  hero: [
    resources.MealthyHero1,
    resources.MealthyHero2,
    resources.MealthyHero3,
  ],
  intro: {
    title: 'Reinventing the experience of diet application',
    roles: [
      'Illustrator',
      'UX Design',
      'UI Design',
    ],
    text: 'As part of my courses, I worked on a project in which we had to integrate a food scanner API. We came up with the idea of creating an application for people who want to take care of their nutrition. Our goal was to create an application that was different from the existing ones with a whole new approach.',
  },
  sections: [
    {
      contents: {
        title: 'Taking care of yourself',
        text: 'The idea was to create an endearing and cute avatar who would replace a pet so that the user would want to take care of it. I avoided a very "human" avatar because I believe that subjects such as weight gain, weight loss and everything related to the body can be sensitive subjects and I did not want to fall into the trap of moralizing and judging our user\'s state of health. The avatar does not represent us but what we eat. Before starting you’ll be asked some questions about your eating habits and your goals to create your mealthie.',
      },
      media: [
        [
          resources.MealthyScreen1,
          resources.MealthyScreen2,
          resources.MealthyScreen3,
        ],
        [
          resources.MealthyScreen4,
          resources.MealthyScreen5,
          resources.MealthyScreen6,
        ],
      ],
    },
    {
      screen: resources.MealthyTransition,
      contents: {
        title: 'Goals every day',
        text: 'Each day there are 3 goals to achieve in order to gain game coins. You will get information about your diet, your calories count and your health state. When you will scan your food, the app will tell you the value of the food and if it’s good or bad. If the food is not recomanded it will propose an alternative. Also, with the coins you gain you will be able to personalise your mealthy so it will become special and unique for you !',
      },
      media: [
        [
          resources.MealthyScreen7,
          resources.MealthyScreen8,
          resources.MealthyScreen9,
        ],
        [
          resources.MealthyScreen10,
          resources.MealthyScreen11,
          resources.MealthyScreen12,
        ],
      ],
    },
    {
      screen: resources.MealthyMockup,
    },
  ],
}
