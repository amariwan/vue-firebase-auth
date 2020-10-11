<template>
    <div class="home-div">
        <h3>Welcome</h3>
           <p>{{user.displayName}}</p>
           <p>{{user.email}}</p>
        
        <button 
        type="submit" 
        @click="logOut()">
            Log out
        </button>
    </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      user: null
    };
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
        this.$router.push('/home')
      } else {
        this.user = null;
        this.$router.push('/login')
      }
    });
  },
  methods: {
    logOut() {
      firebase.auth().signOut().then(() => {
        firebase.auth().onAuthStateChanged(() => {
          this.$router.push('/login')
        })
      })
    }
  }
};
</script>
