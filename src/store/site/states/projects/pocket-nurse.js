import { PocketNurse as resource } from '@/utils/resources'

const description = 'How to facilitated communication in the hospital'

export default {
  name: 'Pocket Nurse',
  slug: 'pocket-nurse',
  description: `${description}.`,
  subject: 'Patient\'s care',
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
          'UX Design',
          'UI Design',
        ],
      },
      {
        title: 'What',
        items: [
          'Tablet',
          { key: 'year' },
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
          resource.Media1,
        ],
        [
          resource.Media2,
        ],
        [
          resource.Media3,
        ],
      ],
    },
    {
      screen: resource.Screen1,
      contents: {
        title: 'Having fun, passing time',
        text: 'With “Pocket Nurse,” the patient has access to all his favorite activities, films, music, games, series, etc. He can also talk with his friends using its chat group.',
      },
      media: [
        [
          resource.Media4,
        ],
      ],
    },
    {
      screen: resource.Screen2,
      media: [
        [
          resource.Media5,
        ],
        [
          resource.Media6,
        ],
        [
          resource.Media7,
        ],
      ],
    },
  ],
}
