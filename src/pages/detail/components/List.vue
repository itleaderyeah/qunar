<template>
  <div>
    <div class="item" v-for="(item,index) of list" :key="index">
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <div v-if="item.children" class="item-children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .item-title
    line-height: .8rem
    font-size: .32rem
    padding: 0 .2rem
  .border-bottom
    border-bottom: 1px solid #eee
    .item-title-icon
      position: relative
      left: .06rem
      top: .06rem
      display: inline-block
      width: .36rem
      height: .36rem
      margin-right: .15rem
      background: url('https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20202/ea3f321aea9fbf93098a78bdddd3306f.png') no-repeat
      background-size: .3rem
  .item-children
    padding: 0 .2rem
</style>
