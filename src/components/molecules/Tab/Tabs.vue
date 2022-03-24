<template>
  <div>
    <ul class="nav nav-tabs">
      <li class="nav-item" v-for="tab in tabs" :key="tab.name">
        <a
          class="nav-link"
          :class="{ active: tab.isActive }"
          :href="tab.href"
          @click.prevent="selectTab(tab)"
          >{{ tab.name }}
        </a>
      </li>
    </ul>
    <div class="tabs-details">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabsItem",
  data() {
    return {
      tabs: [],
    };
  },
  created() {
    this.tabs = this.$children;
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach((tab) => {
        tab.isActive = tab.name === selectedTab.name;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/index.scss";

.nav {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 10px;
  list-style: none;
  margin-top: 20px;
  justify-content: space-around;
}
.nav-tabs {
  border-bottom: 1px solid #dee2e6;
}
ul {
  margin-top: 0;
}
.nav-tabs .nav-item {
  margin-bottom: -1px;
}
.nav-tabs .nav-link {
  border: 1px solid transparent;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}
.nav-link {
  display: block;
  padding: 0.5rem 1rem;
}
.nav-tabs .nav-link.active {
  background-color: #fff;
  border-color: #fff #fff $colorPrimary #fff;
  border-bottom-width: 2px;
}
a {
  color: $colorPrimary;
  text-decoration: none;
  background-color: transparent;
}
</style>