import { Component } from 'preact';
import './style.css';
import Item from './Item';
import photo1 from '../assets/backgrounds/photo1.jpg';
import photo2 from '../assets/backgrounds/photo2.jpg';
import photo3 from '../assets/backgrounds/photo3.jpg';
import photo4 from '../assets/backgrounds/photo4.jpg';
import photo5 from '../assets/backgrounds/photo5.jpg';
import photo6 from '../assets/backgrounds/photo6.jpg';
import photo7 from '../assets/backgrounds/photo7.jpg';
import photo8 from '../assets/backgrounds/photo8.jpg';

const photos = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8];

export default class App extends Component {
  constructor() {
    super();
    const currentItems = (typeof localStorage !== 'undefined') ? JSON.parse(localStorage.getItem('currentItems')) : [];
    this.state = {
      photo: photos[Math.floor(Math.random() * photos.length)],
      currentItems: currentItems || [],
    };
  }

  addItemToList(item) {
    if (!item) {
      this.setState({ showAdd: false });
      return;
    }
    const currentItems = [...this.state.currentItems, item];
    this.setState({ showAdd: false, currentItems });
    if (typeof localStorage !== 'undefined')
      localStorage.setItem('currentItems', JSON.stringify(currentItems));
  }

  openAdd() {
    window.scroll(0, 0);
    this.setState({ showAdd: true });
  }

  deleteItem(item) {
    const currentItems = this.state.currentItems.filter(itemIt => itemIt !== item);
    this.setState({ currentItems });
    if (typeof localStorage !== 'undefined')
      localStorage.setItem('currentItems', JSON.stringify(currentItems));
  }

  renderHome() {
    return (
      <div className="container">
        <div className="background" style={{ backgroundImage: `url(${this.state.photo})` }} />
        <div className="background2" />
        <h1>Shopping list!</h1>
        <div>
          {this.state.currentItems.map(item =>
            <Item item={item} delete={() => this.deleteItem(item)} />
          )}
        </div>
        <div className="footer" onClick={() => this.openAdd()}>
          ajouter un ingrédient
        </div>
      </div>
    );
  }

  renderAdd() {
    return (
      <div className="container">
        <div className="background" style={{ backgroundImage: `url(${this.state.photo})` }} />
        <div className="background2" />
        <div className="content">
          <div className="card">
            <input
              type="text"
              className="input"
              onInput={e => this.setState({ currentItem: e.target.value })}
            />
          </div>
        </div>
        <div className="footer" onClick={() => this.addItemToList(this.state.currentItem)}>
          valider
        </div>
      </div>
    );
  }

  render() {
    if (this.state.showAdd) {
      return this.renderAdd();
    }
    return this.renderHome();
  }
}
