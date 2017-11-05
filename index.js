import { Component } from 'preact';
import './src/style.css';
import Item from './src/Item'

const photosNumber = 8;

export default class App extends Component {
  constructor() {
    super();
    const currentItems = (typeof localStorage !== 'undefined') ? JSON.parse(localStorage.getItem('currentItems')) : [];
    this.state = {
      photoName: Math.floor(Math.random() * photosNumber) + 1,
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
        <div className="background" style={{ backgroundImage: `url(/assets/backgrounds/photo${this.state.photoName}.jpg)` }} />
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
        <div className="background" style={{ backgroundImage: `url(/assets/backgrounds/photo${this.state.photoName}.jpg)` }} />
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
