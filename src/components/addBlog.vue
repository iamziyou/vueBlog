<template>
    <div id="addBlog">
        <h2>Add a New Blog Post</h2>
        <form v-if="!submitted">
            <label for="">Blog Title:</label>
            <input type="text" v-model.lazy="blog.title" required >
            <label for="">Blog Content:</label>
            <!--<textarea v-model.lazy="blog.content"></textarea>-->
            <ckeditor v-model="blog.content" :config="config" @blur="onBlur($event)" @focus="onFocus($event)"></ckeditor>
            <div id="checkboxes">
                <label for="">Ninjas</label>
                <input type="checkbox" value="ninjas" v-model="blog.categories">
                <label for="">Wizards</label>
                <input type="checkbox" value="wizards" v-model="blog.categories">
                <label for="">Mario</label>
                <input type="checkbox" value="mario" v-model="blog.categories">
                <label for="">Cheese</label>
                <input type="checkbox" value="cheese" v-model="blog.categories">
            </div>
            <label for="">Author:</label>
            <select v-model="blog.author">
                <option v-for="author in authors">{{author}}</option>
            </select>
            <button v-on:click.prevent="post">Add Blog</button>
        </form>
        <div v-if="submitted">
            <h3>Thanks for adding your post</h3>
        </div>
        <div id="preview">
            <h3>Preview Blog</h3>
            <p>Blog title: {{blog.title}}</p>
            <p>Blog content:</p>
            <p>{{blog.content}}</p>
            <p>Blog Categories:</p>
            <ul>
                <li v-for="category in blog.categories">{{category}}</li>
            </ul>
            <p>Author: {{blog.author}}</p>
        </div>
    </div>
</template>

<script>
    import Ckeditor from 'vue-ckeditor2';

    export default {
        components: {
            Ckeditor
        },
        data () {
            return {
                blog: {
                    title: "",
                    content: "",
                    categories: [],
                    author: ""
                },
                authors: ['The Net Ninja', 'The Angular Avenger', 'The Vue Vindicator'],
                submitted: false,
                config: {
                    toolbar: [
                        ['Bold', 'Italic', 'Underline', 'Strike', 'Superscript']
                    ],
                    height: 300,
                    autoParagraph: false
                }
            }
        },
        methods: {
            post:function () {
                this.$http.post('https://vuejs-f4ccc.firebaseio.com/posts.json', this.blog).then(function (data) {
                    this.submitted = true;
                });
            },
            onBlur(editor) {
                console.log(editor);
            },
            onFocus(editor) {
                console.log(editor);
            },
        },
    }
</script>

<style scoped="">
    #addBlog* {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    #addBlog {
        margin: 20px auto;
        max-width: 500px;
    }
    label {
        display: block;
        margin: 20px 0 10px;
    }
    input[type="text"], textarea {
        display: block;
        width: 100%;
        padding: 8px;
    }
    textarea {
        height: 200px;
    }
    #preview {
        padding: 10px 20px;
        border: 1px dotted #ccc;
        margin: 30px 0;
    }
    h3 {
        margin-top: 10px;
    }
    #checkboxes input {
        display: inline-block;
        margin-right: 10px;
    }
    #checkboxes label {
        display: inline-block;
        margin-top: 0;
    }
    hr {
        display: none;
    }
    button {
        display: block;
        margin: 20px 0;
        background: crimson;
        color: #fff;
        border: 0;
        padding: 14px;
        border-radius: 4px;
        font-size: 18px;
        cursor: pointer;
    }
</style>
