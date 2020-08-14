import { Component } from 'preact';
import './Item.css';
import getImage from './itemImages';
import checkImage from '../assets/check.png';

export default class Item extends Component {
  constructor() {
    super();
    this.state = {};
  }

  delete() {
    const { delete: deleteFunction } = this.props;
    this.setState({ deleteAnim: true });
    setTimeout(() => deleteFunction(), 500);
  }

  render() {
    const { item } = this.props;
    const { deleteAnim } = this.state;
    return (
      <div className={`card-item ${deleteAnim ? 'card-item-delete' : ''}`}>
        <span className="icon-container">
          <img
            alt={item}
            src={checkImage}
            onClick={() => this.delete()}
            className={`${deleteAnim ? 'icon-delete' : ''}`}
            style={{ width: 24 }}
          />
        </span>
        <div className="overlay" />
        <div className="item-image" style={{ backgroundImage: `url(${getImage(item)})` }}>
          <span className="item-text">{item.toLowerCase()}</span>
        </div>
      </div>
    );
  }
}
