import Vue from 'vue'
import App from './App.vue'
import VueResource from  'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'
import VueFire from 'vuefire'

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VueFire);

const router = new VueRouter({
  routes: Routes,
    mode: 'history'
});

new Vue({
  el: '#app',
  render: h => h(App),
    router: router,
    mounted() {
        window.fbAsyncInit = function() {
            FB.init({
                appId      : '101846043872769',
                xfbml      : true,
                version    : 'v2.10'
            });
            FB.AppEvents.logPageView();
        };
        (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

    }
});


// Directives

// Vue.directive('rainbow' ,{
//   bind(el, binding, vnode){
//     el.style.color = "#" + Math.random().toString().slice(2, 8);
//   }
// });

// Vue.directive('theme', {
//   bind(el, binding, vnode){
//     if (binding.value == 'wide') {
//       el.style.maxWidth = "1200px";
//     }
//     else if (binding.value == 'narrow') {
//       el.style.maxWidth ="560px";
//     }
//     if (binding.arg == 'column') {
//       el.style.background = "#ddd";
//       el.style.padding = "20px";
//     }
//   }
// });

// Filters

// Vue.filter('to-uppercase', function (value) {
//    return value.toUpperCase();
// });

// Vue.filter('snippet', function (value) {
//     return value.slice(0, 100) + "...";
// });