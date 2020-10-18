import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase';

// import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/main.css'

Vue.config.productionTip = false

const firebaseConfig = {
            apiKey: "AIzaSyB2vemSRmUdZAS1w9oQfsTP9FwUshEntFs",
            authDomain: "wbt1-b4086.firebaseapp.com",
            databaseURL: "https://wbt1-b4086.firebaseio.com",
            projectId: "wbt1-b4086",
            storageBucket: "wbt1-b4086.appspot.com",
            messagingSenderId: "955963773619",
            appId: "1:955963773619:web:75cab58e906bc9eff496c6",
            measurementId: "G-1TZ519Y8KH",
}

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
