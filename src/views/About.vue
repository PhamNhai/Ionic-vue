<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ion-button @click="goBackHome()" full>Go Back!</ion-button>
  </div>
</template>

<script>
export default {
  name: 'About',
  methods: {
    goBackHome () {
      this.$router.push('/')
    }
  }  
}
</script>
