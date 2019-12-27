<template>
  <div class="tab-control">
    <div v-for="(item,index) in title" :key="index" class="tab-control-item" :class="{active: currentIndex === index}" @click='activeItem(index)' >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TabControl',
    props: {
      title: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    data() {
      return {
        currentIndex : 0
      }
    },
    methods: {
      activeItem(index) {
        this.currentIndex = index;
        this.$emit('tarClick',index);
      }
    }
  }
</script>

<style>
  .tab-control {
    display: flex;
    text-align: center;
    background-color: #fff;
    position: sticky;
    top: 44px;
    z-index: 9;
  }
  .tab-control-item {
    flex: 1;
    height: 44px;
    line-height: 44px;
  }
  .active {
    color: var(--color-high-text);
  }
  .active span {
    padding-bottom: 3px;
    border-bottom: 2px solid var(--color-tint);
  }
</style>