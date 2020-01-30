import resources from '@/utils/resources'

export default {
  projects: [
    {
      name: 'Acne Studios',
      slug: 'acne-studios',
      position: 4,
      type: 'E-commerce',
      year: 2019,
      cover: resources.AcneStudiosCover,
      subject: 'E-commerce',
      size: 1080,
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
              resources.AcneStudiosScreen1,
            ],
          ],
        },
        {
          screen: resources.AcneStudiosTransition,
          media: [
            [
              resources.AcneStudiosScreen2,
            ],
          ],
        },
        {
          screen: resources.AcneStudiosMockup,
          media: [
            [
              resources.AcneStudiosScreen3,
            ],
            [
              resources.AcneStudiosScreen4,
            ],
          ],
        },
      ],
    },
    {
      name: 'Mealthy',
      slug: 'mealthy',
      position: 3,
      type: 'Application',
      year: 2019,
      cover: resources.MealthyCover,
      subject: 'Eat well',
      size: 375,
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
            title: 'Taking care of yourself ',
            text: 'The idea was to create an endearing and cute avatar who would replace a pet so that the user would want to take care of it. I avoided a very "human" avatar because I believe that subjects such as weight gain, weight loss and everything related to the body can be sensitive subjects and I did not want to fall into the trap of moralizing and judging our user\'s state of health. The avatar does not represent us but what we eat. Before starting you’ll be asked some questions about your eating habits and your goals to create your mealthie.',
          },
          media: [
            [
              resources.MealthyScreen1,
              resources.MealthyScreen2,
            ],
            [
              resources.MealthyScreen3,
              resources.MealthyScreen4,
            ],
          ],
        },
        {
          screen: resources.MealthyTransition,
          contents: {
            title: 'Goals every day',
            text: 'Each day there are 3 goals to achieve in order to gain game coins. You will get information about your diet, your calories count and your health state. When you will scan your food, the app will tell you the value of the food and if it’s good or bad. If the food is not recomanded it will propose an alternative. Also, with the coins you gain you will be able to personalise your mealthie so it will become special and unique for you !',
          },
          media: [
            [
              resources.MealthyScreen5,
              resources.MealthyScreen6,
            ],
          ],
        },
        {
          screen: resources.MealthyMockup,
          media: [
            [
              resources.MealthyScreen7,
              resources.MealthyScreen8,
              resources.MealthyScreen9,
            ],
          ],
        },
      ],
    },
    {
      name: 'Pocket Nurse',
      slug: 'pocket-nurse',
      position: 2,
      type: 'Tablet',
      year: 2019,
      cover: resources.PocketNurseCover,
      subject: 'Patient\'s care',
      size: 1080,
      hero: [
        resources.PocketNurseHero1,
        resources.PocketNurseHero2,
        resources.PocketNurseHero3,
      ],
      intro: {
        title: 'How to facilitated communication in the hospital',
        roles: [
          'UX Design',
          'UI Design',
        ],
        text: 'As part of clean design’s course, I worked on a project focusing on how to improve daily hospital care. The goal of the projet was to create an interface where the patients would have the possibility to know more about their situation during their hospitalisation and to keep in touch with the nurses and the family.',
      },
      sections: [
        {
          contents: {
            title: 'Improving the patient\'s situation',
            text: 'When the patient arrives at the hospital, the screen available at his room is linked to his medical file. He can see notifications showing him choice of meals, next appointment, time of visits etc. The patient can also send a request using the interface in writing or by voice command.',
          },
          media: [
            [
              resources.PocketNurseScreen1,
            ],
          ],
        },
        {
          screen: resources.PocketNurseTransition,
          contents: {
            title: 'Having fun, passing time',
            text: 'With “Pocket Nurse” the patient has access to all is favorite activities, films, musics, games, series etc. And he can also talk with his friends using a chat group.',
          },
          media: [
            [
              resources.PocketNurseScreen2,
            ],
          ],
        },
        {
          screen: resources.PocketNurseMockup,
          media: [
            [
              resources.PocketNurseScreen3,
            ],
            [
              resources.PocketNurseScreen4,
            ],
          ],
        },
      ],
    },
    {
      name: 'Yukey',
      slug: 'yukey',
      position: 1,
      type: 'Application',
      year: 2019,
      cover: resources.YukeyCover,
      subject: 'Real estate',
      size: 375,
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
        text: 'As a seller, we all know how long and stressful it can be to post a real estate ad. That is why with this application we made it easier. It is through Yukey and a chat system that the seller can be guided through the different stages and post his ad in less than 20 minutes. He can also answer buyers\' questions and schedule visits.',
      },
      sections: [
        {
          contents: {
            title: 'Redefining the buyer experience',
            text: 'The application is based on transparency. This is why we decided to display the exact address of the property and replace the personal descriptions, usually exaggerated and too general with tags. The buyer can easily find the house that suits him and with the help of Yukey he can ask any question that will be visible to everyone and contact the seller for a visit.',
          },
          media: [
            [
              resources.YukeyScreen1,
              resources.YukeyScreen2,
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
              resources.YukeyScreen3,
              resources.YukeyScreen4,
            ],
          ],
        },
        {
          screen: resources.YukeyMockup,
          media: [
            [
              resources.YukeyScreen5,
              resources.YukeyScreen6,
              resources.YukeyScreen7,
            ],
            [
              resources.YukeyScreen8,
              resources.YukeyScreen9,
              resources.YukeyScreen10,
            ],
          ],
        },
      ],
    },
  ],
}
