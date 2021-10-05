<template>
  <div class="home">
    <div class="form-box p-4">
      <h2 class="title text-center" v-if="isNew">Add flights</h2>
      <h2 class="title text-center" v-else>Edit flights</h2>
      <form class="form mx-auto">
        <div class="stop">
          <!-- <input  class="click" type="text" placeholder="Flight Id" required> -->
          <!-- <input  class="click" type="text" placeholder="icao" required> -->
          <!-- <input class="click" type="text" value="12,000"> <br> -->
          <!-- <input class="click" type="datetime-local" placeholder="Date&Time" value="" required>  -->
        </div>
        <div class="w-100 row g-3">
          <div class="col">
            <div class="form-group my-3">
              <label for="price">Price</label>
              <input
                type="text"
                name="price"
                id="price"
                class="w-100 px-3 py-2"
              />
            </div>
          </div>
          <div class="col">
            <div class="form-group my-3">
              <label for="availableSeats">Available seats</label>
              <input
                type="text"
                name="availableSeats"
                id="availableSeats"
                class="w-100 px-3 py-2"
              />
            </div>
          </div>
        </div>
        <div class="w-100 row g-3">
          <div class="col">
            <div class="form-group my-3">
              <label for="departure">Departure</label>
              <!-- <input type="text" name="phoneNumber" i="phoneNumber" class="w-100" /> -->
              <select name="departure" id="departure" class="w-100 px-3 py-2">
                <option value="Admin">Uyo</option>
                <option value="Staff">Lagos</option>
                <option value="User">Owerri</option>
                <option value="Admin">Abuja</option>
                <option value="Staff">Benin</option>
                <option value="User">Kano</option>
              </select>
            </div>
          </div>
          <div class="col">
            <div class="form-group my-3">
              <label for="destination">Destination</label>
              <!-- <input type="text" name="phoneNumber" i="phoneNumber" class="w-100" /> -->
              <select
                name="destination"
                id="destination"
                class="w-100 px-3 py-2"
              >
                <option value="Admin">Uyo</option>
                <option value="Staff">Lagos</option>
                <option value="User">Owerri</option>
                <option value="Admin">Abuja</option>
                <option value="Staff">Benin</option>
                <option value="User">Kano</option>
              </select>
            </div>
          </div>
        </div>
        <div class="w-100 row g-3">
          <div class="col">
            <div class="form-group my-3">
              <label for="status">Status</label>
              <!-- <input type="text" name="phoneNumber" i="phoneNumber" class="w-100" /> -->
              <select name="status" id="status" class="w-100 px-3 py-2">
                <option value="Admin">Yet to depart</option>
                <option value="Staff">Departed</option>
              </select>
            </div>
          </div>
          <div class="col">
            <div class="form-group my-3">
              <label for="dob">Date of birth</label>
              <input type="date" name="dob" id="dob" class="w-100 px-3 py-2" />
            </div>
          </div>
        </div>
        <!-- <button type="submit">Book</button> -->
        <div class="form-group text-center my-3">
          <button class="book-btn mx-auto btn px-4">SUBMIT</button>
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
  data() {
    return {
      day: 1,
      month: 1,
      year: 1951,
      isNew: true,
    };
  },
  computed: {
    days() {
      let pDate;
      if (this.month === 2) {
        pDate = 29;
      } else if (this.month === 9 || 4 || 6 || 11) {
        pDate = 30;
      } else {
        pDate = 31;
      }
      return pDate;
    },
  },
  created() {
    //   if (this.route.params) {
    //       this.isNew = false
    //   }
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
.form { 
    max-width: 500px;
}
</style>
