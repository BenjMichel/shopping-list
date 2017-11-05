import { Component } from 'preact';
import './Item.css';
import getImage from './itemImages';

export default class Item extends Component {
  render() {
    const { item } = this.props;
    return (
      <div className="card-item">
        <span className="icon-container">
          <img src='https:icon.now.sh/check/24/ffffff' onClick={this.props.delete} />
        </span>
        <span>{item.toLowerCase()}</span>
        {getImage(item) && <img className="item-image" src={getImage(item)} />}
      </div>
    );
  }
}
