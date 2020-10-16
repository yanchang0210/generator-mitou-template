<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div>{{ obj.name?.area?.length ?? 10 }}</div>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
  setup  () {
    return {
      obj: {
        name: {
        }
      }
    }
  }
}

</script>
