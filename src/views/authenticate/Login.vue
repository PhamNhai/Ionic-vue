<template>
  <div class="ion-page">

    <ion-content class="ion-padding" style="background-color: black;">
      <div class="login-logo">
        <img src="../../assets/logo.png" alt="Ionic logo">
      </div>

      <form @submit.prevent="login">
        <ion-list>
          <ion-item>
            <ion-label position="stacked" color="primary">Email <ion-text color="danger"> *</ion-text>
            </ion-label>
            <ion-input type="text" spellcheck="false" autocapitalize="off" required :value="email"
              @change="email = $event.target.value"></ion-input>
                <div class="text-sm mt-2 text-red" v-if="$v.error">
                <div v-if="!$v.email.required">Email is required</div>
                <div v-if="!$v.email.email">Email is not a properly formatted email address</div>
              </div>
          </ion-item>

          <ion-item>
            <ion-label position="stacked" color="primary">Password<ion-text color="danger"> *</ion-text>
            </ion-label>
            <ion-input type="password" required :value="password" @change="password = $event.target.value"></ion-input>
          </ion-item>
        </ion-list>
        <div>
        <ion-row responsive-sm>
          <ion-col>
            <ion-button @click="goToLogin()">Login</ion-button>
          </ion-col>
        </ion-row>
        <ion-row responsive-sm>
          <ion-col>
            <a href="/signup">Sign up</a>
          </ion-col>
        </ion-row>
      </div>
      </form>
    </ion-content>
  </div>
</template>

<style scoped>
  .login-logo {
    padding: 20px 0;
    min-height: 200px;
    text-align: center;
  }

  .login-logo img {
    max-width: 150px;
  }

  .list {
    margin-bottom: 0;
  }
</style>

<script>
  import { required, email } from "vuelidate/lib/validators";
  import axios from 'axios';
  export default {
    name: 'login',
    data() {
      return {
        email: null,
        password: null,
      };
    },
    validations: {
    email: {
      required,
      email
    },
    password: {
      required,
    }
  },
    methods: {
      // form data append ( form null)
      goToLogin() {
        axios
          .post("http://127.0.0.1:3333/login", {
            email: this.email,
            password: this.password
          })
          .then(response => {
            // save token in localstorage
            localStorage.setItem("tweetr-token", response.data.data.token); // TODO response data view
            // redirect to user home
            this.$router.push('/')
          })
          .catch(error => {
            // clear form inputs
            console.log(error)
            this.email = this.password = "";
            alert(error.response.data.message);
          });
      }
    },
  }  
</script>