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
    this.state = {
      photo: photos[Math.floor(Math.random() * photos.length)]
    };
  }

  renderHome() {
    return (
      <div className="container">
        <div className="background" style={{ backgroundImage: `url(${this.state.photo})` }} />
        <h1>Shopping list!</h1>
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
        <input className="input" />
        <div className="footer" onClick={() => this.setState({ showAdd: true })}>
          ajouter
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
