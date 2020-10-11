<template>
    <div class="forgot-div">
                   <div class="logo"></div>
        <div class="title">Forgot Password</div>
          <div class="fields">
        <form @submit.prevent="forgetPassword">
            <div class="email">
                <input type="email"  placeholder="Email" v-model="user.email" />
            </div>

            <button type="submit" >Reset password</button>
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
        email: ''
      }
    };
  },
  methods: {
    forgetPassword() {
        firebase
        .auth()
        .sendPasswordResetEmail(this.user.email)
        .then(() => {
            alert('Check your registered email to reset the password!')
            this.user = {   
              email: ''
            }
        }).catch((error) => {
          alert(error)
        })
    }
  }
};
</script>

