<template>
    <div id="showBlogs">
        <h1>All Blog Articles</h1>
        <div v-for="blog in blogs" class="singleBlog">
            <h2>{{blog.title}}</h2>
            <article>{{blog.body}}</article>
        </div>
    </div>
</template>

<script>

    export default {
        data () {
            return {
                blogs: []
            }
        },
        methods: {

        },
        created() {
          this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function (data) {
              this.blogs = data.body.slice(0, 10);

          })
        }
    }
</script>

<style>
     #showBlogs {
         max-width: 800px;
         margin: 0 auto;
     }
    .singleBlog {
        padding: 20px;
        margin: 20px 0;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        background: #eee;
    }
</style>
