<template>
  <div id="app" class="container">
    <WorkOrder />
  </div>
</template>

<script>
import Home from './views/Home/index'
import WorkOrder from './views/WorkOrder/index'

export default {
  name: 'app',
  components: {
    Home, WorkOrder,
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.container {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
}
</style>
