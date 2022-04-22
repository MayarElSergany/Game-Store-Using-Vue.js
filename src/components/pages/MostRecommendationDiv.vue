<template>
  <div>
    <div class="container div_border">
      <div class="row">
        <h2 class="color">Most Recommendation</h2>
        <a href="#" class="move_to_right"
          ><h3>SEE ALL <b>&gt;</b></h3></a
        >
      </div>
      <div class="row">
        <div class="col-sm-3 col-md-4 col-lg-3">
          <img alt="" src="@/assets/asphalt.png" />
        </div>
        <div class="col-sm-3 col-md-4 col-lg-3">
          <img alt="" src="@/assets/zooba.png" />
        </div>
        <div class="col-sm-3 col-md-4 col-lg-3">
          <img alt="" src="@/assets/metalmadness.png" />
        </div>
        <div class="col-sm-3 col-md-4 col-lg-3">
          <img alt="" src="@/assets/coverfire.png" />
        </div>
      </div>

      <div class="row">
        <div class="col-sm-3 col-md-4 col-lg-3">
          <p>Alphapet9: Legends-</p>
          <p>Epic Car Action...</p>
        </div>
        <div class="col-sm-3 col-md-4 col-lg-3">
          <p>Zooba:Free_for_all</p>
          <p>G6Games</p>
        </div>
        <div class="col-sm-3 col-md-4 col-lg-3">
          <p>METAL MADNESS</p>
        </div>
        <div class="col-sm-3 col-md-4 col-lg-3">
          <p>Call of Duty &#174;:</p>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-3 col-md-4 col-lg-3">
          <button type="button" class="btn btn-primary btn-sm more_info_btn">
            Get Now
          </button>
        </div>
        <div class="col-sm-3 col-md-4 col-lg-3">
          <button type="button" class="btn btn-primary btn-sm more_info_btn">
            Get Now
          </button>
        </div>
        <div class="col-sm-3 col-md-4 col-lg-3">
          <button type="button" class="btn btn-primary btn-sm more_info_btn">
            Get Now
          </button>
        </div>
        <div class="col-sm-3 col-md-4 col-lg-3">
          <button type="button" class="btn btn-primary btn-sm more_info_btn">
            Get Now
          </button>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-3 col-md-4 col-lg-3">
          <p class="grey_color">For Andriod only</p>
        </div>
        <div class="col-sm-3 col-md-4 col-lg-3">
          <p class="grey_color">For Andriod only</p>
        </div>
        <div class="col-sm-3 col-md-4 col-lg-3">
          <p class="grey_color">For Andriod only</p>
        </div>
        <div class="col-sm-3 col-md-4 col-lg-3">
          <p class="grey_color">For Andriod only</p>
        </div>
      </div>
      <br />
    </div>
  </div>
</template>

<script>
export default {
  name: "MostRecommendationDiv",
};
</script>

<style scoped>
.div_border {
  border: 1px solid;
}
/* .subwayimg {
  width: 1320px;
  height: 400px;
  margin-left: -12px;
} */
/* .align {
  text-align: left;
} */
.grey_color {
  color: rgb(158, 157, 157);
}
/* .move_left {
  text-decoration: none;
} */
.color {
  color: rgb(92, 52, 131);
  margin-left: 100px;
  float: left;
  display: inline;
  size: 0em;
  width: 50%;
  height: 60px;
  margin: 0;
  padding: 0;
}
.move_to_right {
  color: rgb(92, 52, 131);
  text-align: right;
  float: right;
  display: inline;
  text-decoration: none;
  width: 50%;
  height: 60px;
  margin: 0;
  padding: 0;
}
.more_info_btn {
  background-color: rgb(92, 52, 131);
  width: 100px;
  border: none;
}
.more_info_btn:hover {
  background-color: rgb(58, 37, 80);
}
</style>