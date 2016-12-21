#react-avatar
> Avatar for react.


## resource:
+ http://www.cnblogs.com/Kummy/p/4966937.html
+ https://github.com/steven5538/vue-button
+ https://yarnpkg.com/en/docs/install


## props:
| name | type | value | description |
| :----| :----| :----| :----|
| cssClass  | string | '' | Customize css class |
| url  | string | '' | Image url |
| title  | string | '' | Image title |
| size  | string | '' | Image size(width/height) |
| radius  | string | '10px' | border radius for image |


## usage:
+ install:
```bash
npm install --save afeiship/react-avatar

#OR

yarn install afeiship/react-avatar
```

+ code:
```html
<ReactAvatar url="http://www.baidu.com/img/bd_logo1.png" title="baidu's logo" size="36px" />
<ReactAvatar url="http://himg.bdimg.com/sys/portrait/item/be10475f686d6c73db00.jpg" title="Fei's logo" size="30px" />
<ReactAvatar url="https://img6.bdstatic.com/img/image/smallpic/xiaoqingxin1220.jpg" title="Fei's logo" size="30px" />
<ReactAvatar url="http://www.myexception.cn/u/cms/www/201308/301646321krk.jpg" title="Fei's logo" radius="0" size={{
    width:'36px',
    height:'30px'
  }} />
```
