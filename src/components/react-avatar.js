import './style.scss';
import classNames from 'classnames';
import ReactLazyimg from 'react-lazyimg';
import noop from 'noop';

export default class extends React.Component{
  static propTypes = {
    cssClass:React.PropTypes.string,
    onClick:React.PropTypes.func,
    url:React.PropTypes.string,
    title:React.PropTypes.string,
    size:React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.object,
    ]),
    onLoad:React.PropTypes.func,
    radius:React.PropTypes.string,
  };

  static defaultProps = {
    radius:'100px',
    size:'32px',
    title:'',
    onLoad:noop
  };

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
    const size = this.processSize(this.props.size);
    const {cssClass,radius,title,placeholder,url,onLoad,onClick} = this.props;
    return (
      <div
        onClick={onClick}
         style={{
          width:size.width,
          height:size.height,
          borderRadius:radius
        }} className={classNames('react-avatar',cssClass)}>
        <ReactLazyimg onLoad={onLoad} style={{borderRadius:radius}} className="avatar-img" effect="fade" url={url} title={title} />
      </div>
    );
  }
}
