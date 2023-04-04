<template>
  <div>
    <h1>Services</h1>
    <div class="services-color-line"></div>
  </div>
  <div class="services-container">
    <div class="services-row-container">
      <h3>Commercial</h3>
      <h3>Residential</h3>
      <h3>Construction</h3>
    </div>
    <div class="services-row-container">
      <h3>Boundary</h3>
      <h3>ALTA/NSPS Surveys</h3>
      <h3>FEMA Flood Certificates</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServicesOffered",
};
</script>

<style>
.services-color-line {
  padding: 0.1%;
  background-image: linear-gradient(to right, #00008b, #43a6e6, #00008b);
  width: 75%;
  margin-left: auto;
  margin-right: auto;
}
.services-container {
  width: 75%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3rem;
}
.services-row-container {
  display: flex;
  justify-content: space-between;
}
h3 {
  border: solid grey 1px;
  border-radius: 3px;
  background-color: #3f62ae;
  color: white;
  width: 15rem;
  margin-left: auto;
  margin-right: auto;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
@media only screen and (max-width: 600px) {
  .services-container {
    display: flex;
    flex-direction: column;
  }
  .services-row-container {
    display: flex;
    flex-direction: column;
  }
}
</style>
