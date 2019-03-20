<template>
  <el-container class="app-wrapper" :class="{active: isCollapse}">
      <page-sidebar/>
      <div class="app-main is-vertical">
        <page-navbar/>
        <page-content/>
      </div>
  </el-container>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import PageSidebar from '@/components/common/Sidebar'
import PageNavbar from '@/components/common/Navbar'
import PageContent from '@/components/common/Content'
export default {
  name: 'Home',
  components: {
    PageSidebar,
    PageNavbar,
    PageContent
  },
  computed: {
    ...mapState({
      currntwidth: 'screenWidth',
      currntheight: 'screenHeight',
      isCollapse: 'isCollapse'
    })
  },
  methods: {
    ...mapMutations(['changeScreenWidth', 'changeScreenHeight'])
  },
  mounted () {
    let _this = this
    // 监听窗口大小变化
    window.onresize = function () {
      const width = document.documentElement.clientWidth
      const height = document.documentElement.clientHeight
      if (width !== _this.currntwidth) {
        _this.changeScreenWidth(width)
      }
      if (height !== _this.currntheight) {
        _this.changeScreenHeight(height)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}

.app-wrapper  .app-main {
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  transition: all .3s ease;
  left: 210px;
  top: 0;
  right: 0;
  height: 2000px;
  z-index: 1;
}

.active {
  width: 100%;
}

.active .app-main {
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  transition: all .3s ease;
  left: 64px;
  top: 0;
  right: 0;
  height: 2000px;
  z-index: 1;
}

.app-wrapper:after {
  content: "";
  display: block;
  clear: both;
}
</style>
