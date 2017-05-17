import './style.scss';

import React,{PropTypes} from 'react';

import ReactLazyimg from 'react-lazyimg';
import classNames from 'classnames';
import noop from 'noop';
import objectFitImages from 'object-fit-images';

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

  componentDidMount(){
    if(!objectFitImages.supportsObjectFit){
      this.doObjectFitFix();
    }
  }

  doObjectFitFix(){
    const images = document.querySelectorAll('.react-avatar img');
    objectFitImages(images, {watchMQ:true});
  }

  render(){
    const size = this.processSize(this.props.size);
    const {className,radius,title,placeholder,url,onLoad,...props} = this.props;
    return (
      <figure
        {...props}
         style={{
          width:size.width,
          height:size.height,
          borderRadius:radius
        }} className={classNames('react-avatar',className)}>
        <ReactLazyimg onLoad={onLoad} style={{borderRadius:radius}} className="avatar-img" effect="fade" url={url} title={title} />
      </figure>
    );
  }
}
