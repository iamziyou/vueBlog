<template>
  <div>
    <showBlogs></showBlogs>
  </div>
</template>

<script>
  import addBlog from './components/addBlog.vue';
  import showBlogs from './components/showBlogs.vue'
export default {
    components: {
      'addBlog' : addBlog,
      'showBlogs' : showBlogs
    },
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
