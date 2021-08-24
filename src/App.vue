<template>
    <div>
        <router-view />
    </div>
</template>

<script>

export default {
    name: 'App',
    setup() {
        console.log(process.env.NODE_ENV, process.env.VUE_APP_BASE_URL)
    }
}
</script>

<style lang="scss">
html,
body,
#app {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    color: #333;
}

html {
    box-sizing: border-box;
}

body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    font-family: PingFangSC-Regular, PingFang SC;
    background: #fff;
    // body滚动条样式隐藏
    &::-webkit-scrollbar {
        display: none;
    }
}

h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 0;
    padding: 0;
}

div {
    box-sizing: inherit;
}

a:focus,
a:active {
    outline: none;
}

a,
a:focus,
a:hover {
    cursor: pointer;
    color: inherit;
    text-decoration: none;
}
ul, ul > li {
    padding: 0;
    margin: 0;
    list-style: none;
}
</style>
