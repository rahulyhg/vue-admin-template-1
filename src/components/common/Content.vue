<template>
  <div class="main-container">
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'PageContent',
  computed: {
    ...mapState({
      isCollapse: 'isCollapse'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-container {
  position: absolute;
  left: 0;
  right: 0;
  top: 60px;
  bottom: 0;
  background: #eee;
}
</style>
