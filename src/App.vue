<template>
  <div class="flex min-h-screen">
    <side-bar />
    <router-view />
  </div>
</template>
<script>
import SideBar from '@/components/layout/Sidebar.vue';

export default {
  components: {
    SideBar,
  },
};
</script>
<style lang="scss" src="./assets/css/common.scss"></style>
