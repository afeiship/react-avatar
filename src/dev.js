import './dev.scss';
import ReactAvatar from './main';


class App extends React.Component{
  render(){
    return (
      <div className="hello-react-avatar">
        <ReactAvatar url="http://www.baidu.com/img/bd_logo1.png" title="baidu's logo" size="48px" />
        <ReactAvatar url="http://himg.bdimg.com/sys/portrait/item/be10475f686d6c73db00.jpg" title="Fei's logo" size="30px" />
        <ReactAvatar url="https://img6.bdstatic.com/img/image/smallpic/xiaoqingxin1220.jpg" title="Fei's logo" size="30px" />
    </div>
    );
  }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
