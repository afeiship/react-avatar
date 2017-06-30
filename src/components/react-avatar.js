import './style.scss';

import PropTypes from 'prop-types';
import React from 'react';
import ReactLazyimg from 'react-lazyimg';
import classNames from 'classnames';
import noop from 'noop';
import objectFitImages from 'object-fit-images';

export default class extends React.PureComponent{
  static propTypes = {
    className:PropTypes.string,
    url:PropTypes.string,
    effect:PropTypes.oneOf([
      'fade',
      'replace'
    ]),
    lazy:PropTypes.bool,
    size:PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]),
    onLoad:PropTypes.func,
    radius:PropTypes.string,
  };

  static defaultProps = {
    lazy:false,
    radius:'100px',
    effect:'fade',
    size:'32px',
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
    const {className,radius,placeholder,url,effect,onLoad,lazy,...props} = this.props;
    return (
      <figure
        {...props}
         style={{
          width:size.width,
          height:size.height,
          borderRadius:radius
        }} className={classNames('react-avatar',className)}>
        <ReactLazyimg
          onLoad={onLoad}
          style={{borderRadius:radius}}
          lazy={lazy}
          className="avatar-img"
          effect={effect}
          url={url} />
      </figure>
    );
  }
}
