# 飞鸟集

show a random chapter of the Stray Birds

随机显示一条飞鸟集里面的诗句

## usage

```html
<!--引入js-->
<script src="https://git.suntao.science/suntao/stray-bird/raw/browser/stray-bird.min.js"></script>

<script>
  //调用相关api，获取一个随机的章节并写入到页面
  document.write(stray_bird().content);
</script>
```

# 数据格式

```js
{
  idx: 161, 
  content: "/r/n蛛网好象要捉露点，却捉住了苍蝇。/r/nThe cobweb pretends to catch dewdrops and catches flies."
}
```