import env from '@/utils/env'
import resources from '@/utils/resources'
import separator from '@/utils/separator'
import sizes from '@/utils/sizes'

export default {
  about: {
    content: [
      {
        title: {
          text: 'Hey, nice to meet you !',
        },
        paragraph: 'I’m Assoïe, 4th year student at HETIC, a French digital designer. I am passionate about design and looking forwoard to work with talented people around the world on interesting projects.',
      },
      {
        title: {
          tag: 'h2',
          text: 'Experiences',
        },
        list: {
          class: 'grid',
          items: [
            [
              '2020',
              'Internship',
              '🌎',
              'Maybe with you ?',
            ],
            [
              '2019',
              'Internship at ET SI',
              '🥐',
              'Junior Designer',
            ],
            [
              '2019',
              'Internship at Unilog',
              '🐘',
              'Junior Designer',
            ],
          ],
        },
      },
      {
        title: {
          tag: 'h2',
          text: 'In details',
        },
        paragraph: 'A year ago, I chose to do my internship at Unilog company in Bangalore, India, as Junior Designer. Working with passionated people helped me improve my skills. It was my first time in India and it became my life strongest experience. I discovered new culture and incredible people. It was a real chance for me to work in another country in a different environment. I dream of getting such wonderful experience again ! My second internship was in Paris at ET SI, also as Junior Designer for 5 months.',
      },
      {
        title: {
          tag: 'h2',
          text: 'And today',
        },
        paragraph: 'I’m currently looking for a 6 months internship beginning Mid-June 2020 anywhere around the world! Please feel free to contact me for more information. I\'ll be more than happy to chat with you about any opportunities!',
      },
      {
        isSocial: true,
        title: {
          tag: 'h2',
          text: 'SAY HI !',
        },
        list: {
          class: 'link',
          items: [
            {
              name: 'Email',
              title: 'louvartassoie@gmail.com',
              link: 'mailto:louvartassoie@gmail.com',
            },
            {
              name: 'Dribbble',
              title: 'Assoïe Louvart',
              link: 'https://dribbble.com/alouvart',
            },
            {
              name: 'Behance',
              title: 'Assoïe Louvart',
              link: 'https://www.behance.net/alouvart',
            },
            {
              name: 'LinkedIn',
              title: 'Assoïe Louvart',
              link: 'https://www.linkedin.com/in/asso%C3%AFe-louvart-8333049b/',
            },
            {
              name: 'Resume',
              icon: 'Download',
              title: 'Download my resume',
              link: '/static/Assoie_Louvart-resume.pdf',
            },
          ],
        },
      },
    ],
    credits: {
      text: `${new Date().getFullYear()} - ${env.NAME} — Coded with love by ${separator} ✨`,
      separator,
      coder: {
        name: 'Alain',
        site: 'https://twitter.com/AlainCVT',
      },
    },
    description: 'I’m Assoïe and I’m passionate about design and looking forwoard to work with talented people around the world on interesting projects.',
    title: 'About',
  },
  home: {
    description: 'Portfolio of Assoïe Louvart French digital designer & fourth year student at HETIC.',
    title: `${env.SPECIALIZATION} & ${env.STATUS}`,
  },
  projects: [
    {
      name: 'Acne Studios',
      slug: 'acne-studios',
      description: 'Acne Studios new website design.',
      position: 5,
      type: 'E-commerce',
      year: 2019,
      cover: resources.AcneStudiosCover,
      subject: 'E-commerce',
      size: sizes.desktop,
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
      name: 'Feedchi',
      slug: 'feedchi',
      description: 'Change the experience of buying food with others.',
      position: 2,
      type: 'Application',
      year: 2019,
      cover: resources.FeedchiCover,
      subject: 'Food order',
      size: sizes.mobile,
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
    },
    {
      name: 'Mealthy',
      slug: 'mealthy',
      description: 'Reinventing the experience of diet application.',
      position: 4,
      type: 'Application',
      year: 2019,
      cover: resources.MealthyCover,
      subject: 'Eat well',
      size: sizes.mobile,
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
    },
    {
      name: 'Pocket Nurse',
      slug: 'pocket-nurse',
      description: 'How to facilitated communication in the hospital.',
      position: 3,
      type: 'Tablet',
      year: 2019,
      cover: resources.PocketNurseCover,
      subject: 'Patient\'s care',
      size: sizes.desktop,
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
      description: 'Reinventing the experience of bringing together sellers and buyers of real estate in France.',
      position: 1,
      type: 'Application',
      year: 2019,
      cover: resources.YukeyCover,
      subject: 'Real estate',
      size: sizes.mobile,
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
              resources.YukeyScreen1,
              resources.YukeyScreen2,
            ],
            [
              resources.YukeyScreen3,
              resources.YukeyScreen4,
              resources.YukeyScreen5,
            ],
            [
              resources.YukeyScreen6,
              resources.YukeyScreen7,
              resources.YukeyScreen8,
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
              resources.YukeyScreen9,
              resources.YukeyScreen10,
            ],
            [
              resources.YukeyScreen11,
              resources.YukeyScreen12,
              resources.YukeyScreen13,
            ],
            [
              resources.YukeyScreen14,
              resources.YukeyScreen15,
              resources.YukeyScreen16,
            ],
          ],
        },
        {
          screen: resources.YukeyMockup,
        },
      ],
    },
  ],
  savedIndex: 0,
}
