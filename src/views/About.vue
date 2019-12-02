<template>
  <Scene>
  <Camera type="arcRotate" :radius="7.5" :beta="Math.PI / 3"></Camera>
  <HemisphericLight></HemisphericLight>
  <Asset src="https://www.babylonjs-playground.com/scenes/skull.babylon" :scaling="[0.02, 0.02, 0.02]" :position="[4, 0.5, 0]"></Asset>
  <Asset src="https://www.babylonjs-playground.com/scenes/Buggy/glTF/buggy.gltf" :scaling="[0.02, 0.02, 0.02]" :position="[1, 0, -1]" :rotation="[0, Math.PI / 2, 0]"></Asset>
  <Asset src="https://www.babylonjs-playground.com/scenes/StanfordBunny.obj" :scaling="[7.5, 7.5, 7.5]" :position="[-4, -0.25, -0.5]" :rotation="[0, Math.PI, 0]"></Asset>
  //to jest model ktory mi nie dziala
  //w assetsach sa dwa, jeden glb, drugi gltf, zaden nie chce dzialac, jak podaje url ze skryptu z v-bind to tez  nie dziala
  //errory mozesz podejrzec w konsoli, mi sie wydaje ze to ten webpack swiruje, cokolwiek to jest
  <Asset src="../assets.hammer.glb" :scaling="[0.02, 0.02, 0.02]" :position="[-2, 0, -0.5]"></Asset>
</Scene>
</template>
