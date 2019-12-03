<template>
<div id="container1">
<!-- <div id="container"> -->
<parallax-container class="container">

 <parallax-element :parallaxStrength="50" type="rotation" tag="div" class="absolute">
        <img src="../assets/images/Ellipse2.png" alt="">
     </parallax-element>

    <parallax-element :parallaxStrength="50" type="rotation" tag="div" class="absolute">
        <img src="../assets/images/Ellipse1.png" alt="">
     </parallax-element>
    
 <parallax-element :parallaxStrength="50" type="rotation" tag="img" class="absolute" :scr="img1">
        <!-- <img src="../assets/images/Giraffe2.png" alt=""> -->
     </parallax-element>

</parallax-container>
</div>
<!-- </div> -->
</template>


<script>
import Vue from 'vue'
import { ParallaxContainer, ParallaxElement } from 'vue-mouse-parallax'

Vue.component('parallax-container', ParallaxContainer)
Vue.component('parallax-element', ParallaxElement)



export default {
  name: 'page',
  components: {
    ParallaxContainer, ParallaxElement
  },
  data () {

    return {
      img1: require('@/assets/images/Ellipse1.png'),
      img2: require('@/assets/images/Ellipse2.png'),
      img3: require('@/assets/images/Giraffe2.png'),
    }
    
  }
  
}

</script>

<style lang="scss" scoped>

#container1 {
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  position: relative;
  height:400px;
  width: 400px;
  z-index: 1;
}

.absolute {
  position:absolute;
  top:0;
  left:0;
  height:100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

// img {
//   height: 100%;
//   width: 100%;
// }








</style>