<template>
  <div class="ion-page">
    
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <img alt="Vue logo" src="../assets/logo.png">
    </ion-content>
    <Footer />
  </div>
</template>

<script>
  export default {
    name: "home",
    methods: {
      goToAbout () {
        this.$router.push('about')
      },
    }
  };
</script>

