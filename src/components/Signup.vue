<template>
  <div class="login-div">
             <div class="logo"></div>
        <div class="title">Aland Mariwan</div>
    <div class="fields">
        <form @submit.prevent="userRegistration">
            <h3>Sign Up</h3>

            <div class="email">
                <input type="text" placeholder="Name" v-model="user.name" />
            </div>

            <div class="email">
                <input type="email"  placeholder="Email" v-model="user.email" />
            </div>

            <div class="password">
                <input type="password"  placeholder="Password" v-model="user.password" />
            </div>

            <button type="submit">
               Sign Up
            </button>
            <br><br>
            <p>
                Already registered 
                <router-link :to="{name: 'login'}">sign in?</router-link>
            </p>
        </form>
    </div>
  </div>
</template>


<script>
import firebase from "firebase";

export default {
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: ''
      }
    };
  },
  methods: {
    userRegistration() {
      firebase
      .auth()
      .createUserWithEmailAndPassword(this.user.email, this.user.password)
      .then((res) => {
        res.user
          .updateProfile({
            displayName: this.user.name
          })
          .then(() => {
            this.$router.push('/home')
          });
      })
      .catch((error) => {
         alert(error.message);
      });
    }
  }
};
</script>