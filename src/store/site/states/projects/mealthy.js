import { Mealthy as resource } from '@/utils/resources'

const description = 'Reinventing the experience of diet application'

export default {
  name: 'Mealthy',
  slug: 'mealthy',
  description: `${description}.`,
  subject: 'Eat better',
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
          'Illustrator',
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
          resource.Media1,
          resource.Media2,
          resource.Media3,
        ],
        [
          resource.Media4,
          resource.Media5,
          resource.Media6,
        ],
      ],
    },
    {
      screen: resource.Screen1,
      contents: {
        title: 'Goals every day',
        text: 'Each day there are 3 goals to achieve in order to gain game coins. You will get information about your diet, your calorie count and your health state. When you will scan your food, the app will tell you the value of the food and if it\'s good or bad. If the food is not recommended, it will propose an alternative. Also, with the coins you gain, you will be able to personalize your mealthie so it will become special and unique for you !',
      },
      media: [
        [
          resource.Media7,
          resource.Media8,
          resource.Media9,
        ],
        [
          resource.Media10,
          resource.Media11,
          resource.Media12,
        ],
      ],
    },
    {
      screen: resource.Screen2,
    },
  ],
}
