<template>
  <div class="row">
    <Navbar></Navbar>
  </div>
  <div class="container div_border">
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-12">
        <div class="card mb-3">
          <img v-bind:src="image" class="card-img-top" alt="..." height="600" />
          <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <p class="card-text">
              {{ details }}
            </p>
          </div>
        </div>

        <p></p>
      </div>
    </div>
  </div>
  <br />
  <br />
  <most-recommendation-div></most-recommendation-div>
</template>

<script>
import Navbar from "./Navbar.vue";
import axios from "axios";
import MostRecommendationDiv from "./MostRecommendationDiv.vue";
export default {
  components: { Navbar, MostRecommendationDiv },
  name: "GameDetails",
  data() {
    return {
      image: "",
      title: "",
      details: "",
    };
  },
  created() {
    this.getgamebyid();
  },
  methods: {
    getgamebyid() {
      this.id = this.$route.params.id;
      axios
        .get(`games/?id=${this.id}`)
        .then((res) => {
          console.log(res.data);
          for (let i = 0; i < res.data.length; i++) {
            this.title = res.data[i].title;
            this.image = res.data[i].image;
            this.details = res.data[i].details;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
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
</style>