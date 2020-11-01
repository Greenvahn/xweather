<template>
  <button class="button is-medium" :title=infoPlace.place>
    <span class="info">
      <p class="is-date">{{ infoPlace.date }}</p>
      <h2 class="is-title">
       <!-- {{ infoPlace.place }} -->
       {{ truncated( infoPlace.place, 12) }}
      </h2>
      <p class="is-time">
        {{ infoPlace.time }}
        <span class="is-utc" v-if="infoPlace.utc"> | {{ infoPlace.utc }} </span>
        <span class="is-country" v-if="infoPlace.country">
          | {{ infoPlace.country }}
        </span>
      </p>
    </span>

    <span class="icon">
      <img :src="require('../assets/svg-icons/geowidget-global.svg')" />
    </span>
  </button>
</template>

<script>
export default {
  name: "geoWidget",
  props: {
    infoPlace: Object,
  },
  setup() {
    const truncated = (content, limit) => {
      // Limit --> define the limit of characters to show
      return content.length > limit
        ? content.slice(0, limit) + '...'
        : content;
    };

    return {
      truncated,
    };
  },
};
</script>

<style scoped lang="scss">
.button {
  display: flex;
  border: 2px solid rgba($color: #5a5e90, $alpha: 0.3);
  color: #5a5e90;
  transition: all 0.6s;

  height: 100%;
  max-height: 100px;
  min-width: 200px;
  margin-right: 15px;
  p,
  h2 {
    text-align: left;
  }

  .info {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 75%;
    .is-date {
      font-size: 14px;
    }
    .is-title {
      text-transform: uppercase;
    }
    .is-time {
      font-size: 18px;
      text-transform: uppercase;
    }
    .is-utc,
    .is-country {
      opacity: 0.5;
      font-size: 16px;
    }
  }

  .icon {
    width: 25%;
    transition: all 0.6s;
    opacity: 0.3;
    img {
      width: 50px;
      height: 50px;
    }
  }

  &:hover {
    border: 2px solid #5a5e90;
    background: #e8f0fe;

    .icon {
      opacity: 1;
    }
  }
}
</style>
