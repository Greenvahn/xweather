<template>
  <section id="information" class="section">
    <div class="content">
      <h1>General information</h1>
      <p>
        This project is an exercise of practice. Building and designing a
        weather application is a good way to put my skills in action, experiment
        and explore new paths for learning.
      </p>
      <h2>Geolocation</h2>
      <p>
        Weather tries to protect your privacy as much as possible so the web app
        detects your location via IP. This location does not need be accurate
        100% and it variates depending of your IP settings.
      </p>
      <h2>404 - City not found</h2>
      <p>
        Search engine is very flexible. If you can’t find your city/place try
        the following:
      </p>
      <ul>
        <li>
          To make it more precise put the city's name, comma, 2-letter country
          code (ISO3166). You will get all proper cities in chosen country. The
          order is important - the first is city name then comma then country.
          Example - London, GB or New York, US
        </li>
      </ul>
      <h2>Index icons</h2>
      <p>Here is a short description of what it means each icon.</p>
      <table
        class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth"
      >
        <thead>
          <tr>
            <th>One</th>
            <th>Two</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Three</td>
            <td>Four</td>
          </tr>
          <tr>
            <td>Five</td>
            <td>Six</td>
          </tr>
          <tr>
            <td>Seven</td>
            <td>Eight</td>
          </tr>
          <tr>
            <td>Nine</td>
            <td>Ten</td>
          </tr>
          <tr>
            <td>Eleven</td>
            <td>Twelve</td>
          </tr>
        </tbody>
      </table>
      <button
        class="back-button"
        @click="$emit('modal-info')"
        aria-label="close"
      >
        <img :src="require('../assets/svg-icons/chevron-back.svg')" />
        BACK
      </button>
    </div>
  </section>
</template>

<script>
export default {
  props: {},
};
</script>

<style lang="scss">
#information {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 2;
  background: rgba(255, 255, 255, 0.9);

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  .content {
    width: 80%;
    height: 100%;
    margin: 0 auto;
    position: relative;

    h1 {
      font-size: 24px;
    }

    h2 {
      font-size: 18px;
    }
  }

  .back-button {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 50px auto 0 auto;
    width: 85px;
    height: 40px;
    border-radius: 5px;
    background: #5a5e90;
    color: white;
    border: none;
    cursor: pointer;

    &:focus {
      outline: none;
    }

    &:hover {
      background: #404366;
    }

    img {
      width: 20px;
      height: 20px;
      margin-right: 5px;
    }
  }
}
</style>
