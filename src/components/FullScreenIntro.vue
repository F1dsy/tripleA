<template>
  <div class="container">
    <div class="content"></div>
    <div class="overlay">
      <div class="pic pic1">
        <img src="alina.jpg" />
        <div class="slider">
          <h1>Alina</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus,
            ea ipsam, quis iste nostrum fuga perspiciatis commodi, temporibus
            magni maiores mollitia hic quos natus unde! Obcaecati qui nostrum
            vitae commodi.
          </p>
        </div>
      </div>
      <div class="pic pic2">
        <img src="alina.jpg" />
        <div class="slider">
          <h1>Anastasia</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus,
            ea ipsam, quis iste nostrum fuga perspiciatis commodi, temporibus
            magni maiores mollitia hic quos natus unde! Obcaecati qui nostrum
            vitae commodi.
          </p>
        </div>
      </div>
      <div class="pic pic3">
        <img src="alina.jpg" />
        <div class="slider">
          <h1>Alex</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus,
            ea ipsam, quis iste nostrum fuga perspiciatis commodi, temporibus
            magni maiores mollitia hic quos natus unde! Obcaecati qui nostrum
            vitae commodi.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
$skew-amount: 100px;
$width: 35%;

@keyframes slideUp {
  from {
    height: 0;
  }
  to {
    height: 100%;
  }
}

.container {
  width: 100%;
  height: 100vh;

  .overlay {
    width: 100%;
    height: inherit;
    display: flex;

    .pic {
      height: 100%;
      position: absolute;
      .slider {
        display: none;
      }
      &:hover {
        .slider {
          display: block;
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 0%;
          background-color: #000a;
          animation: slideUp 500ms forwards;
          h1 {
            margin-top: 150px;
            text-align: center;
            font-size: 3em;
            color: #fff;
            font-family: "Segoe UI", Tahoma, Verdana, sans-serif;
          }
          p {
            margin: 100px 150px;
            text-align: center;
            font-size: 2em;
            color: #fff;
            font-family: "Segoe UI", Tahoma, Verdana, sans-serif;
          }
        }
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top;
      }
    }
    .pic1 {
      width: $width;
      left: 0;
      background-color: #f00;
      clip-path: polygon(
        0% 100%,
        0% 0%,
        100% 0%,
        calc(100% - #{$skew-amount}) 100%
      );
    }
    .pic2 {
      left: calc(#{$width} - #{$skew-amount});
      right: calc(#{$width} - #{$skew-amount});
      background-color: #0f0;
      clip-path: polygon(
        0% 100%,
        $skew-amount 0%,
        100% 0%,
        calc(100% - #{$skew-amount}) 100%
      );
    }
    .pic3 {
      width: $width;
      right: 0;
      background-color: #00f;
      clip-path: polygon(0% 100%, $skew-amount 0%, 100% 0%, 100% 100%);
    }
  }
}
</style>
