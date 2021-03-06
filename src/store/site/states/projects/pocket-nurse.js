import resources from '@/utils/resources'

export default {
  name: 'Pocket Nurse',
  slug: 'pocket-nurse',
  description: 'How to facilitated communication in the hospital.',
  subject: 'Patient\'s care',
  year: 2019,
  cover: resources.PocketNurseCover,
  hero: [
    resources.PocketNurseHero1,
    resources.PocketNurseHero2,
    resources.PocketNurseHero3,
  ],
  intro: {
    tag: 'Intro',
    title: 'How to facilitated communication in the hospital',
    lists: [
      {
        title: 'Role',
        items: [
          'UX Design',
          'UI Design',
        ],
      },
      {
        title: 'What',
        items: [
          'Tablet',
          2019,
        ],
      },
    ],
    text: 'As part of a clean design course, we worked on a project focusing on how to improve daily hospital care. The goal of the project was to create an interface where the patients would have the possibility to know more about their situation during their hospitalization, keep in touch with the nurses, and connect with family.',
  },
  sections: [
    {
      contents: {
        title: 'Improving the patient\'s situation',
        text: 'When the patient arrives at the hospital, the screen available at his room is linked to his medical file. He can see notifications showing him choice of meals, next appointment, time of visits etc. The patient can also send a request using the interface in writing or by voice command.',
      },
      media: [
        [
          resources.PocketNurseMedia1,
        ],
        [
          resources.PocketNurseMedia2,
        ],
        [
          resources.PocketNurseMedia3,
        ],
      ],
    },
    {
      screen: resources.PocketNurseScreen1,
      contents: {
        title: 'Having fun, passing time',
        text: 'With “Pocket Nurse,” the patient has access to all his favorite activities, films, music, games, series, etc. He can also talk with his friends using its chat group.',
      },
      media: [
        [
          resources.PocketNurseMedia4,
        ],
      ],
    },
    {
      screen: resources.PocketNurseScreen2,
      media: [
        [
          resources.PocketNurseMedia5,
        ],
        [
          resources.PocketNurseMedia6,
        ],
        [
          resources.PocketNurseMedia7,
        ],
      ],
    },
  ],
}
