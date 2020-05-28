<template>
  <button
    class="bgg-button"
    :class="[
      `bgg-button--${type}`
    ]"
    @click="handleClick"
  >
    <i :class="icon"></i>
    <span>
      按钮
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
      },
      plain: {
        type: Boolean,
        default: false
      },
      round: {
        type: Boolean,
        default: false
      },
      cycle: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      icon: {
        type: String,
        default: 'bgg-icon-time'
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
  @import "../../theme-chalk/common/variable";
  .bgg-button {
    box-sizing: border-box;
    white-space: nowrap;
    outline: none;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    padding: 0 20px;
    line-height: 32px;
    font-size: $--font-size-btn;
    border-radius: $--border-radius-btn;
    -webkit-appearance: none;
    border: 0;
    &.bgg-button--default {
      color: $--color-white;
      background: $--color-primary;
      border-color: $--color-primary;
      &:active {
        background: $--color-primary;
      }
      &:hover {
        background: $--color-primary-hover;
        border-color: $--color-primary-hover;
      }
    }
  }
</style>
