<template>
	<view>
	<view class="HEAD">
		    <view class="intro-area" >
					<view class="fenlei"> 分类 </view>
					<img  @click = "change" class="tool" :src="iconup"/>
				</view> 
				<view class="tools"> 
					<img class="tool" :src="iconrecent"/>
					<img class="tool" :src="icondownload"/>
					<img class="tool" :src="icondot"/>
				</view>
				
	</view>  
	
	<view :class="[{ 'none': show },'swipper']"  style="width: 100vw;">
		 <swiper autoplay="true" indicator-dots="true" circular="true" style="height: 400upx;">  
		    <swiper-item ALL="小米新品 小米众筹 轻薄5G 手机电视家电 笔记本智能 小米秒杀">  
			  
			  <view class="my-swiper-item"  v-for="(item,i) in swipera">
			    <view :class="`xm ${item.class}`"></view>
				<view class="item-text">{{item.text}}</view>
			  </view> 
			</swiper-item>  
			<swiper-item >
				 <view class="my-swiper-item"  v-for="(item,i) in swipera">
				    <view :class="`xm ${item.class}`"></view>
				 	<view class="item-text">{{item.text}}</view>
				 </view> 
			</swiper-item>  
		  </swiper>
	</view>
	</view>
</template>

<script>
	import icondot from '../../static/head-dot.png'
	import icondownload from '../../static/head-download.png'
	import iconrecent from '../../static/head-recent.png'
	import iconup from '../../static/head-up.png'
	export default {
			
		data() {
			return { icondot,icondownload,iconrecent,iconup,
			    show:true,
				swipera:[
					{class:'xm-a',text:'小米新品'},
					{class:'xm-b',text:'小米众筹'},
					{class:'xm-c',text:'红米'},
					{class:'xm-d',text:'轻薄5G'},
					{class:'xm-e',text:'笔记本'},
					
					{class:'xm-f',text:'小米秒杀'},
					{class:'xm-g',text:'手机'},
					{class:'xm-h',text:'家电'},
					{class:'xm-i',text:'智能'},
					{class:'xm-j',text:'穿戴'},
				],
				href: 'https://uniapp.dcloud.io/component/README?id=uniui'
			}
		},
		methods: {
			change(){this.show = !this.show},
		}
	}
</script>

<style>
	
	.none{display: none;}
	.HEAD{ display: flex;justify-content: space-between;padding: 10px 5px;}
	.tools{ display: flex;justify-content: space-between;}
	.intro-area{display: flex;}
	.tool{ margin-right: 10px;}
	.fenlei{ font-weight: 800;font-size: 18px;}
	img{
		width: 20px;
		height: 20px;
		}
		uni-swiper-item{display: flex;flex-wrap: wrap;}
		.my-swiper-item{ text-align: center; }
		.item-text{}
		uni-icons{width: 20px;}
		
		.xm{
			width:90px;
			height: 58px;
			border: 1px solid #fff;
			border-radius: 5px;
			background-image: url(../../static/head.png);
		 
		}
		.xm-a{ background-position: -0px -0px;}
		.xm-b{ background-position: -110px -0px;}
		.xm-c{ background-position: -210px -0px;}
		.xm-d{ background-position: -320px -0px;}
		.xm-e{ background-position: -430px -0px;}
		.xm-f{ background-position: 10px -80px;}
		.xm-g{ background-position: -110px -80px;}
		.xm-h{ background-position: -21px -80px;}
		.xm-i{ background-position: -310px -80px;}
		.xm-j{ background-position: -410px -80px;}
</style>
