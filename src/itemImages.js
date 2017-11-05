import banana from '../assets/items/banana.jpg';
import apple from '../assets/items/apple.jpg';
import avocado from '../assets/items/avocado.jpg';
import berry from '../assets/items/berry.jpg';
import bread from '../assets/items/bread.jpg';
import carrot from '../assets/items/carrot.jpg';
import cheese from '../assets/items/cheese.jpg';
import chocolate from '../assets/items/chocolate.jpg';
import egg from '../assets/items/egg.jpg';
import fish from '../assets/items/fish.jpg';
import fruit from '../assets/items/fruit.jpg';
import meat from '../assets/items/meat.jpg';
import milk from '../assets/items/milk.jpg';
import mushroom from '../assets/items/mushroom.jpg';
import onion from '../assets/items/onion.jpg';
import pasta from '../assets/items/pasta.jpg';
import pear from '../assets/items/pear.jpg';
import salad from '../assets/items/salad.jpg';
import spice from '../assets/items/spice.jpg';
import tomato from '../assets/items/tomato.jpg';
import vegetable from '../assets/items/vegetable.jpg';
import yogurt from '../assets/items/yogurt.jpg';

const itemMapping = [
  { image: banana, keywords: ['banana', 'banane'] },
  { image: apple, keywords: ['apple', 'pomme'] },
  { image: avocado, keywords: ['avocado', 'avocat'] },
  { image: berry, keywords: ['berry', 'blueberry', 'strawberry', 'myrtille', 'fraise', 'framboise'] },
  { image: bread, keywords: ['bread', 'pain'] },
  { image: carrot, keywords: ['carrot', 'carrotte'] },
  { image: cheese, keywords: ['cheese', 'fromage', 'comté', 'mimolette', 'tomme', 'parmesan'] },
  { image: chocolate, keywords: ['chocolate', 'chocolat'] },
  { image: egg, keywords: ['egg', 'oeuf'] },
  { image: fish, keywords: ['fish', 'poisson', 'saumon', 'cabillot'] },
  { image: fruit, keywords: ['fruit'] },
  { image: meat, keywords: ['meat', 'viande', 'poulet', 'boeuf', 'porc', 'dinde'] },
  { image: milk, keywords: ['milk', 'lait'] },
  { image: mushroom, keywords: ['mushroom', 'champignon'] },
  { image: onion, keywords: ['onion', 'oignon'] },
  { image: pasta, keywords: ['pasta', 'pate', 'riz', 'pâte'] },
  { image: pear, keywords: ['pear', 'poire'] },
  { image: salad, keywords: ['salad', 'salade'] },
  { image: spice, keywords: ['spice', 'épice', 'curry', 'paprika', 'sel', 'poivre'] },
  { image: tomato, keywords: ['tomato', 'tomate'] },
  { image: vegetable, keywords: ['vegetable', 'légume', 'aubergine', 'poivron', 'poireau'] },
  { image: yogurt, keywords: ['yogurt', 'yaourt'] },
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
