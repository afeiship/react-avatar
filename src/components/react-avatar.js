import PropTypes from 'prop-types';
import React,{ Component } from 'react';
import ReactLazyimg from 'react-lazyimg';
import classNames from 'classnames';
import noop from 'noop';
import objectFitImages from 'object-fit-images';

export default class extends Component{
  static propTypes = {
    className:PropTypes.string,
    url:PropTypes.string,
    effect:PropTypes.oneOf([
      'fade',
      'replace'
    ]),
    lazy:PropTypes.bool,
    size:PropTypes.array,
    onLoad:PropTypes.func,
    radius:PropTypes.string,
    extra:PropTypes.element,
  };

  static defaultProps = {
    lazy:false,
    radius:'100px',
    effect:'fade',
    size: ['32px'],
    onLoad:noop
  };

  componentDidMount(){
    if(!objectFitImages.supportsObjectFit){
      const images = document.querySelectorAll('.react-avatar img');
      objectFitImages(images, { watchMQ:true });
    }
  }

  render(){
    const {
      className,
      radius,
      placeholder,
      url,
      effect,
      onLoad,
      lazy,
      size,
      extra,
      ...props
    } = this.props;

    return (
      <figure
        {...props}
         style={{
          width: size[0],
          height:size[1] || size[0],
          borderRadius:radius
        }} className={classNames('react-avatar',className)}>
        <ReactLazyimg
          onLoad={onLoad}
          style = {{borderRadius:radius}}
          lazy={lazy}
          className="react-avatar-img"
          effect={effect}
          url={url} />
        { extra }
      </figure>
    );
  }
}
