<template>
  <div>
    <h1>正方体</h1>
    <!-- 方块 -->
    <div class="css3">
      <div class="canvas">
        <div class="m m1">1</div>
        <div class="m m2">2</div>
        <div class="m m3">3</div>
        <div class="m m4">4</div>
        <div class="m m5">5</div>
        <div class="m m6">6</div>
      </div>
    </div>
    <!-- 方块 end -->
  </div>
</template>
<script type="text/javascript">
export default {
  name: 'rotate',
  mounted() {},
};

</script>
<style type="text/css">



@keyframes scroll {
  100% {
    transform: rotate3d(1, 1, 1, 360deg);
  }
}

.canvas {
  height: 300px;
  width: 300px;
  margin: 0 auto;
  perspective: 1000px;
  position: relative;
  animation: scroll 4s linear 7s infinite;
  transform-style: preserve-3d;
}

/* 每个面大小、对齐方式*/
.m {
  width: 200px;
  height: 200px;
  text-align: center;
  font-size: 200px;
  line-height: 200px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0.5;
}

/* 设置一个动画、沿着 y轴旋转-90度 */
@keyframes m1 {
  100% {
    transform: rotateY(-90deg);
  }
}

/* 设置m1面颜色，旋转轴起点，动画*/
.m1 {
  background: #009688;
  transform-origin: left;
  animation: m1 1s linear 1s both;
  /* 使用动画m1,
  持续1s，
  动画函数匀速linear，
  启动前延迟1s,也就是说1秒后在启动，按次序执行；
  both:animation-fill-mode属性，属性规定当动画不播放时（当动画完成时，或当动画有一个延迟未开始播放时），要应用到元素的样式;如果不设置会返回到动画前状态 */
}


@keyframes m2 {
  100% {
    transform: rotateY(90deg);
  }
}

.m2 {
  background: #4caf50;
  transform-origin: right;
  animation: m2 1s linear 2s both;
}

@keyframes m3 {
  100% {
    transform: rotateX(90deg);
  }
}

.m3 {
  background: #8bc34a;
  transform-origin: top;
  animation: m3 1s linear 3s both;
}

@keyframes m4 {
  100% {
    transform: rotateX(-90deg);
  }
}

.m4 {
  background: #cddc39;
  transform-origin: bottom;
  animation: m4 1s linear 4s both;
}


@keyframes m5 {
  100% {
    transform: translateZ(200px);
  }
}

.m5 {
  background: #ffc107;
  animation: m5 1s linear 5s both;
}



@keyframes m6 {
  100% {
    transform: rotateY(180deg);
  }
}

.m6 {
  background: #ff9800;
  transform-origin: center;
  animation: m6 1s linear 6s both;
  opacity: 0.1;
}


/*
#view {
  perspective: 500px;
  width: 200px;
  height: 200px;
  margin: 200px auto;
  perspective-origin: 250px 100px;
}

@keyframes scroll {
  100% {
    transform: rotate3d(1, 1, 1, 360deg);
  }
}

#cube {
  width: 200px;
  height: 200px;
  position: relative;
  animation: scroll 2s linear 7s infinite;
  transform-style: preserve-3d;
}

.item {
  width: 200px;
  height: 200px;
  border: 1px solid black;
  font-size: 150px;
  text-align: center;
  background: yellow;
  opacity: 0.7;
  position: absolute;
}

@keyframes item1 {
  100% {
    transform: rotateY(-90deg);
  }
}

@keyframes item2 {
  100% {
    transform: rotateY(90deg);
  }
}

@keyframes item3 {
  100% {
    transform: rotateX(90deg);
  }
}

@keyframes item4 {
  100% {
    transform: rotateX(-90deg);
  }
}

@keyframes item5 {
  100% {
    transform: translateZ(200PX);
  }
}

@keyframes item6 {
  100% {
    transform: rotateY(180deg);
  }
}

#item1 {
  z-index: 6;
  background: yellow;
  transform-origin: left;
  animation: item1 1s linear 1s both;
}

#item2 {
  z-index: 5;
  background: red;
  transform-origin: right;
  animation: item2 1s linear 2s both;
}

#item3 {
  z-index: 4;
  background: green;
  transform-origin: top;
  animation: item3 1s linear 3s both;
}

#item4 {
  z-index: 3;
  background: blue;
  transform-origin: bottom;
  animation: item4 1s linear 4s both;
}

#item5 {
  z-index: 2;
  background: silver;
  transform-origin: center;
  animation: item5 1s linear 5s both;
}

#item6 {
  z-index: 1;
  background: pink;
  transform-origin: center;
  animation: item6 1s linear 6s both;
}

*/

</style>
