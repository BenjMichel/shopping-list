import apple from '../assets/items/apple.jpg';
import avocado from '../assets/items/avocado.jpg';
import bacon from '../assets/items/bacon.jpg';
import bakingPowder from '../assets/items/bakingpowder.jpg';
import banana from '../assets/items/banana.jpg';
import berry from '../assets/items/berry.jpg';
import blueberry from '../assets/items/blueberry.jpg';
import bread from '../assets/items/bread.jpg';
import broccoli from '../assets/items/broccoli.jpg';
import butter from '../assets/items/butter.jpg';
import cacao from '../assets/items/cacao.jpg';
import carrot from '../assets/items/carrot.jpg';
import cereal from '../assets/items/cereal.jpg';
import cheese from '../assets/items/cheese.jpg';
import chocolate from '../assets/items/chocolate.jpg';
import cookie from '../assets/items/cookie.jpg';
import egg from '../assets/items/egg.jpg';
import fish from '../assets/items/fish.jpg';
import flour from '../assets/items/flour.jpg';
import fruit from '../assets/items/fruit.jpg';
import gnocchis from '../assets/items/gnocchis.jpg';
import hummus from '../assets/items/hummus.jpg';
import juice from '../assets/items/juice.jpg';
import maki from '../assets/items/maki.jpg';
import meat from '../assets/items/meat.jpg';
import milk from '../assets/items/milk.jpg';
import mushroom from '../assets/items/mushroom.jpg';
import nut from '../assets/items/nut.jpg';
import olive from '../assets/items/olive.jpg';
import onion from '../assets/items/onion.jpg';
import orange from '../assets/items/orange.jpg';
import pasta from '../assets/items/pasta.jpg';
import pear from '../assets/items/pear.jpg';
import pepper from '../assets/items/pepper.jpg';
import salad from '../assets/items/salad.jpg';
import sauce from '../assets/items/sauce.jpg';
import sausage from '../assets/items/sausage.jpg';
import seeds from '../assets/items/seeds.jpg';
import soap from '../assets/items/soap.jpg';
import spice from '../assets/items/spice.jpg';
import spinach from '../assets/items/spinach.jpg';
import sweetPotato from '../assets/items/sweetpotato.jpg';
import tea from '../assets/items/tea.jpg';
import tiramisu from '../assets/items/tiramisu.jpg';
import tomato from '../assets/items/tomato.jpg';
import vegetable from '../assets/items/vegetable.jpg';
import water from '../assets/items/water.jpg';
import wrap from '../assets/items/wrap.jpg';
import yogurt from '../assets/items/yogurt.jpg';

import defaultImage from '../assets/items/default.jpg';

export const categories = {
  fruitVegetable: 'Fruits et légumes',
  dairy: 'Laitiers',
  meatFish: 'Viande et poisson',
  groceries: 'Epicerie',
  drink: 'Boissons',
  other: 'Autre',
};

const itemMapping = [
  { image: apple, keywords: ['apple', 'pomme'], category: categories.fruitVegetable },
  { image: avocado, keywords: ['avocado', 'avocat'], category: categories.fruitVegetable },
  { image: bacon, keywords: ['bacon', 'lardon'], category: categories.meatFish },
  {
    image: bakingPowder,
    keywords: ['yeast', 'baking powder', 'levure', 'sucre', 'sirop'],
    category: categories.groceries,
  },
  { image: banana, keywords: ['banana', 'banane'], category: categories.fruitVegetable },
  {
    image: berry,
    keywords: ['berry', 'strawberry', 'myrtille', 'fraise', 'framboise', 'grenade'],
    category: categories.fruitVegetable,
  },
  { image: blueberry, keywords: ['myrtille', 'blueberry'], category: categories.fruitVegetable },
  { image: bread, keywords: ['bread', 'pain', 'baguette'], category: categories.groceries },
  { image: broccoli, keywords: ['broccoli'], category: categories.fruitVegetable },
  { image: butter, keywords: ['butter', 'beurre', 'margarine'], category: categories.dairy },
  { image: cacao, keywords: ['cacao', 'van houten'], category: categories.groceries },
  { image: carrot, keywords: ['carrot', 'carotte', 'carotte', 'coleslaw'], category: categories.fruitVegetable },
  { image: cereal, keywords: ['cereal', 'cereale'], category: categories.groceries },
  {
    image: cheese,
    keywords: [
      'cheese', 'fromage', 'comte', 'mimolette', 'tomme', 'parmesan', 'chevre',
      'madame loick', 'reblochon', 'mozzarella'],
    category: categories.dairy,
  },
  { image: chocolate, keywords: ['chocolate', 'chocolat'], category: categories.groceries },
  { image: cookie, keywords: ['biscuit', 'speculoos', 'oreo'], category: categories.groceries },
  { image: egg, keywords: ['egg', 'oeuf', 'œuf'], category: categories.meatFish },
  { image: fish, keywords: ['fish', 'poisson', 'saumon', 'cabillot', 'thon'], category: categories.meatFish },
  { image: flour, keywords: ['flour', 'farine'], category: categories.groceries },
  { image: fruit, keywords: ['fruit', 'compote'], category: categories.fruitVegetable },
  { image: hummus, keywords: ['hummus', 'houmous'], category: categories.groceries },
  { image: gnocchis, keywords: ['gnocchis', 'raviolis', 'tortellini'], category: categories.groceries },
  { image: juice, keywords: ['jus', 'jus de fruits'], category: categories.drink },
  { image: maki, keywords: ['maki', 'sushi', 'algues', 'wasabi'], category: categories.groceries },
  {
    image: meat,
    keywords: ['meat', 'viande', 'poulet', 'boeuf', 'porc', 'dinde', 'canard'],
    category: categories.meatFish,
  },
  { image: milk, keywords: ['milk', 'lait', 'creme', 'cream'], category: categories.dairy },
  { image: mushroom, keywords: ['mushroom', 'champignon'], category: categories.fruitVegetable },
  { image: nut, keywords: ['nut', 'noix', 'walnut', 'pistache', 'amande', 'noisette'], category: categories.groceries },
  { image: olive, keywords: ['huile d\'olive', 'huile', 'olive'], category: categories.groceries },
  { image: onion, keywords: ['onion', 'oignon'], category: categories.fruitVegetable },
  { image: orange, keywords: ['orange', 'citron', 'agrume', 'pamplemousse'], category: categories.fruitVegetable },
  { image: pasta, keywords: ['pasta', 'pate', 'riz', 'pâte'], category: categories.groceries },
  { image: pear, keywords: ['pear', 'poire'], category: categories.fruitVegetable },
  { image: pepper, keywords: ['pepper', 'poivron'], category: categories.fruitVegetable },
  { image: salad, keywords: ['salad', 'salade', 'mache', 'roquette', 'laitue'], category: categories.fruitVegetable },
  { image: sauce, keywords: ['sauce'], category: categories.groceries },
  { image: sausage, keywords: ['sausage', 'saucisse'], category: categories.meatFish },
  { image: seeds, keywords: ['seeds', 'graine'], category: categories.groceries },
  { image: soap, keywords: ['soap', 'savon', 'gel douche', 'shampoing', 'lessive'], category: categories.other },
  {
    image: spice,
    keywords: ['spice', 'epice', 'curry', 'paprika', 'sel', 'poivre', 'gingembre', 'poivre', 'basilic'],
    category: categories.groceries,
  },
  { image: spinach, keywords: ['spinach', 'epinard'], category: categories.fruitVegetable },
  { image: sweetPotato, keywords: ['sweet potato', 'patate'], category: categories.fruitVegetable },
  { image: tea, keywords: ['tea', 'the', 'infusion', 'rooibos'], category: categories.drink },
  { image: tiramisu, keywords: ['tiramisu', 'mascarpone'], category: categories.dairy },
  { image: tomato, keywords: ['tomato', 'tomate'], category: categories.fruitVegetable },
  {
    image: vegetable,
    keywords: [
      'vegetable', 'legume', 'aubergine', 'poireau', 'courgette', 'potiron', 'pois', 'haricot', 'bean',
      'cornichons',
    ],
    category: categories.fruitVegetable,
  },
  { image: water, keywords: ['water', 'eau', 'boisson'], category: categories.drink },
  { image: wrap, keywords: ['wrap', 'tortilla', 'burito'], category: categories.groceries },
  { image: yogurt, keywords: ['yogurt', 'yaourt'], category: categories.dairy },
];

function findItem(query) {
  const queryWithoutAccent = query.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
  const formattedQuery = queryWithoutAccent.endsWith('s')
    ? queryWithoutAccent.slice(0, -1)
    : queryWithoutAccent;
  return itemMapping.find((row) => row.keywords.includes(formattedQuery));
}

function getItem(item) {
  const name = item;
  if (findItem(name)) { return findItem(name); }

  if (name.length > 0) {
    const name2 = name.split(' ')[0];
    if (findItem(name2)) { return findItem(name2); }

    if (name.split(' ').length > 1) {
      const name3 = name.split(' ')[1];
      if (findItem(name3)) { return findItem(name3); }
    }

    if (name.split(' ').length > 2) {
      const name3 = name.split(' ')[2];
      if (findItem(name3)) { return findItem(name3); }
    }
  }
  return null;
}

export default function getImage(itemName = '') {
  const item = getItem(itemName);
  return item ? item.image : defaultImage;
}

export function getCategory(itemName) {
  const item = getItem(itemName);
  return item ? item.category : categories.other;
}
