import './style.scss';
import classNames from 'classnames';

export default class extends React.Component{
  static propTypes = {
    cssClass:React.PropTypes.string,
    url:React.PropTypes.string,
    title:React.PropTypes.string,
    size:React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.object,
    ]),
    radius:React.PropTypes.string,
  };

  static defaultProps = {
    radius:'100px',
    size:'32px',
    title:''
  };

  constructor(props) {
    super(props);

    this.state = {
      url:props.url,
      title:props.title,
      size:this.processSize(),
      radius:props.radius
    };
  }

  processSize(){
    let size = this.props.size;
    if(typeof size ==='string'){
      return {
        width:size,
        height:size
      };
    }
    return size;
  }

  render(){
    return (
      <div style={{
          width:this.state.size.width,
          height:this.state.size.height,
          borderRadius:this.state.radius
        }} className={classNames('react-avatar',this.props.cssClass)}>
        <img src={this.state.url} title={this.state.title} />
      </div>
    );
  }
}
