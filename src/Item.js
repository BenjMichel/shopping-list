import { Component } from 'preact';
import './Item.css';
import getImage from './itemImages';

export default class Item extends Component {
  render() {
    const { item } = this.props;
    return (
      <div className="card-item">
        <span className="icon-container">
          <img src="https:icon.now.sh/check/24/ffffff" onClick={this.props.delete} />
        </span>
        <div className="overlay" />
        <div className="item-image" style={{ backgroundImage: `url(${getImage(item)})` }}>
          <span className="item-text">{item.toLowerCase()}</span></div>
      </div>
    );
  }
}
