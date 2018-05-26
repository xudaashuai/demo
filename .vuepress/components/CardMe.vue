<template>
  <div class="card">
    <div class="title">{{title}}</div>
    <div class="desc">{{desc}}</div>
  </div>
</template>

<script>
  export default {
    name: "card-me",
    props:['title','desc']
  }
</script>

<style scoped lang="scss">
  .card {
    background-color: #eeeeee;
    width: 300px;
    text-align: center;
    box-shadow: #777777 0 0 10px 0px;
    transform: skewY(-0.1rad);
    border-radius: 10px;
    height: 210px;
    color: cornflowerblue;
    transition: 0.3s padding-top,0.5s 0.3s height cubic-bezier(0.19, 1, 0.22, 1),0.3s box-shadow;
    &:hover {
      background-color: cornflowerblue;
      color: white;
      padding-top: 20px;
      height: 430px;
      box-shadow: #777777 0 0 30px 0px;
      .desc{
        opacity: 1;
        transition: 1s 0.3s opacity cubic-bezier(0.19, 1, 0.22, 1);
      }
    }

    .title {
      font-size: 2rem;
      font-weight: bold;
    }
    .desc {
      opacity: 0;
    }
  }

</style>
