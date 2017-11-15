import apple from '../assets/items/apple.jpg';
import avocado from '../assets/items/avocado.jpg';
import bacon from '../assets/items/bacon.jpg';
import banana from '../assets/items/banana.jpg';
import berry from '../assets/items/berry.jpg';
import bread from '../assets/items/bread.jpg';
import carrot from '../assets/items/carrot.jpg';
import cereal from '../assets/items/cereal.jpg';
import cheese from '../assets/items/cheese.jpg';
import chocolate from '../assets/items/chocolate.jpg';
import cookie from '../assets/items/cookie.jpg';
import egg from '../assets/items/egg.jpg';
import fish from '../assets/items/fish.jpg';
import fruit from '../assets/items/fruit.jpg';
import gnocchis from '../assets/items/gnocchis.jpg';
import juice from '../assets/items/juice.jpg';
import meat from '../assets/items/meat.jpg';
import milk from '../assets/items/milk.jpg';
import mushroom from '../assets/items/mushroom.jpg';
import nut from '../assets/items/nut.jpg';
import olive from '../assets/items/olive.jpg';
import onion from '../assets/items/onion.jpg';
import pasta from '../assets/items/pasta.jpg';
import pear from '../assets/items/pear.jpg';
import salad from '../assets/items/salad.jpg';
import soap from '../assets/items/soap.jpg';
import spice from '../assets/items/spice.jpg';
import tea from '../assets/items/tea.jpg';
import tiramisu from '../assets/items/tiramisu.jpg';
import tomato from '../assets/items/tomato.jpg';
import vegetable from '../assets/items/vegetable.jpg';
import wrap from '../assets/items/wrap.jpg';
import yogurt from '../assets/items/yogurt.jpg';

import defaultImage from '../assets/items/default.jpg';

const itemMapping = [
  { image: apple, keywords: ['apple', 'pomme'] },
  { image: avocado, keywords: ['avocado', 'avocat'] },
  { image: bacon, keywords: ['bacon', 'lardon'] },
  { image: banana, keywords: ['banana', 'banane'] },
  { image: berry, keywords: ['berry', 'blueberry', 'strawberry', 'myrtille', 'fraise', 'framboise'] },
  { image: bread, keywords: ['bread', 'pain', 'baguette'] },
  { image: carrot, keywords: ['carrot', 'carrotte', 'coleslaw'] },
  { image: cereal, keywords: ['cereal', 'cereale'] },
  { image: cheese, keywords: ['cheese', 'fromage', 'comte', 'mimolette', 'tomme', 'parmesan'] },
  { image: chocolate, keywords: ['chocolate', 'chocolat'] },
  { image: cookie, keywords: ['biscuit', 'speculos', 'oreo'] },
  { image: egg, keywords: ['egg', 'oeuf'] },
  { image: fish, keywords: ['fish', 'poisson', 'saumon', 'cabillot'] },
  { image: fruit, keywords: ['fruit'] },
  { image: gnocchis, keywords: ['gnocchis', 'raviolis'] },
  { image: juice, keywords: ['jus', 'jus de fruits'] },
  { image: meat, keywords: ['meat', 'viande', 'poulet', 'boeuf', 'porc', 'dinde', 'canard'] },
  { image: milk, keywords: ['milk', 'lait', 'creme', 'cream'] },
  { image: mushroom, keywords: ['mushroom', 'champignon'] },
  { image: nut, keywords: ['nut', 'noix', 'walnut', 'pistache'] },
  { image: olive, keywords: ['huile d\'olive', 'huile', 'olive'] },
  { image: onion, keywords: ['onion', 'oignon'] },
  { image: pasta, keywords: ['pasta', 'pate', 'riz', 'pâte'] },
  { image: pear, keywords: ['pear', 'poire'] },
  { image: salad, keywords: ['salad', 'salade'] },
  { image: soap, keywords: ['soap', 'savon', 'gel douche', 'shampoing'] },
  { image: spice, keywords: ['spice', 'epice', 'curry', 'paprika', 'sel', 'poivre'] },
  { image: tea, keywords: ['tea', 'the', 'infusion'] },
  { image: tiramisu, keywords: ['tiramisu', 'mascarpone'] },
  { image: tomato, keywords: ['tomato', 'tomate'] },
  { image: vegetable, keywords: ['vegetable', 'legume', 'aubergine', 'poivron', 'poireau'] },
  { image: wrap, keywords: ['wrap', 'tortilla', 'burito'] },
  { image: yogurt, keywords: ['yogurt', 'yaourt'] },
];

function findItem(query) {
  const queryWithoutAccent = query.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  return itemMapping.find(row => row.keywords.includes(queryWithoutAccent));
}

export default function getImage(item = '') {
  const name = item.toLowerCase();
  if (findItem(name)) { return findItem(name).image; }

  if (name.length > 0) {
    const name2 = name.slice(0, -1);
    if (findItem(name2)) { return findItem(name2).image; }
  }

  if (name.length > 0) {
    const name2 = name.split(' ')[0];
    if (findItem(name2)) { return findItem(name2).image; }
  }

  return defaultImage;
};
