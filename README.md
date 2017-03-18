# 飞鸟集

show a random chapter of the Stray Birds

随机显示一条飞鸟集里面的诗句

## usage

在页面中引入js，然后调用方法即可

```html
<!--引入js-->
<script src="stray-bird.min.js"></script>

<script>
  //调用相关api，获取一个随机的章节并写入到页面
  document.write(stray_bird().content);
</script>
```

## 数据格式

```js

// randome chapter

var chapter = stray_bird();

chapter == {
  idx: 161,
  content: "/r/n蛛网好象要捉露点，却捉住了苍蝇。/r/nThe cobweb pretends to catch dewdrops and catches flies."
}

// if you want a specific chapter, please use stray_bird(id), id should between 0, 324

```