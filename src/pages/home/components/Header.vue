<template>
	<div class="header">
		<div class="header-left">
			<span class="iconfont back-icon">&#xe624;</span>
		</div>
		<div class="header-input">
			<span class="iconfont">&#xe632;</span>
			输入城市/景点/游玩主题
		</div>
		<div class="header-right">
			<router-link to="/city">
				<span class="link">{{this.city}}</span>
				<span class="iconfont arrow-icon">&#xe64a;</span>
			</router-link>
		</div>
	</div>
</template>

<script>
import { mapState,mapGetters } from 'vuex'
export default {
	name: "HomeHeader",
	computed: {
		...mapState(['city']),
		...mapGetters(['doubleCity'])
	}
}
</script>

<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	.header
		display: flex
		line-height: $headerHeight
		background: $bgColor
		color: #fff
		.header-left
			width: 0.64rem
			float: left
			margin-left: .1rem
			.back-icon
				text-align: center
				font-size: 0.4rem
		.header-input
			flex: 1
			height: 0.64rem
			line-height: 0.64rem
			margin-top: 0.12rem
			margin-left: 0.2rem
			border-radius: 0.1rem
			background: #fff
			color: #ccc
			text-indent: .1rem
		.header-right
			min-width: 1.04rem
			padding: .05rem
			margin-top: -0.03rem
			float: right
			text-align: center
			.arrow-icon
				margin-left: .04rem
				font-size: .2rem
				color: #fff
			.link
				color: #fff
</style>