<template>
  <div class="about-container">
    <h1>About Us</h1>
    <p class="about-content">
      We are newly formed professional land surveying firm serving Moore County
      and Central/Eastern North Carolina. While we are a new firm, we are not
      new to the area. Our licensee and all of our staff have been with other
      firms in this area for several years and are familiar with projects and
      real estate locally. We are fully licensed and insured to conduct large
      scale projects and, but also accepting new clients and individual work for
      residential and smaller projects. Our scope of work includes but is not
      limited to:
    </p>
    <ul class="about-list-container">
      <li>Construction Staking</li>
      <li>ALTA/NSPS Surveys</li>
      <li>FEMA Elevation Certificates</li>
      <li>Residential and Commercial Boundary</li>
      <li>Site Plans and Staking for fences, pools, additions, etc.</li>
    </ul>
    <h1 class="about-team-container">Our Team</h1>
    <p class="member-description">
      David R. Essick PLS, graduate of Sandhills Community College, has been
      practicing surveying for 11 years, and is professionally licensed by the
      State of North Carolina. David grew up in Asheboro, North Carolina and
      worked for Survey Carolina for six years before pursuing his Geomatics
      degree from Sandhills Community College. Since graduating David has been a
      General Manager for Matthews Land Surveying.
    </p>
    <p class="member-info">
      <span>E-mail: david@DZTsurveying.com</span>
      <span>License #: L-5423</span>
    </p>
    <p class="member-description">
      Zebulen R. McNeill, graduate of Sandhills Community College, has been a
      full time Field Crew Chief, and Project manager during his tenure at
      Matthews Land Surveying. Zebulen is from Robbins, North Carolina and found
      his passion for surveying during the fall of 2020 when he started working
      for Professional Land Surveyor Matthew Callahan while working towards his
      Civil Engineering Technology Degree.
    </p>
    <p class="member-info">
      <span>E-mail: zeb@DZTsurveying.com</span>
    </p>
    <p class="member-description">
      Tyler N. Morris, graduate of Sandhills Community College, has been a full
      time Field Crew Chief, and Project manager during his tenure at Matthews
      Land Surveying. Tyler is from Biscoe, North Carolina and has been working
      for a professional land surveyor since the summer of 2020.
    </p>
    <p class="member-info">
      <span>E-mail: tyler@DZTsurveying.com</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "about-content",
};
</script>

<style>
.about-container {
  margin-top: 2em;
  margin-left: 10%;
  margin-right: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
}
.about-list-container li {
  margin-bottom: 2%;
}
.about-team-container {
  margin-top: 2em;
}
.member-info {
  margin-bottom: 4em;
}
span {
  margin: 1em;
}
@media only screen and (max-width: 600px) {
  .member-info {
    display: flex;
    flex-direction: column;
  }
}
</style>
