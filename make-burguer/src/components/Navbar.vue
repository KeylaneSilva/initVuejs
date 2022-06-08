<template>
  <div>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/pedidos">Pedidos</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>

<script>
  export default{
    name: 'Navbar'
  }
</script>

<style scoped>

</style>