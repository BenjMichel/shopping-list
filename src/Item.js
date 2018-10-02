import { Component } from 'preact';
import './Item.css';
import getImage from './itemImages';

export default class Item extends Component {
  constructor() {
    super();
    this.state = {};
  }

  delete() {
    this.setState({ deleteAnim: true });
    setTimeout(() => this.props.delete(), 500);
  }

  render() {
    const { item } = this.props;
    return (
      <div className={`card-item ${this.state.deleteAnim ? 'card-item-delete' : ''}`}>
        <span className="icon-container">
          <img
            src="https://icon.now.sh/check/24/ffffff"
            onClick={() => this.delete()}
            className={`${this.state.deleteAnim ? 'icon-delete' : ''}`}
          />
        </span>
        <div className="overlay" />
        <div className="item-image" style={{ backgroundImage: `url(${getImage(item)})` }}>
          <span className="item-text">{item.toLowerCase()}</span></div>
      </div>
    );
  }
}
