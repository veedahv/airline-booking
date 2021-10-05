<template>
  <div class="home">
    <div class="form-box">
      <form class="form">
        <div class="form-group my-3">
          <label for="Fullname">Fullname</label>
          <input type="text" name="fullname" id="fullname" class="w-100 px-3 py-2" />
        </div>
        <div class="form-group my-3">
          <label for="phoneNumber">Phone Number</label>
          <input type="text" name="phoneNumber" id="phoneNumber" class="w-100 px-3 py-2" />
        </div>
        <div class="form-group my-3">
          <label for="flight-class">Flight Class</label>
          <!-- <input type="text" name="phoneNumber" id="phoneNumber" class="w-100" /> -->
            <select name="flight-class" id="flight-class" class="w-100 px-3 py-2">
              <option value="First class">First class</option>
              <option value="Business class">Business class</option>
              <option value="Economic class">Economic class</option>
            </select>
        </div>
        <div class="form-group my-3">
          <label for="dob">Date of birth</label>
          <input type="date" name="dob" id="dob" class="w-100 px-3 py-2">
          <!-- <div class="w-100 row g-3">
            <div class="col">
              <select name="dob" id="yr" class="w-100 px-3 py-2" v-model="year">
                <option
                  :value="n"
                  v-for="n in 70"
                  :key="n"
                  v-text="1950 + n"
                ></option>
              </select>
            </div>
            <div class="col">
              <select name="dob" id="month" class="w-100 px-3 py-2" v-model="month">
                <option :value="n" v-for="n in 12" :key="n" v-text="n"></option>
              </select>
            </div>
            <div class="col">
              <select name="dob" id="dob" class="w-100 px-3 py-2" v-model="day">
                <option :value="n" v-for="n in days" :key="n" v-text="n"></option>
              </select>
            </div>
          </div> -->
          <!-- <input type="text" name="dob" id="dob" class="w-100" /> -->
        </div>
        <!-- <button type="submit">Book</button> -->
        <div class="form-group text-center my-3">
        <button class="book-btn mx-auto btn px-4">BOOK</button>
        </div>
      </form>
    </div>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import api from '../../api/api.php'

export default {
    data(){
        return {
            day: 1,
            month: 1,
            year: 1951,
            }
        },
    computed: {
        days() {
            let pDate;
            if (this.month === 2) {
                pDate = 29;
            } else if (this.month === 9 || 4 || 6 || 11) {
                pDate = 30
            } else {
                pDate = 31
            }
            return pDate;
        }
    },
};
</script>

<style scoped>
.book-btn {
  background-color: var(--secondary-color);
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  width: 180px;
}
.card {
  font-size: 16px;
  background-color: var(--light-color);
}
</style>
