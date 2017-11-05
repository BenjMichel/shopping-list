const itemImages = {
  banana: 'banana.jpg',
  banane: 'banana.jpg',
  apple: 'apple.jpg',
  pomme: 'apple.jpg',
  avocado: 'avocado.jpg',
  avocat: 'avocado.jpg',
};

const defaultImage = 'berry.jpg';

export default function getImage(item = '') {
  let name = item.toLowerCase();
  if (itemImages[name]) { return itemImages[name]; }

  if (name.length > 0) {
    name = name.slice(0, -1);
    if (itemImages[name]) { return itemImages[name]; }
  }

  return defaultImage;
};
