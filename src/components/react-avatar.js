import './style.scss';
import React,{PropTypes} from 'react';
import classNames from 'classnames';
import ReactLazyimg from 'react-lazyimg';
import noop from 'noop';

export default class extends React.Component{
  static propTypes = {
    className:PropTypes.string,
    url:PropTypes.string,
    title:PropTypes.string,
    size:PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]),
    onLoad:PropTypes.func,
    radius:PropTypes.string,
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
    const {className,radius,title,placeholder,url,onLoad,...props} = this.props;
    return (
      <div
        {...props}
         style={{
          width:size.width,
          height:size.height,
          borderRadius:radius
        }} className={classNames('react-avatar',className)}>
        <ReactLazyimg onLoad={onLoad} style={{borderRadius:radius}} className="avatar-img" effect="fade" url={url} title={title} />
      </div>
    );
  }
}
