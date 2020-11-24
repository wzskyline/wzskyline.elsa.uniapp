<template>
	<view class="containers">
		 <page-head/>
		 <page-list/>
	</view>
</template>

<script>
	import PageHead from './PageHead.vue';
	import PageList from './PageList.vue';
	export default {
		components:{PageHead,PageList},
		data() {
			return {
				href: 'https://uniapp.dcloud.io/component/README?id=uniui'
			}
		},
		methods: {

		}
	}
</script>

<style>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}
</style>
