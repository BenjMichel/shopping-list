import { Component } from 'preact';
import './style.css';
import photo1 from './assets/photo1.jpg'
import photo2 from './assets/photo2.jpg'
import photo3 from './assets/photo3.jpg'
import photo4 from './assets/photo4.jpg'

const photos = [photo1, photo2, photo3, photo4];

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
    const currentItems = [...this.state.currentItems, item];
    this.setState({ showAdd: false, currentItems });
    if (typeof localStorage !== 'undefined')
      localStorage.setItem('currentItems', JSON.stringify(currentItems));
  }

  renderHome() {
    return (
      <div className="container">
        <div className="background" style={{ backgroundImage: `url(${this.state.photo})` }} />
        <h1>Shopping list!</h1>
        {this.state.currentItems.map(item => <div className="card-item">{item}</div>)}
        <div className="footer" onClick={() => this.setState({ showAdd: true })}>
          ajouter
        </div>
      </div>
    );
  }

  renderAdd() {
    return (
      <div className="container">
        <div className="background" style={{ backgroundImage: `url(${this.state.photo})` }} />
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
