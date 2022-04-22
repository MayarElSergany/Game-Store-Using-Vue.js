<template>
  
       <div class="row">
    <div class="col-sm-9 col-md-8 col-lg-8">
      <router-link to="/">
        <img alt="stc logo" class="img1" src="@/assets/Logo_4.png"
      /></router-link>
    </div>
    <div class="col-sm-3 col-md-4 col-lg-3 searchdiv">
      <img class="searchimg" alt="search icon" src="@/assets/loupe.png" />
      <img class="searchimg" alt="search icon" src="@/assets/more.png" />
    </div>
  </div>

</template>

<script>
export default {
    name:"NavBar",
};
</script>

<style scoped>
.img1 {
  float: left;
  margin-left: 200px;
}
.searchimg {
  width: 20px;
  margin-top: 50px;
  margin-right: 25px;
}
</style>