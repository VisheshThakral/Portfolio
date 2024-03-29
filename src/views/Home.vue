<template>
  <div class="home">
    <div class="home__bg">
      <div class="home__heading">
        <div class="home__title">Vishesh Thakral</div>
        <div class="home__subheading">
          Software Engineer, Front End & Back End Developer
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.home {
  height: 100vh;
  color: white;
}
.home__bg {
  background-image: 
  /* linear-gradient(
      rgba(255, 255, 255, 0.05),
      rgba(255, 255, 255, 0.05)
    ), */ url("https://tamalsen.dev/wp-content/uploads/2021/07/tamalsen-home-cover.jpg");
  background-position: center center;
  background-size: cover;
  /* background: linear-gradient(109.6deg, rgb(22,34,46) 11.2%, rgb(30,34,46) 51.2%, rgb(0, 0, 0) 98.6%); */
  height: 100vh;
  color: white;
}

.home__heading {
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  text-shadow: 1px 3px 11px rgba(0, 0, 0, 0.3);
  justify-content: center;
  align-items: center;
  font-family: "Poppins", Sans-serif;
  height: 100%;
}

.home__title {
  font-size: 6.5vw;
  font-weight: 600;
  letter-spacing: 2.5px;
}

.home__subheading {
  font-size: 1.7vw;
  letter-spacing: 1.5px;
  font-weight: 500;
  margin-top: 1.5rem;
}
</style>
