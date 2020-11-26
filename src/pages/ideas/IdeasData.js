import { nanoid } from 'nanoid';
const uid = function () {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
export const data = [
  {
    id: '0',
    title: 'Similar post to this! Lorem, ipsum 1.',
    date: '2020-11-26',
    tags: ['it', 'digital', 'react'],
    postCategory: 'article',
  },
  {
    id: '1',
    title: 'Similar post to this! Lorem, ipsum 2.',
    date: '2020-11-26',
    tags: ['it', 'digital', 'react'],
    postCategory: 'article',
  },
  {
    id: '2',
    title: 'Similar post to this! Lorem, ipsum 3.',
    date: '2020-11-26',
    tags: ['it', 'digital', 'react'],
    postCategory: 'article',
  },
  {
    id: '3',
    title: 'Similar post to this! Lorem, ipsum 4.',
    date: '2020-11-26',
    tags: ['it', 'digital', 'react'],
    postCategory: 'article',
  },
  {
    id: '4',
    title: 'Similar post to this! Lorem, ipsum 5.',
    date: '2020-11-26',
    tags: ['it', 'digital', 'react'],
    postCategory: 'article',
  },
  {
    id: '5',
    title: 'Similar post to this! Lorem, ipsum 6.',
    date: '2020-11-26',
    tags: ['it', 'digital', 'react'],
    postCategory: 'article',
  },
  {
    id: '6',
    title: 'Similar post to this! Lorem, ipsum 8.',
    date: '2020-11-26',
    tags: ['it', 'digital', 'react'],
    postCategory: 'project',
  },
];
