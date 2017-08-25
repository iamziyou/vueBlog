<template>
    <nav>
        <ul>
            <li><router-link to="/" exact="">Blog</router-link></li>
            <li><router-link to="/add" exact="">Add a New Blog</router-link></li>
        </ul>
    </nav>
</template>

<script>

</script>

<style scoped="">
    ul {
        list-style-type: none;
        text-align: center;
        margin: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a{
        color: #fff;
        text-decoration: none;
        padding: 12px;
        border-radius: 5x;
    }
    nav {
        background: #444;
        padding: 14px 0;
        margin-bottom: 40px;
    }
    .router-link-active {
        background: rgba(255, 255, 255, 0.8);
        color: #444;
    }
</style>