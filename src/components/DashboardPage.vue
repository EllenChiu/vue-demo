<template>
  <div class="wrapper">
    <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
      <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Hi, Ellen</a>
      <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search">
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a class="nav-link" href="#"><i class="fa fa-search" aria-hidden="true"></i></a>
        </li>
      </ul>
    </nav>

    <div class="container-fluid">
      <div class="row">
        <nav class="col-md-2 d-none d-md-block bg-light sidebar">
          <div class="sidebar-sticky">
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  <span data-feather="home"></span>
                  Dashboard <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <i class="fa fa-calendar feather" aria-hidden="true"></i>
                  Calendar
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <i class="fa fa-book feather" aria-hidden="true"></i>
                  Note
                </a>
              </li>

            </ul>
            <hr />
            <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span>Relate Link</span>
            </h6>
            <ul class="nav flex-column mb-2">
              <li class="nav-item">
                <a class="nav-link" href="#/welcome">
                  Trip Work
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://github.com/EllenChiu">
                   GitHub
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/">
                   Sign Out
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
          <div class="block account-area">
            <h5>Accounting</h5>
            <div class="content">
              <form class="form-inline">
                <div class="input-group mb-2">
                  <div class="input-group-prepend">
                    <span class="input-group-text">$</span>
                  </div>
                  <input type="number" class="form-control" v-model="amount" name="amount">
                </div>
                <!-- <div class="form-group mx-sm-3 mb-2">
                  <select class="form-control" v-model="type" name="type">
                    <option value="food">Food</option>
                    <option value="clothing">Clothing</option>
                    <option value="fiance">Finance</option>
                    <option value="entertain">Entertainment</option>
                    <option value="salary">salary</option>
                  </select>
                </div> -->
                <div class="form-group mx-sm-3 mb-2">
                  <select class="form-control mx-sm-1" v-model="month" name="month">
                    <option value="8">Aug</option>
                    <option value="7">Jul</option>
                    <option value="6">Jun</option>
                    <option value="5">May</option>
                    <option value="4">Apirl</option>
                    <option value="3">Mar</option>

                  </select>
                </div>
                <div class="form-group mx-sm-3 mb-2">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" id="category1" v-model="category" name="category" value="1">
                    <label class="form-check-label" for="category1">Income</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" id="category2"  v-model="category" name="category" value="0">
                    <label class="form-check-label" for="category2">Expenses</label>
                  </div>
                </div>
                <button type="button" class="btn btn-primary btn-sm mb-2" @click="save">Save</button>
              </form>
            </div>

          </div>
          <hr>
          <div class="block">
            <div class="row">
              <div class="col-6">
                <div class="bucket gray income">
                  <div class="dollar" id="income-count" >{{ income | commaFormat }}</div>
                  <p>
                    <!-- <img src="https://png.icons8.com/color/100/000000/money-box.png"> -->
                    Income
                  </p>
                </div>
              </div>
              <div class="col-6">
                <div class="bucket gray expense">
                  <div class="dollar"  id="expense-count" >{{ expense | commaFormat }}</div>
                  <p>
                    <!-- <img src="https://png.icons8.com/color/100/000000/cash-in-hand.png" /> -->
                    Expense
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="block">
            <h5>  Summary</h5>
            <div class="content">
              <GChart
                  type="LineChart"
                  :data="chartData"
                  :options="chartOptions"
                  ref="gChart"
                />
            </div>

          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import { GChart } from 'vue-google-charts'

export default {
  name: 'Dashboard',
  components: {
    GChart
  },
  data () {
    return {
      income: 1000,
      expense: 500,
      amount: 1000,
      month: '8',
      category: '1',
      chartData: [
        ['Month', 'Income', 'Expenses'],
        ['3', 2999, 2890],
        ['4', 5000, 3446],
        ['5', 4000, 1120],
        ['6', 6000, 1540],
        ['7', 5330, 540],
        ['8', 1000, 500]
      ],
      chartOptions: {
        chart: {
          title: 'Summary',
          width: 400,
          height: 300
        }
      }
    }
  },
  filters: {
    commaFormat: function (d) { // 加上千分位符號
      d = parseInt(d)
      var re = /(-?\d+)(\d{3})/
      while (re.test(d)) {
        d = d.toString().replace(re, '$1,$2')
      }
      return d
    }
  },
  methods: {
    save () {
      const getCategory = this.category
      const getMonth = parseInt(this.month) - 2
      var getAmount = parseInt(this.amount, 10)
      var income = parseInt(this.income)
      var expense = parseInt(this.expense)

      if (!getAmount) { getAmount = 0 }

      if (getCategory === '1') {
        this.income = income + getAmount
        this.chartData[getMonth][1] = this.income
      } else {
        this.expense = expense + getAmount
        this.chartData[getMonth][2] = this.expense
      }
      this.$refs.gChart.drawChart()

      // reset amount
      // this.amount = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css">
@import '../assets/css/dashboard.css';
@import '../assets/css/account.css';

</style>
