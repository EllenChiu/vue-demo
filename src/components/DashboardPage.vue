<template>
  <div class="wrapper">

  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data () {
    return {
      titile: 'Welcome!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

 .wrapper {
   background-color: #ecf1ea;
   height: 100%;
 }
 .nav {
   padding: 10px 20px;
   i {
     color: #18a2b9d1;
   }
 }
 .wrap-main {
   margin: 5% 30%;
   padding-bottom: 10%;
 }
 .login-block {
   background-color: white;
   border: 1px #ccc;
   border-radius: 6px;
   padding: 20px 20px;
   box-shadow:4px 4px 12px -2px #b4b4b980;
   -webkit-box-shadow:4px 4px 12px -2px #b4b4b980;

 }
 .login-icon {
   text-align: center;
   i.fa-user-circle {
     color: #18a2b9;
     opacity: 0.7;
   }
   .circle-image, img {
     height: 100px;
     width: 100px;
     border-radius :50%;
     display: inline-flex;

   }

 }
 .login-btn {
   margin: 20px 0px;
 }

 .f-l {
   float: left;
 }
 .f-r {
   float: right;
 }
 .clear {
   clear: both;
 }

</style>
