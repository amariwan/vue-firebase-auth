<template>
  <div class="login-div">
             <div class="logo"></div>
        <div class="title">Aland Mariwan</div>
    <div class="fields">
        <form @submit.prevent="userLogin">
            <h3>Sign In</h3>

            <div class="email">
                <input type="email"  placeholder="Email" v-model="user.email" />
            </div>

            <div class="password">
                <input type="password"  placeholder="Password" v-model="user.password" />
            </div>

            <button type="submit" >Sign In</button>
            <br><br>
            <p>
                <router-link to="/forgot-password">Forgot password ?</router-link>
                <br>
                New User?
                <router-link to="/"> Sign Up For Free!</router-link>
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
        email: '',
        password: ''
      }
    };
  },
  methods: {
    userLogin() {
        firebase
        .auth()
        .signInWithEmailAndPassword(this.user.email, this.user.password)
        .then(() => {
            this.$router.push('/home')
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  }
};
</script>