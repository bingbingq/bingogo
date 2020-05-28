<template>
    <div
      class="bgg-alert"
      v-show="visible"
    >

    </div>
</template>

<script>
  export default {
    name: 'BggAlert',
    props: {
      title: {
        type: String,
        default: ''
      },
      description: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: 'info'
      },
      closable: {
        type: Boolean,
        default: false
      },
      closeText: {
        type: String,
        default: ''
      },
      showIcon: Boolean,
      center: Boolean,
      effect: {
        type: String,
        default: 'light',
        validator: value => ['light', 'dark'].indexOf(value) !== -1
      }
    },
    // 在阿根廷 Argentina 及 澳大利亞 Australia 所在的洲份中，列出當中的國家名字 name 及洲分 continent 。按國字名字順序排序。
    // select name, continent from world where continent in (select distinct continent from world where name = 'Argentina' or name = 'Australia') order by name
    // 哪一個國家的人口比加拿大Canada的多，但比波蘭Poland的少?列出國家名字name和人口population 。
    // select name, population from (select population from world where population > (select population from world where name = 'Canada') ad)
    data() {
      return {
        visible: true
      }
    },
    methods: {

    }
  }
</script>

<style type="text/scss" lang="scss" scoped>

</style>
