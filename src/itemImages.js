const itemMapping = [
  { image: 'banana.jpg', keywords: ['banana', 'banane'] },
  { image: 'apple.jpg', keywords: ['apple', 'pomme'] },
  { image: 'avocado.jpg', keywords: ['avocado', 'avocat'] },
  { image: 'berry.jpg', keywords: ['berry', 'blueberry', 'strawberry', 'myrtille', 'fraise', 'framboise'] },
  { image: 'bread.jpg', keywords: ['bread', 'pain'] },
  { image: 'carrot.jpg', keywords: ['carrot', 'carrotte'] },
  { image: 'cheese.jpg', keywords: ['cheese', 'fromage', 'comté', 'mimolette', 'tomme', 'parmesan'] },
  { image: 'chocolate.jpg', keywords: ['chocolate', 'chocolat'] },
  { image: 'egg.jpg', keywords: ['egg', 'oeuf'] },
  { image: 'fish.jpg', keywords: ['fish', 'poisson', 'saumon', 'cabillot'] },
  { image: 'fruit.jpg', keywords: ['fruit'] },
  { image: 'meat.jpg', keywords: ['meat', 'viande', 'poulet', 'boeuf', 'porc', 'dinde'] },
  { image: 'milk.jpg', keywords: ['milk', 'lait'] },
  { image: 'mushroom.jpg', keywords: ['mushroom', 'champignon'] },
  { image: 'onion.jpg', keywords: ['onion', 'oignon'] },
  { image: 'pasta.jpg', keywords: ['pasta', 'pate', 'riz', 'pâte'] },
  { image: 'pear.jpg', keywords: ['pear', 'poire'] },
  { image: 'salad.jpg', keywords: ['salad', 'salade'] },
  { image: 'spice.jpg', keywords: ['spice', 'épice', 'curry', 'paprika', 'sel', 'poivre'] },
  { image: 'tomato.jpg', keywords: ['tomato', 'tomate'] },
  { image: 'vegetable.jpg', keywords: ['vegetable', 'légume', 'aubergine', 'poivron', 'poireau'] },
  { image: 'yogurt.jpg', keywords: ['yogurt', 'yaourt'] },
];

const defaultImage = 'default.jpg';

function findItem(query) {
  return itemMapping.find(row => row.keywords.includes(query))
}

export default function getImage(item = '') {
  let name = item.toLowerCase();
  if (findItem(name)) { return findItem(name).image; }

  if (name.length > 0) {
    name = name.slice(0, -1);
    if (findItem(name)) { return findItem(name).image; }
  }

  return defaultImage;
};
