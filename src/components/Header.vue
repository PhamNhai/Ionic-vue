<template>
  <div class="hello">
    <ion-row responsive-sm>
      <ion-col>
        <h1>{{ msg }}</h1>
      </ion-col>
      <ion-col>
        <ion-button v-if="!loginStatus" href="/login">Login</ion-button>
        <ion-button v-if="!loginStatus" href="/signup">Sign up</ion-button>
        <ion-button v-if="loginStatus" @click="goToLogout()">Logout</ion-button>
      </ion-col>
    </ion-row>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    props: {
      msg: String
    },
    data() {
      return {
        loginStatus: false
      };
    },
    created() {
      const token = localStorage.getItem("tweetr-token");
      if (token) this.loginStatus = true;
    },
    methods: {
      goToLogout() {
        if (this.loginStatus) {
          localStorage.removeItem("tweetr-token");
          this.$router.push("/");
        }
      }
    },
    // watch: {
    //   $route(to, from) {
    //     const token = localStorage.getItem("tweetr-token");
    //     if (token) this.loginStatus = true;
    //     else this.loginStatus = false;
    //   }
    // }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>