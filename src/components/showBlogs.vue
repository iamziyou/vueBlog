<template>
    <div v-theme:column="'wide'" id="showBlogs">
        <h1>All Blog Articles</h1>
        <input type="text" v-model="search" placeholder="Search Blogs">
        <div v-for="blog in filterBlogs" class="singleBlog">
            <router-link v-bind:to="'/blog/' + blog.id">
                <h2 v-rainbow>{{blog.title|toUppercase}}</h2>
            </router-link>
            <article>{{blog.content|snippet}}</article>
        </div>
    </div>
</template>

<script>
    import searchMixin from '../mixins/searchMixin';
    export default {
        data () {
            return {
                blogs: [],
                search: ""
            }
        },
        methods: {

        },
        created() {
          this.$http.get('https://vuejs-f4ccc.firebaseio.com/posts.json').then(function (data) {
              return data.json();
          }).then(function (data) {
              var blogsArray = [];
              for (let key in data) {
                  data[key].id = key;
                  blogsArray.push(data[key]);
              }
              this.blogs = blogsArray;
          })
        },
        computed: {

        },
        filters: {
            toUppercase(value) {
                return value.toUpperCase();
            },
            snippet(value){
                return value.slice(0, 100) + "...";
            }
        },
        directives: {
            'rainbow': {
                bind(el, binding, vnode){
                    el.style.color = "#" + Math.random().toString().slice(2, 8);
                }
            },
            'theme': {
                bind(el, binding, vnode){
                    if (binding.value == 'wide') {
                        el.style.maxWidth = "1200px";
                    }
                    else if (binding.value == 'narrow') {
                        el.style.maxWidth ="560px";
                    }
                    if (binding.arg == 'column') {
                        el.style.background = "#ddd";
                        el.style.padding = "20px";
                    }
                }
            }
        },
        mixins: [searchMixin]
    }
</script>

<style scoped="">
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
        border: 1px dotted #aaa;
    }
    #showBlogs a {
        color: #444;
    }
    input[type="text"] {
        padding: 8px;
        width: 100%;
        box-sizing: border-box;
    }
</style>
