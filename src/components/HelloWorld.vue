<template>
  <div class="home">
    <h1 class="home-header">Welcome to DZT Land Surveying</h1>
    <div class="header-color-line"></div>
    <button
      class="quote-toggle"
      v-if="!requestQuote"
      @click="requestQuote = true"
    >
      Request a Free Quote
    </button>
    <button
      class="quote-toggle"
      v-if="requestQuote"
      @click="requestQuote = false"
    >
      Cancel
    </button>
    <form v-if="requestQuote" class="quoteForm">
      <p class="required">* = required field</p>
      <label for="name"><span class="required-asterisk">*</span>Name:</label>
      <input
        id="name"
        type="text"
        placeholder="first name"
        v-model="requestDetails.firstName"
        required
      />
      <input
        id="name"
        type="text"
        placeholder="last name"
        v-model="requestDetails.lastName"
        required
      />
      <br />
      <label for="phone">
        <span class="required-asterisk">*</span>Phone Number:
      </label>
      <input
        id="phone"
        type="tel"
        placeholder="###-###-####"
        v-model="requestDetails.phone"
        required
      /><br />
      <label for="email">Email:</label>
      <input
        id="email"
        type="text"
        placeholder="johndoe@example.com"
        v-model="requestDetails.email"
      /><br />
      <label for="description">
        <span class="required-asterisk">*</span>Describe what you need:
      </label>
      <textarea
        id="description"
        type="text"
        placeholder="Ex: Boundary lines marked to build a fence -or- Purchasing and want to see a plat of property"
        v-model="requestDetails.description"
        required
      ></textarea>
      <p class="radio-title">
        <span class="required-asterisk">*</span>Select an option:
      </p>
      <div class="name-container">
        <input
          id="check1"
          type="radio"
          name="check"
          value="I need a map/plat"
          v-model="requestDetails.radioSelection"
          required
        />
        <label for="check1">I need a map/plat</label>
      </div>
      <div class="name-container">
        <input
          id="check2"
          type="radio"
          name="check"
          value="I do NOT need a map/plat"
          v-model="requestDetails.radioSelection"
          required
        />
        <label for="check2">I do NOT need a map/plat</label>
      </div>
      <div class="name-container">
        <input
          id="check3"
          type="radio"
          name="check"
          value="I'm not sure"
          v-model="requestDetails.radioSelection"
          required
        />
        <label for="check3">I'm not sure</label>
      </div>
      <br />
      <label for="site-location">Site Location:</label>
      <input
        id="site-location"
        type="text"
        placeholder="Address"
        v-model="requestDetails.siteLocationAddress"
      />
      <!-- <input id="site-location" type="text" placeholder="Address line 2" /> -->
      <input
        id="site-location"
        type="text"
        placeholder="City/Town"
        v-model="requestDetails.siteLocationCity"
      />
      <input
        id="site-location"
        type="text"
        placeholder="County"
        v-model="requestDetails.siteLocationCounty"
      /><br />
      <label for="owner">Current Owner:</label>
      <input
        id="owner"
        type="text"
        v-model="requestDetails.currentOwner"
      /><br />
      <label for="parcel">Parcel ID/PIN:</label>
      <input id="parcel" type="text" v-model="requestDetails.parcel" /><br />
      <label for="deed">Deed Book & Page:</label>
      <input id="deed" type="text" v-model="requestDetails.deedInfo" /><br />
      <label for="acreage">Approximate Acreage:</label>
      <input
        id="acreage"
        type="number"
        v-model="requestDetails.acreage"
      /><br />
      <label for="billing">Billing Address:</label>
      <input
        id="billing"
        type="text"
        placeholder="Address"
        v-model="requestDetails.billingAddress"
      />
      <!-- <input id="billing" type="text" placeholder="Address line 2" /> -->
      <input
        id="billing"
        type="text"
        placeholder="City/Town"
        v-model="requestDetails.billingCity"
      />
      <input
        id="billing"
        type="text"
        placeholder="State"
        v-model="requestDetails.billingState"
      />
      <input
        id="billing"
        type="number"
        placeholder="Zip"
        v-model="requestDetails.billingZip"
      /><br />
      <button class="submit" @click="sendEmail">Submit</button>
    </form>
  </div>
</template>

<script>
import emailService from "../services/EmailService.js";

export default {
  name: "HelloWorld",
  data() {
    return {
      requestQuote: false,
      requestDetails: {
        firstName: null,
        lastName: null,
        phone: null,
        email: null,
        description: null,
        radioSelection: null,
        siteLocationAddress: null,
        siteLocationCity: null,
        siteLocationCounty: null,
        parcel: null,
        deedInfo: null,
        acreage: null,
        currentOwner: null,
        billingAddress: null,
        billingCity: null,
        billingState: null,
        billingZip: null,
      },
    };
  },
  methods: {
    sendEmail() {
      emailService.sendEmail(this.requestDetails).then((response) => {
        if (response.status === 201) {
          alert("Thank you for your request. We will get back to you shortly.");
        } else if (response.status === 200) {
          alert("(hank you for your request. We will get back to you shortly.");
        } else {
          alert(`Response status is ${response.status}`);
        }
      });
      this.requestQuote = false;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home-header {
  margin-top: 4rem;
}
.header-color-line {
  padding: 0.1%;
  background-image: linear-gradient(to right, #00008b, #43a6e6, #00008b);
  width: 75%;
  margin-right: auto;
  margin-left: auto;
}
.quoteForm {
  display: flex;
  flex-direction: column;
  width: 25%;
  margin-left: auto;
  margin-right: auto;
  /* align-items: center; */
}
.submit {
  margin-bottom: 2rem;
  margin-left: auto;
  margin-right: auto;
  width: 4rem;
}
.required {
  color: red;
}
label {
  text-align: left;
  font-weight: bold;
}
.required-asterisk {
  margin: 0;
  color: red;
}
.radio-title {
  text-align: left;
  font-weight: bold;
}
.name-container {
  text-align: left;
}
.quote-toggle {
  font-size: 1.5rem;
  padding: 0.6rem;
  margin-top: 2rem;
}
@media only screen and (max-width: 600px) {
  .quoteForm {
    width: 50%;
  }
}
</style>
