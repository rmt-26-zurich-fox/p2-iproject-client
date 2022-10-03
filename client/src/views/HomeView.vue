<script></script>

<template>
  <video class="video-banner" autoplay muted loop>
    <source
      src="https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt714eaee50b90fc27/62cc7dcc6a8fb133b0ff7e55/VALORANT_ANNO22_SHATTERED_16x9_27s.mp4"
      type="video/mp4"
    />
  </video>
  <div class="banner-text">
    <h1 class="banner-title">Welcome to GegeGaming</h1>
    <p class="banner-subtitle">Website tentang valorant</p>
    <a
      href="https://playvalorant.com/id-id/download/"
      target="_blank"
      class="banner-btn"
      ><h3>Mainkan sekarang</h3></a
    >
  </div>
</template>
<style>
.video-banner {
  width: 100%;
}
.banner-text {
  color: white;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.426);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.banner-title {
  font-size: 100px;
}
.banner-subtitle {
  font-size: 20px;
}

.banner-btn {
  background-color: white;
  color: black;
  padding: 10px 20px;
  text-decoration: none;
  margin-top: 0px;
  transition: all 0.5s;
}
.banner-btn:hover {
  background-color: red;
  color: white;
}
</style>
