<template>
	<div class="wrapper">
		<swiper :options="swiperOptions" v-if="showSwiper">
		    <swiper-slide v-for="item of list" :key="item.id">
		    	<img :src="item.imgUrl" alt="img" class="swiper-img" />
		    </swiper-slide>
		    <div class="swiper-pagination" slot="pagination"></div>
	  </swiper>
	</div>
</template>

<script>
export default {
	name: "HomeSwiper",
	props: {
		list: Array
	},
	data () {
		return {
			swiperOptions: {
				pagination: '.swiper-pagination',
				loop: true
			}
		}
	},
	computed: {
		showSwiper () {
			return this.list.length
		}
	}
}
</script>

<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	.wrapper >>> .swiper-pagination-bullet-active
		background: #fff
	.wrapper
		width: 100%
		height: 0
		overflow: hidden
		padding-bottom: 48.25%
		background: #f2f2f2
		.swiper-img
			width: 100%
			height: 200px
</style>