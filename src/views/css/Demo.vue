<template>
  <div>
    <h1>旋转</h1>
    <div class="origin">
      <div class="rotate1">旋转</div>
    </div>
    <h1>彩带渐变</h1>
    <div class="gradient">background:linear-gradient</div>
    <h1>彩带渐变</h1>
    <div class="animation-gradient">background:linear-gradient</div>
  </div>
</template>
<script type="text/javascript">
export default {
  name: 'demo',
  mounted() {},
};

</script>
<style type="text/css">
.origin {
  background: #eee;
  border: 1px dotted #999;
  width: 200px;
  height: 200px;
  margin: 50px auto;
  font-size: 100px;
  perspective-origin: right 100px;
  perspective: 800px;
  transform-style: preserve-3d;
  unicode-bidi: embed;
  vertical-align: text-top;
}

.rotate1 {
  transform-origin: left;
  background: yellow;
  width: 100%;
  height: 100%;
  animation: m 2s ease-in 1s forwards;
}

@keyframes m {
  100% {
    transform: rotateY(-110deg);
  }
}


.gradient {
  height: 80px;
  text-align: center;
  line-height: 80px;
  font-size: 40px;
  color: #888;
  background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet);
  /*background: linear-gradient(left right, red, orange, yellow, green, blue, indigo, violet);*/
  /*background: linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet);*/
}

.animation-gradient {
  height: 80px;
  text-align: center;
  line-height: 80px;
  font-size: 40px;
  color: #888;
  animation: g 9s ease-in 1s both;
}

@keyframes g {
  0% {
    background: linear-gradient(left right, red, orange);
  }

  15% {
    background: linear-gradient(left right, orange, yellow);
  }

  30% {
    background: linear-gradient(left right, yellow, green);
  }

  45% {
    background: linear-gradient(left right, green, blue);
  }

  60% {
    background: linear-gradient(left right, blue, indigo);
  }

  75% {
    background: linear-gradient(left right, indigo);
  }



  90% {
    background: linear-gradient(to right, violet);
  }

  100% {
    background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet);
    /* 标准的语法 */
  }

}

</style>
