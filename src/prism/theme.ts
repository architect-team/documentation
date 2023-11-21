import { PrismTheme } from 'prism-react-renderer';

export const theme: PrismTheme = {
  plain: {
    color: '#d8d8d8',
    backgroundColor: 'rgb(31 41 55)',
  },
  styles: [
    {
      types: ['boolean', 'arrow', 'atrule', 'tag'],
      style: {
        color: '#9ac8df',
      },
    },
    {
      types: ['keyword'],
      style: {
        color: '#78d581',
      },
    },
    {
      types: ['type', 'variable'],
      style: {
        color: '#0082b4',
      },
    },
    {
      types: ['property'],
      style: {
        color: '#9ac8df',
      },
    },
    {
      types: ['string'],
      style: {
        color: '#f4a934',
      },
    },
    {
      types: ['punctuation'],
      style: {
        color: '#0082b4',
      },
    },
    {
      types: ['interpolation'],
      style: {
        color: '#9ac8df',
      },
    },
  ],
};
