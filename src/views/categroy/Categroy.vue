<template>
  <div class="wrapper">
    <ul class="content">
      <li>第1个</li>
      <li>第2个</li>
      <li>第3个</li>
      <li>第4个</li>
      <li>第5个</li>
      <li>第6个</li>
      <li>第7个</li>
      <li>第8个</li>
      <li>第9个</li>
      <li>第10个</li>
      <li>第11个</li>
      <li>第12个</li>
      <li>第13个</li>
      <li>第14个</li>
      <li>第15个</li>
      <li>第16个</li>
      <li>第17个</li>
      <li>第18个</li>
      <li>第19个</li>
      <li>第20个</li>
      <li>第21个</li>
      <li>第22个</li>
      <li>第23个</li>
      <li>第24个</li>
      <li>第25个</li>
      <li>第26个</li>
      <li>第27个</li>
      <li>第28个</li>
      <li>第29个</li>
      <li>第30个</li>
      <li>第31个</li>
      <li>第32个</li>
      <li>第33个</li>
      <li>第34个</li>
      <li>第35个</li>
      <li>第36个</li>
      <li>第37个</li>
      <li>第38个</li>
      <li>第39个</li>
      <li>第40个</li>
      <li>第41个</li>
      <li>第42个</li>
      <li>第43个</li>
      <li>第44个</li>
      <li>第45个</li>
      <li>第46个</li>
      <li>第47个</li>
      <li>第48个</li>
      <li>第49个</li>
      <li>第50个</li>
      <li>第51个</li>
      <li>第52个</li>
      <li>第53个</li>
      <li>第54个</li>
      <li>第55个</li>
      <li>第56个</li>
      <li>第57个</li>
      <li>第58个</li>
      <li>第59个</li>
      <li>第60个</li>
      <li>第61个</li>
      <li>第62个</li>
      <li>第63个</li>
      <li>第64个</li>
      <li>第65个</li>
      <li>第66个</li>
      <li>第67个</li>
      <li>第68个</li>
      <li>第69个</li>
      <li>第70个</li>
      <li>第71个</li>
      <li>第72个</li>
      <li>第73个</li>
      <li>第74个</li>
      <li>第75个</li>
      <li>第76个</li>
      <li>第77个</li>
      <li>第78个</li>
      <li>第79个</li>
      <li>第80个</li>
      <li>第81个</li>
      <li>第82个</li>
      <li>第83个</li>
      <li>第84个</li>
      <li>第85个</li>
      <li>第86个</li>
      <li>第87个</li>
      <li>第88个</li>
      <li>第89个</li>
      <li>第90个</li>
      <li>第91个</li>
      <li>第92个</li>
      <li>第93个</li>
      <li>第94个</li>
      <li>第95个</li>
      <li>第96个</li>
      <li>第97个</li>
      <li>第98个</li>
      <li>第99个</li>
      <li>第100个</li>
    </ul>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: 'Categroy',
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      this.scroll = new BScroll('.wrapper' , {
        probeType: 3,
        pullUpLoad: true
      })
      this.scroll.on('scroll',(position) => {
        // console.log(position);
      })
      this.scroll.on('pullingUp',() => {
        console.log('上拉加载更多');
      })
    }
  }
</script>

<style scoped>
  .wrapper {
    height: 200px;
    background: red;
    overflow: hidden;
  }
</style>