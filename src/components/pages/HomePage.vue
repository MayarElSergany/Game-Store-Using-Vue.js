<template>
  <div class="row">
    <div class="col-sm-9 col-md-8 col-lg-9">
      <router-link to="/">
        <img alt="stc logo" class="img1" src="@/assets/Logo_4.png"
      /></router-link>
    </div>
    <div class="col-sm-3 col-md-4 col-lg-2">
      <div class="container">
        <div class="row">
          <div class="search">
            <input
              type="text"
              class="form-control input-sm"
              maxlength="64"
              placeholder="Type for search..."
            />
            <img class="btnn" alt="search icon" src="@/assets/loupe.png" />
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-3 col-md-4 col-lg-1">
      <div class="menu-nav">
        <div class="menu-item"></div>
        <div class="dropdown-container" tabindex="-1">
          <div class="three-dots"></div>
          <div class="dropdown">
            <form>
              <p class="grey_color text_left">
                Please add your account details
              </p>
              <p class="text_left">
                <label>Username/Email</label>
                <br />
                <input
                  type="text"
                  name="userID"
                  id="userID"
                  placeholder="Type your username here"
                  class="width_input"
                />
              </p>
              <p class="text_left">
                <label>Password</label>
                <br />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Type your password"
                  class="width_input"
                />
                <i
                  class="far fa-eye"
                  id="togglePassword"
                  style="margin-left: -30px; cursor: pointer"
                ></i>
              </p>
              <p class="text_right">Forgot password?</p>

              <button
                type="submit"
                id="submit"
                class="btn btn-primary more_info_button"
              >
                Log In
              </button>
              <br /><br />
              <p class="text_center">Don't have an account? sign up!</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <hr />
    </div>
    <br />
    <div>
      <button type="button" class="btn btn-outline-dark buttons">
        Advanture
      </button>
      <button type="button" class="btn btn-outline-dark buttons">Arcade</button>
      <button type="button" class="btn btn-outline-dark buttons">Action</button>
      <button type="button" class="btn btn-outline-dark buttons">
        Advanture
      </button>
      <button type="button" class="btn btn-outline-dark buttons">Arcade</button>
      <button type="button" class="btn btn-outline-dark buttons">
        Advanture
      </button>
      <button type="button" class="btn btn-outline-dark buttons background">
        Sports &#10004;
      </button>
      <button type="button" class="btn btn-outline-dark buttons">Action</button>
      <button type="button" class="btn btn-outline-dark buttons">Arcade</button>
      <button type="button" class="btn btn-outline-dark buttons">
        Advanture
      </button>
      <button type="button" class="btn btn-outline-dark buttons">Arcade</button>
      <button type="button" class="btn btn-outline-dark buttons">Action</button>
      <button type="button" class="btn btn-outline-dark buttons">
        Advanture
      </button>
    </div>
  </div>
  <br />
  <div class="container div_border">
    <div class="row">
      <div class="col-sm-9 col-md-8 col-lg-9">
        <img src="@/assets/Bitmap.png" class="subway_img" />
      </div>
      <div class="col-sm-3 col-md-4 col-lg-3">
        <h3>Subway Surfers</h3>
        <h3>SYBO Games</h3>
        <br />
        <h3>SURF the urban wave!</h3>
        <h3>DODGE the oncoming</h3>
        <h3>trains!</h3>
        <br />
        <h5 class="color_h5">300k Downloads</h5>
        <router-link to="/details">
          <button type="button" class="btn btn-lg more_info_button">
            MORE INFO
          </button></router-link
        >
      </div>
    </div>
  </div>
  <br />

  <div class="container div_border">
    <div class="row">
      <h2 class="color">Most Recommendation</h2>
      <a href="#" class="move_to_right"
        ><h3>SEE ALL <b>&gt;</b></h3></a
      >
    </div>
    <div class="row">
      <div
        class="col-sm-3 col-md-4 col-lg-3"
        v-for="game in games"
        :key="game.id"
      >
        <div class="card" style="width: 18rem" v-if="game.id <= 4">
          <img
            v-bind:src="game.image"
            class="card-img-top"
            v-bind:alt="game.image"
            height="286"
          />
          <div class="card-body">
            <h5 class="card-title">{{ game.title }}</h5>

            <router-link :to="`/games/${game.id}`">
              <button href="" class="btn btn-primary btn-sm more_info_btn">
                More Info
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <br />
  </div>

  <br />

  <div class="container div_border">
    <div class="row">
      <h2 class="color">Most Popular</h2>
      <a href="#" class="move_to_right"
        ><h3>SEE ALL <b>&gt;</b></h3></a
      >
    </div>

    <div class="row">
      <div
        class="col-sm-3 col-md-4 col-lg-3"
        v-for="game in games"
        :key="game.id"
      >
        <div
          class="card"
          style="width: 18rem"
          v-if="game.id <= 8 && game.id > 4"
        >
          <img
            v-bind:src="game.image"
            class="card-img-top"
            v-bind:alt="game.image"
            height="286"
          />
          <div class="card-body">
            <h5 class="card-title">{{ game.title }}</h5>

            <router-link :to="`/games/${game.id}`">
              <button href="" class="btn btn-primary btn-sm more_info_btn">
                More Info
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <br />
  </div>
  <br />

  <div class="col-4">
    <router-view></router-view>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HomePage",
  headers: {
    Authorization: "games",
  },
  data() {
    return {
      games: [],
      first4Ids: [0, 1, 2, 3],
    };
  },
  created() {
    this.getGame();
  },
  methods: {
    getGame() {
      axios
        .get("games")
        .then((res) => {
          console.log(res.data);
          this.games = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.subway_img {
  width: 1000px;
  height: 400px;
  margin-left: -12px;
}

.grey_color {
  color: rgb(158, 157, 157);
}

.text_right {
  text-align: right;
  color: rgb(92, 52, 131);
}

.text_center {
  color: rgb(92, 52, 131);
}
.width_input {
  width: 200px;
  border-left: white;
  border-right: white;
  border-top: white;
  background-color: transparent;
}
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
hr {
  position: relative;
  top: 20px;
  border-top: 8px solid #ece5e5;
}

.buttons {
  border-radius: 18px;
  border-color: rgb(221, 220, 220);
  margin-right: 10px;
}
.buttons:hover {
  background-color: rgb(92, 52, 131);
}
.background {
  background-color: rgb(92, 52, 131);
  color: white;
}
.div_border {
  border: 1px solid;
}
.color_h5 {
  color: rgb(184, 179, 179);
}
.more_info_button {
  background-color: rgb(92, 52, 131);
  border: none;
  width: 250px;
}
.more_info_button:hover {
  background-color: rgb(58, 37, 80);
}
.more_info_btn {
  background-color: rgb(92, 52, 131);
  width: 100px;
  border: none;
}
.more_info_btn:hover {
  background-color: rgb(58, 37, 80);
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

.menu-nav {
  display: flex;
  justify-content: space-between;
}

.menu-item {
  color: #fcc;
  padding: 3px;
}

.three-dots:after {
  cursor: pointer;
  color: #444;
  content: "\2807";
  font-size: 20px;
  padding: 0 5px;
  margin-right: 200px;
}

a {
  text-decoration: none;
  color: white;
}

a div {
  padding: 2px;
}

.dropdown {
  position: absolute;
  right: 10px;
  background-color: #fffbfb;
  outline: none;
  opacity: 0;
  z-index: -1;
  max-height: 0;
}

.dropdown-container:focus {
  outline: none;
}

.dropdown-container:focus .dropdown {
  opacity: 1;
  z-index: 100;
  max-height: 100vh;
}
#search {
  float: right;
  margin-top: 9px;
  width: 250px;
}

.search {
  padding: 5px 0;
  width: 230px;
  height: 30px;
  position: relative;
  left: 10px;
  float: left;
  line-height: 22px;
}

.search input {
  position: absolute;
  width: -0px;
  float: Left;
  margin-left: 210px;
  -webkit-transition: all 0.7s ease-in-out;
  -moz-transition: all 0.7s ease-in-out;
  transition: all 0.7s ease-in-out;
  height: 30px;
  line-height: 18px;
  padding: 0 2px 0 2px;
  border-radius: 1px;
  border-color: rgb(243, 241, 241);
  height: 25px;
}

.search:hover input,
.search input:focus {
  width: 200px;
  margin-left: 0px;
}

.btnn {
  height: 30px;
  position: absolute;
  right: 0;
  top: 5px;
  border-radius: 1px;
  width: 30px;
}
.text_left {
  text-align: left;
  padding: 5px;
}
</style>