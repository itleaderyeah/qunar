<template>
	<div class="icons">
		<swiper :options="swiperOptions">
			<swiper-slide v-for="(page,index) of pages" :key="index">
				<div class="icon" v-for="item of page" 
				:key="item.id">
					<div class="icon-img">
						<img :src="item.imgUrl" alt="img" 
						class="icon-img-content" /> 
					</div>
					<p class="icon-text">{{item.desc}}</p>
				</div>
			</swiper-slide>	
		</swiper>
	</div>
</template>

<script>
export default {
	name: "HomeIcons",
	props: {
		list: Array
	},
	data () {
		return {
			swiperOptions: {
				autoplay: false
			}
		}
	},
	computed: {
		pages () {
			const pages = [];
			this.list.forEach((item,index)=>{
				const page = Math.floor(index / 8);
				if(!pages[page]){
					pages[page] = [];
				}
				pages[page].push(item);
			})
			return pages
		}
	}
}
</script>

<style lang="stylus" scoped>
	@import "~styles/varibles.styl"
	.icons >>> .swiper-container
		height: 0
		padding-bottom: 50%
	.icons
		margin-top: .2rem
		.icon
			position: relative
			float: left
			width: 25%
			height: 0
			padding-bottom: 25%
			overflow: hidden
			.icon-img
				position: absoulte
				bottom: .44rem
				height: 1.2rem
				text-align: center
				.icon-img-content
					height: 100%
			.icon-text
				text-align: center
				line-height: 0.55rem
				color: $darkTextColor
				overflow: hidden
				white-space: nowrap
				text-overflow: ellipsis
</style>