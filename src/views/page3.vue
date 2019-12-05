<template>
<div class="container">
  
    <!-- <div class="model-container">
    <model-gltf 
        src="Duck/glTF/duck.gltf" 
        :backgroundAlpha="bgAlpha"
        :backgroundColor="bgColor" 
        :rotation="rotation"
        @on-load="onLoad"
         :scale="scale"
        
        
        ></model-gltf>
        </div> -->
       
       <div class="model-container">
    <model-gltf 
        src="spaceship/spaceship.gltf" 
        :backgroundAlpha="bgAlpha"
        :backgroundColor="bgColor" 
        :rotation="rotation"
        @on-load="onLoad"
        :scale="scale"
        
        
        ></model-gltf>
        </div>

        
        
</div>
</template>

<script>
    import { ModelGltf } from 'vue-3d-model'

    export default {

        data () {
            return {
                bgColor: '#000',
                bgAlpha: 0,
                enableZoom: false,
                scale: { x: 0.5, y: 0.5, z: 0.5 },
                rotation: {
                x: 0,
                y: -Math.PI / 2,
                z: 0
            }
            }
        },

        methods: {
            onLoad () {
                this.rotate();
            },
            rotate () {
                this.rotation.y -= 0.005;
                requestAnimationFrame( this.rotate );
            }
        },

        components: {
            ModelGltf
        }
    }
</script>

<style scoped>

.container {
    background-image: url(../assets/images/4-space.jpg);
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 1000px;

}

.model-container {
    width: 100%;
    height: 100%;
}



</style>