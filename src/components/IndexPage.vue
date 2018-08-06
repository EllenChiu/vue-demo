<template>
  <div class="wrap-outer">
    <div class="inner ">
      <h1 class="cover-heading">{{title}}</h1>
      <div class="target-form">
        <form>
          <div class="form-row">
            <div class="col">
              <datepicker :bootstrap-styling="true" placeholder="Depart"></datepicker>
            </div>
            <div class="col">
              <datepicker :bootstrap-styling="true" placeholder="Return"></datepicker>
            </div>
            <div class="col">
              <input type="text" class="form-control" placeholder="From" value="Taoyuan, Taiwan">
            </div>
            <div class="col">
              <input type="text" class="form-control" placeholder="To"  value="Tokyo, Japan">
            </div>
            <div class="col-1">
            <a class="btn btn-primary mb-2" href="/demo-list"><i class="fa fa-search" aria-hidden="true"></i></a>
            </div>
          </div>
        </form>
      </div>

    </div>
  </div>

</template>

<script>
import Datepicker from 'vuejs-datepicker/dist/vuejs-datepicker.esm.js'

export default {
  name: 'IndexPage',
  components: {
    Datepicker
  },
  data () {
    return {
      title: "WHAT'S YOUR NEXT STATION ?"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
html
body {
  height: 100%
}
.wrap-outer {
  display: table;
  width: 100%;
  height: 900px;
  background-image: url('../assets/images/airport.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-color: black;
  opacity:0.6;
}

.inner {
  padding-top: 20%;
  text-align: center;
  .cover-heading {
    color: white;
    font-size: 50px;
    line-height: 26px;
    text-shadow: gray 0.1em 0.1em 0.2em;
  }
  .target-form {
    padding: 0 20%;
    margin-top: 3%;
    .form-control {
      color: black;
    }
  }
}

</style>
