<template>
  <div>
    <appHeader></appHeader>
    <router-view></router-view>
  </div>
</template>

<script>
  import addBlog from './components/addBlog.vue';
  import showBlogs from './components/showBlogs.vue';
  import listBlogs from './components/listBlogs.vue';
  import header from './components/header.vue';

  export default {
      components: {
        'addBlog' : addBlog,
        'showBlogs' : showBlogs,
        'listBlogs': listBlogs,
        'appHeader': header,
      },
      data () {
        return {

        }
      },
  }
</script>

<style>

</style>
