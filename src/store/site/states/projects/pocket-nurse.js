import resources from '@/utils/resources'

export default {
  name: 'Pocket Nurse',
  slug: 'pocket-nurse',
  description: 'How to facilitated communication in the hospital.',
  type: 'Tablet',
  year: 2019,
  cover: resources.PocketNurseCover,
  subject: 'Patient\'s care',
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
      screen: resources.PocketNurseTransition,
      contents: {
        title: 'Having fun, passing time',
        text: 'With “Pocket Nurse” the patient has access to all is favorite activities, films, musics, games, series etc. And he can also talk with his friends using a chat group.',
      },
      media: [
        [
          resources.PocketNurseMedia4,
        ],
      ],
    },
    {
      screen: resources.PocketNurseMockup,
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
