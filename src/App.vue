<template>
  <div>
    <showBlogs></showBlogs>
    <list-blogs></list-blogs>
  </div>
</template>

<script>
  import addBlog from './components/addBlog.vue';
  import showBlogs from './components/showBlogs.vue'
  import listBlogs from './components/listBlogs.vue'

export default {
    components: {
      'addBlog' : addBlog,
      'showBlogs' : showBlogs,
        'listBlogs': listBlogs
    },
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
