<template>
    <div id="singleBlog">
        <h1>{{blog.title}}</h1>
        <article>{{blog.content}}</article>
        <p>Author: {{blog.author}}</p>
        <ul>
            <li v-for="category in blog.categories">{{category}}</li>
        </ul>
        <div class="fb-comments" v-bind:data-href="'http://localhost:8080/blog/' + this.id" data-numposts="5"></div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                id: this.$route.params.id,
                blog: {},
            }
        },
        created() {
            this.$http.get('https://vuejs-f4ccc.firebaseio.com/posts/' + this.id + '.json').then(function (data) {
                return data.json();
            }).then(function (data) {
                this.blog = data;
            })
        },
        mounted(){
            FB.XFBML.parse();
        },
    }
</script>

<style>
    #singleBlog {
        max-width: 960px;
        margin: 0 auto;
        padding: 20px;
        background: #eee;
        border: 1px dotted #aaa;
    }
</style>