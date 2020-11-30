export const string_to_slug = (str) => {
  str = str.replace(/^\s+|\s+$/g, ''); // trim
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  const from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;';
  const to = 'aaaaeeeeiiiioooouuuunc------';
  for (let i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  str = str
    .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-'); // collapse dashes

  return str;
};

export const CardVariants = {
  beforeHover: {},
  onHover: {
    scale: 1.1,
  },
};

export const ItemVariants = {
  beforeHover: {},
  onHover: {
    scale: 1.2,
  },
};

export const PageTrans = {
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: '-10%',
  },
};

export const HELLO = [
  'nǐ hǎo',
  'hola',
  'hello',
  'namaste',
  'olá',
  'hyālō',
  'privet',
  'guten tag',
  'nggoleki',
  'nóng hō',
  'bonjour',
  'merhaba',
  'ciao',
  'cześć’',
];
export const INTERESTS = [
  'Python',
  'React',
  'Frontend',
  'TensorFlow.js',
  'CSS',
  'Data',
  'Node.js',
];

export const formatDatefromIso = (iso) => {
  const date = new Date(iso);
  return (
    date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
  );
};
