<template>
<div class="container">
    <model-gltf 
        src="Duck/glTF/duck.gltf" 
        :backgroundAlpha="bgAlpha"
        :backgroundColor="bgColor" 
        :rotation="rotation"
        @on-load="onLoad"
        
        
        ></model-gltf>
        </div>
</template>

<script>
    import { ModelGltf } from 'vue-3d-model'

    export default {

        data () {
            return {
                bgColor: '#000',
                bgAlpha: 0,
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
                this.rotation.y -= 0.01;
                requestAnimationFrame( this.rotate );
            }
        },

        components: {
            ModelGltf
        }
    }
</script>

<style>

.container {
    background-image: url(../assets/images/4-space.jpg);

}

</style>