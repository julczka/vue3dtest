<template>
<div id="container1">
<!-- <div id="container"> -->
<parallax-container class="container">

 <parallax-element :parallaxStrength="-50" type="depth" tag="img" class="absolute" :src="img1">
         
     </parallax-element>

    <parallax-element :parallaxStrength="50" type="depth" tag="img" class="absolute" :src="img2">
         
     </parallax-element>
    
 <parallax-element :parallaxStrength="30" type="depth" tag="img" class="absolute" :src="img3" id="kurwa">
      
     </parallax-element>

      <parallax-element :parallaxStrength="-10" type="depth" tag="img" class="absolute" :src="img4" id="kurwa">
      
     </parallax-element>

     <parallax-element :parallaxStrength="60" type="depth" tag="p" class="absolute">
      LALALALA
     </parallax-element>

      <parallax-element :parallaxStrength="20" type="depth" tag="img" class="absolute" :src="img5" id="kurwa">
      
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
      img1: require('@/assets/images/1.png'),
      img2: require('@/assets/images/2.png'),
      img3: require('@/assets/images/3.png'),
      img4: require('@/assets/images/4.png'),
      img5: require('@/assets/images/5.png'),
    }
    
  }
  
}

</script>

<style lang="scss" scoped>

#container1 {
  display: flex;
  align-items: center;
  justify-content: center;
  clip-path: polygon(0 25%, 100% 26%, 100% 71%, 0 71%);
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