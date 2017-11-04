import { Component } from 'preact';
import './style.css';
import photo from './assets/photo1.jpg'

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  renderHome() {
    return (
      <div className="container" style={{ backgroundImage: `url(${photo})` }}>
        <h1>Shopping list!</h1>
        <div className="footer" onClick={() => this.setState({ showAdd: true })}>
          ajouter
        </div>
      </div>
    );
  }

  renderAdd() {
    return (
      <div>Hello</div>
    );
  }

  render() {
    if (this.state.showAdd) {
      return this.renderAdd();
    }
    return this.renderHome();
  }
}
