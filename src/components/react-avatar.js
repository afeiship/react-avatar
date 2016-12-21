import './style.scss';
import classNames from 'classnames';

export default class extends React.Component{
  static propTypes = {
    cssClass:React.PropTypes.string,
    url:React.PropTypes.string,
    title:React.PropTypes.string,
    size:React.PropTypes.string,
    radius:React.PropTypes.string,
  };

  static defaultProps = {
    radius:'100px'
  };

  constructor(props) {
    super(props);
    this.state = {
      url:props.url,
      title:props.title,
      size:props.size,
      radius:props.radius
    };
  }

  render(){
    return (
      <div style={{
          width:this.state.size,
          height:this.state.size,
          borderRadius:this.state.radius
        }} className={classNames('react-avatar',this.props.cssClass)}>
        <img src={this.state.url} title={this.state.title} />
      </div>
    );
  }
}
