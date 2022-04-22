<template>
  <navbar></navbar>

  <div class="container div_border">
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-12">
        <img src="@/assets/Bitmap.png" class="subwayimg" />
      </div>
    </div>
  </div>
  <br />
  <div class="container div_border">
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-12 align">
        <h1>Subway Surfers</h1>
        <h4>SYBO Games</h4>
        <h6 class="grey_color">300k Downloads</h6>
        <br />
        <h4>DASH as fast as you can!</h4>
        <h4>DODGE the oncoming trains!</h4>
        <br />
        <h4>
          Help Jake, Tricky & Fresh escape from the grumpy Inspector and his
          dog.
        </h4>

        <br />
        <h4>&#9733; Grind trains with your cool crew!</h4>
        <h4>&#9733; Colorful and vivid HD graphics!</h4>

        <a href="#" class="move_left"><h6>Read more</h6></a>
      </div>
    </div>
  </div>

  <br />
  <most-recommendation-div></most-recommendation-div>
</template>

<script>
import MostRecommendationDiv from "./MostRecommendationDiv.vue";
import Navbar from "./Navbar.vue";
export default {
  components: { Navbar, MostRecommendationDiv },
  name: "DetailsPage",
};
</script>

<style scoped>
.div_border {
  border: 1px solid;
}
.subwayimg {
  width: 1320px;
  height: 400px;
  margin-left: -12px;
}
.align {
  text-align: left;
}
.grey_color {
  color: rgb(158, 157, 157);
}
.move_left {
  text-decoration: none;
}
</style>