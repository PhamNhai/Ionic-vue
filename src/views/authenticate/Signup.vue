<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Signup</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <div class="login-logo">
        <img src="../../assets/logo.png" alt="Ionic logo">
      </div>

      <form>
        <ion-list>
            <ion-item>
                <ion-label position="stacked" color="primary">Full Name<ion-text color="danger"> *</ion-text></ion-label>
                <ion-input
                  type="text"
                  spellcheck="false"
                  autocapitalize="off"
                  required
                  :value="name"
                  @change="name = $event.target.value"
                ></ion-input>
            </ion-item>
            <ion-item>
                <ion-label position="stacked" color="primary">Nickname<ion-text color="danger"> *</ion-text></ion-label>
                <ion-input
                  type="text"
                  spellcheck="false"
                  autocapitalize="off"
                  required
                  :value="username"
                  @change="username = $event.target.value"
                ></ion-input>
              </ion-item>
          <ion-item>
            <ion-label position="stacked" color="primary">Email<ion-text color="danger"> *</ion-text></ion-label>
            <ion-input
              type="text"
              spellcheck="false"
              autocapitalize="off"
              required
              :value="email"
              @change="email = $event.target.value"
            ></ion-input>
          </ion-item>

          <ion-item>
            <ion-label position="stacked" color="primary">Password<ion-text color="danger"> *</ion-text></ion-label>
            <ion-input 
            type="password" 
            required
            :value="password"
            @change="password = $event.target.value"
            ></ion-input>
          </ion-item>
        </ion-list>

        <ion-row responsive-sm>
          <ion-col>
            <ion-button @click="goToSignup()">Signup</ion-button>
          </ion-col>
        </ion-row>
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
import axios from 'axios';
export default {
  name: 'signup',
  data() {
    return {
      name: "",
      username: "",
      email: "",
      password: "",
    };
  },
    methods: {
      // form data append ( form null)
      goToSignup () {
        axios
          .post("http://127.0.0.1:3333/signup", {
            name: this.name,
            username: this.username,
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
            this.password = "";
          });
      }
    }
  }  
</script>