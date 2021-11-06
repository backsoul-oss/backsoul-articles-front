<template>
  <div class="container-loading">
    <i class='bx bx-loader-alt text-primary' style="font-size:3rem; animation: loading 1s infinite;"></i>
  </div>
</template>

<style>
.container-loading{
    position: absolute;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #000000c9;
    z-index: 99;
}
@keyframes loading {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>
