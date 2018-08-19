<template >
  <div class="wrapper">
    <div class="nav">
      <i class="fa fa-cubes fa-2x" aria-hidden="true"></i>
    </div>
    <div class="wrap-main">
      <div class="login-block">
        <div class="login-icon">
          <!-- <i class="fa fa-user-circle fa-5x"  aria-hidden="true"></i> -->
          <div class="circle-image">
            <img src="../assets/images/login.png" >

          </div>
        </div>
        <div class="login-form">
          <form>
            <div class="form-group">
              <label >Name / Email</label>
              <input type="text" class="form-control" value="Ellen">
            </div>
            <div class="form-group">
              <label >Password</label>
              <input type="password" class="form-control" placeholder="password" value="12345">
            </div>
          </form>
        </div>
        <div class="login-btn">
          <button class="btn btn-info btn-lg btn-block" @click="login" >
            <span v-show="sendLogin">{{loginBtnText}}</span>
            <span v-show="!sendLogin"><i class="fa fa-spinner fa-spin fa-fw"></i></span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      loginBtnText: 'Login',
      sendLogin: true
    }
  },
  methods: {
    login () {
      this.sendLogin = false
      const self = this
      setTimeout(function () {
        self.$router.push('dashboard')
      }, 1000)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
body {

}
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
