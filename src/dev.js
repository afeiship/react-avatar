import './dev.scss';
import ReactAvatar from './main';


class App extends React.Component{
  render(){
    return (
      <div className="hello-react-avatar">
        <ReactAvatar url="http://www.baidu.com/img/bd_logo1.png" title="baidu's logo" size="36px" />
        <ReactAvatar
        onClick={()=>{console.log('click:I am gooogle')}}
        placeholder="http://himg.bdimg.com/sys/portrait/item/be10475f686d6c723db0023244.jpg"
        url="https://www.google.co.jp/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" title="Fei's logo" size="30px" />
        <ReactAvatar url="https://img6.bdstatic.com/img/image/smallpic/xiaoqingxin1220.jpg" title="Fei's logo" size="30px" />
        <ReactAvatar
        radius="0" url="http://www.myexception.cn/u/cms/www/201308/301646321krk.jpg" title="Fei's logo" radius="0" size={{
            width:'36px',
            height:'30px'
          }} />
    </div>
    );
  }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
