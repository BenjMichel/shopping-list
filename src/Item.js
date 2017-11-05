import { Component } from 'preact';
import './Item.css';
import getImage from './itemImages';

export default class Item extends Component {
  render() {
    const { item } = this.props;
    return (
      <div className="card-item">
        <img src='https:icon.now.sh/check/24' onClick={this.props.delete} />
        <span>{item.toLowerCase()}</span>
        {getImage(item) && <img className="item-image" src={getImage(item)} />}
      </div>
    );
  }
}
