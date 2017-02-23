<template>
  <div id="loading">
    <div class="layer"></div>
    <div class="spinner">
    </div>
  </div>
</template>
<script type="text/javascript">
  export default{
    name: 'loading',
    data(){
      return {}
    }
  }
</script>
<style coped>
  #loading {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 99999;
  }

  #loading .layer {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.1;
    z-index: 99999;
  }

  #loading .spinner {
    width: 1.4rem;
    height: 1.4rem;
    position: absolute;
    z-index: 100000;
    top: 40%;
    left: 45%;
    background-color: #ff8b38;
    border-radius: 100%;
    -webkit-animation: scaleout 1.0s infinite ease-in-out;
    animation: scaleout 1.0s infinite ease-in-out;
  }

  @-webkit-keyframes scaleout {
    0% {
      -webkit-transform: scale(0.0)
    }
    100% {
      -webkit-transform: scale(1.0);
      opacity: 0;
    }
  }

  @keyframes scaleout {
    0% {
      transform: scale(0.0);
      -webkit-transform: scale(0.0);
    }
    100% {
      transform: scale(1.0);
      -webkit-transform: scale(1.0);
      opacity: 0;
    }
  }
</style>
