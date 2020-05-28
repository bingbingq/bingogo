<template>
  <button
    class="bgg-button"
    :class="[
      `bgg-button--${type}`,
      {
        'is-plain': plain,
        'is-round': round,
        'is-cycle': cycle,
        'is-disabled': disabled
      }
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
    display: inline-block;
    box-sizing: border-box;
    white-space: nowrap;
    outline: none;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    padding: 12px 24px;
    font-size: $--font-size-btn;
    border-radius: $--border-radius-btn;
    -webkit-appearance: none;
    border: 0;
    & + & {
      margin-left: 5px;
    }
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
    &.is-plain {
      color: $--font-color-plain;
      background: $--color-white;
      border: 1px solid $--border-color-plain;
      &:focus,
      &:hover {
        color: $--color-white;
        background: $--border-color-plain;
        border-color: $--border-color-plain;
      }
    }
    &.is-round {
      border-radius: $--border-radius-round;
    }
    &.is-cycle {
      border-radius: $--border-radius-cycle;
    }
    &.is-disabled {
      cursor: not-allowed;
    }
    &[class*=bgg-icon-] {
      margin-left: 5px;
    }
  }
</style>
