<template>
  <button
    class="bgg-button"
    :class="[
      `bgg-button--${type}`
    ]"
    @click="handleClick"
  >
    <span>
      按钮0.0.7
	    <slot></slot>
	  </span>
  </button>
</template>

<script>
  export default {
    name: 'BggButton',
    props: {
      type: {
        type: String,
        default: 'default'
      }
    },
    methods: {
      handleClick(e) {
        this.$emit('click', e)
      }
    }
  }
</script>

<style type="text/scss" lang="scss" scoped>
  .bgg-button {
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    &.bgg-button--default {
      background: #2c3e50;
      color: #fff;
      border: none;
      &:active {
        background: #4b504d;
      }
      &:hover {
        background: #add1ff;
      }
    }
  }
</style>
