# 飞鸟集

show a chapter of the Stray Birds

随机显示一条飞鸟集里面的诗句

## install

```
[sudo] npm i -g stray-bird
```

## usage

```
> sb
Stray Birds - Chapter 135
Rabindranath Tagore

阴雨的黄昏，风无休止地吹着。
我看着摇曳的树枝，想念万物的伟大。
This rainy evening the wind is restless.
I look at the swaying branches and ponder over the greatness of all things.   
```

or 

```
> sb 325
Stray Birds - Chapter 325
Rabindranath Tagore

“我相信你的爱。”让这句话做我的最后的话。
Let this be my last word, that I trust thy love.
```

or

```
npm i stray-bird --save
```

```javascript
var s = require('stray-bird');
var chapter = s() // a random chapter
var chapter_325 = s(325) // a certern chapter
```
