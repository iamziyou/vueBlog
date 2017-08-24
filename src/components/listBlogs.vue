<template>
    <div v-theme:column="'narrow'" id="showBlogs">
        <h1>List Blog Titles</h1>
        <input type="text" v-model="search" placeholder="Search Blogs">
        <div v-for="blog in filterBlogs" class="singleBlog">
            <h2 v-rainbow>{{blog.title|toUppercase}}</h2>
            <article>{{blog.body|snippet}}</article>
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
            this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function (data) {
                this.blogs = data.body.slice(0, 10);

            })
        },
        computed: {

        },
        filters: {
            toUppercase(value) {
                return value.toUpperCase();
            }
        },
        directives: {
            'rainbow': {
                bind(el, binding, vnode){
                    el.style.color = "#" + Math.random().toString().slice(2, 8);
                }
            }
        },
        mixins: [searchMixin]
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
