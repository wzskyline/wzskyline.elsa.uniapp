<template>
	<view class="main">
		 <view class="end-title">
		 　　<view @tap="change(0)" :class="{btna:btnnum == 0}">小米手机</view>
		   　<view @tap="change(1)" :class="{btna:btnnum == 1}">vivo手机</view>
		 　　<view @tap="change(2)" :class="{btna:btnnum == 2}">华为手机</view>
		 </view>
		 <view>
			 <view class="end-cont" :class="{dis:btnnum == 0}">
				 <view class="item"> 0信息 </view>
			  　　<view class="item"> 0信息 </view>
			  　　<view class="item"> 0信息 </view>
			 </view>
			 <view class="end-cont" :class="{dis:btnnum == 1}">
			  　　<view class="item"> 1信息 </view>
			  　　<view class="item"> 1信息 </view>
			  　　<view class="item"> 1信息 </view>
			 </view>
			 <view class="end-cont" :class="{dis:btnnum == 2}">
			   　 <view class="item"> 2信息 </view>
			  　　<view class="item"> 2信息 </view>
			  　　<view class="item"> 2信息 </view>
				  <view class="item"> 2信息 </view>
			  　　<view class="item"> 2信息 </view>
			  　　<view class="item"> 2信息 </view>
			 </view>
		 </view>
	</view>
</template>

<script>
 	export default {
		 
		data() {
			return {
				 btnnum: 0, 
			}
		},
		methods: {
			change(e) {
				  this.btnnum = e
				  console.log(this.btnnum)
			  }
		}
	}
</script>

<style>
	     .main{ display: flex;}
		.end-title{
	         width: 30vw;
			 height: 100vh;
			 background: #f3eeb1;
	     }
	     .end-title view{
	         flex-grow: 1;
	         text-align: center;
			 padding: 20px 0px;
			 background-color: #f3eeb1;
	     }
	     .end-cont{
	         display: none;
	         background: #fff;
			 width: 70vw;
	     }
	     .btna{
	         color: #ad7119;
	         background-color: #fff!important;
	     }
	     .dis{
	         display: block;
	     }  
		 .item{
			 text-align: center;
			 padding: 10px 0;
		 }
</style>
