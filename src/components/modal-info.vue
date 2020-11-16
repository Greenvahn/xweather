<template>
  <section id="information" class="section">
    <div class="content">
      <h2>How it works</h2>
      <p>
        XWeather displays the weather information based on your
        <a href="https://en.wikipedia.org/wiki/IP_address" target="_blank"
          >IP location</a
        >. This data may not be accurate in some locations and can vary
        depending on your IP settings and geographical restrictions.
      </p>

      <h3>Look up specific places</h3>
      <p>
        The app allows you to check the weather worldwide for any specific
        location worldwide. Simply click the geolocation button and type in the
        desired place.
      </p>
      <img class="geoImg" :src="require('../assets/geolocationwidget.jpg')" />
      <h3>404 - City not found</h3>
      <p>
        If the place you searched for is not found or not the one you are
        looking for, try the following:
      </p>
      <ul>
        <li>Double check the place is spelled correctly</li>
        <li>
          Put the city's name, comma, 2-letter country code
          <a
            href="https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes"
            target="_blank"
            >(ISO3166)</a
          >. You will get all proper cities in chosen country. The order is
          important - the first is city name then comma then country. Example -
          <i>London, GB or New York, US</i>
        </li>
      </ul>
      <h3>Index icons</h3>
      <div class="tableWrap columns">
        <div class="column">
          <table
            class="table is-bordered is-striped is-narrow is-hoverable is-half"
          >
            <thead>
              <tr>
                <th>Icon</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="tableIcon">
                  <img :src="require('../assets/svg-icons/01d.svg')" />
                </td>
                <td>clear sky - day</td>
              </tr>
              <tr>
                <td class="tableIcon">
                  <img :src="require('../assets/svg-icons/01n.svg')" />
                </td>
                <td>clear sky - night</td>
              </tr>
              <tr>
                <td class="tableIcon">
                  <img :src="require('../assets/svg-icons/02d.svg')" />
                </td>
                <td>few clouds - day</td>
              </tr>
              <tr>
                <td class="tableIcon">
                  <img :src="require('../assets/svg-icons/02n.svg')" />
                </td>
                <td>few clouds - night</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="column">
          <table
            class="table is-bordered is-striped is-narrow is-hoverable is-half"
          >
            <thead>
              <tr>
                <th>Icon</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="tableIcon">
                  <img :src="require('../assets/svg-icons/03d.svg')" />
                </td>
                <td>scattered clouds</td>
              </tr>
              <tr>
                <td class="tableIcon">
                  <img :src="require('../assets/svg-icons/04d.svg')" />
                </td>
                <td>broken clouds</td>
              </tr>
              <tr>
                <td class="tableIcon">
                  <img :src="require('../assets/svg-icons/09d.svg')" />
                </td>
                <td>shower rain</td>
              </tr>
              <tr>
                <td class="tableIcon">
                  <img :src="require('../assets/svg-icons/10d.svg')" />
                </td>
                <td>rain</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="column">
          <table
            class="table is-bordered is-striped is-narrow is-hoverable is-half"
          >
            <thead>
              <tr>
                <th>Icon</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="tableIcon">
                  <img :src="require('../assets/svg-icons/11d.svg')" />
                </td>
                <td>thunderstorm</td>
              </tr>
              <tr>
                <td class="tableIcon">
                  <img :src="require('../assets/svg-icons/13d.svg')" />
                </td>
                <td>snow</td>
              </tr>
              <tr>
                <td class="tableIcon">
                  <img :src="require('../assets/svg-icons/50d.svg')" />
                </td>
                <td>mist</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <h1>Disclaimer</h1>
      <p>
        This is a personal project to develop my skills and put them into practice. This project is licensed
        under the terms of the
        <a
          href="https://github.com/Greenvahn/xweather/blob/master/LICENSE"
          target="_blank"
          >MIT license</a
        >
      </p>
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
  height: auto;
  min-height: 100%;
  width: 100%;
  z-index: 2;
  background: rgba(255, 255, 255, 1);

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

    h3 {
      font-size: 18px;
    }

    p {
      margin-bottom: 0.5em;
      &.mb-35 {
        margin-bottom: 35px;
      }
    }

    .tableWrap {
      table {
        th {
          font-size: 14px;
          color: #5a5e90;
          border-bottom: 1px solid rgba(#5a5e90, 0.4);
        }

        td {
          font-size: 12px;
          vertical-align: middle;
          &.tableIcon {
            padding: 0px 10px;
            width: 12%;
            height: 20px;
            img {
              width: 40px;
              height: 40px;
            }
          }
        }
      }
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
