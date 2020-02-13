<template>
  <div>
    <ion-footer>
      <ion-row responsive-sm>
        <ion-col>
          <ion-button href="/">Home</ion-button>
        </ion-col>
        <ion-col>
          <ion-button v-if="loginStatus" @click="goToLogout()">Logout</ion-button>
        </ion-col>
      </ion-row>
    </ion-footer>
  </div>
</template>

<script>
export default {
  name: "footer",
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
};
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