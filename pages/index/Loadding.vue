<template>
	<view class="loadding">
		 <view class="center">
		 	 <view class="iconView">
		 	 	 <view class="icon">
		 	 	 	 <view class="icons ppt"> </view>
		 	 	 </view>
		 	 </view>
		 </view>
		 <view class="center" style="margin-top: 20px;">
		 	 <view class="word1">{{word1}}</view>
		 </view>
		 <view class="center" style="margin-top: 15px;">
		 	 <view class="word2">{{word2}}</view>
		 </view>
		 
		 <view class="center">
		 	 <view class="loadding-center">
				 <view id="loadding-line" class="loadding-line"></view>
			 </view>
		 </view>
		 <view class="center">
		 	 <view class="loadding-words">
				 {{loadding}}
		 	 </view>
		 </view>
		 <view class="center">
		 	 <view class="bottom-btn">
				 取消加载
		 	 </view>
		 </view>
		 
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//变化的量
				word1: '小米纪念版本参数详解.docx ',
				word2: '文件大小：919.50kb ',
				loadding:'5.22 KB/s',
			}
		},
		mounted(){
			 
			//js 再这个mounted生命周期操作dom元素 模拟一下
			var line = document.getElementById('loadding-line')
			setTimeout(()=>{
				line.style.width = '100px'
				this.loadding = '10.22 KB/s'
			},1000);
			setTimeout(()=>{
				line.style.width = '140px'
				this.loadding = '25.22 KB/s'
			},3000);
			setTimeout(()=>{
				line.style.width = '300px'
				this.loadding = '65.22 KB/s'
			},5000);
		},
		created() {
			
		}, 
		methods: {

		}
	}
</script>

<style>
	.loadding{
		background-color: #fff;
		padding-top: 20px;
	}
	.center {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.iconView{
		background-color: #6465660f;
		padding: 10px;
		border-radius: 5px;
	}
	.icon{
		margin:5px
	}
	.word1{
		font-size: 18px;
		font-weight: 800;
		color:#000;
	}
	.word2{
		font-size: 14px;
		font-weight: 400;
		color:#666666;
	}
	.loadding-center{
		background-color: #6465660f;
		width: 90vw;
		margin: 50px 0 10px 0;
		border-radius: 50px;
	}
	.loadding-line{
		height: 4px;
		background: #007AFF;
		border-radius: 50px;
		width: 20px;
	}
	.loadding-words{
	    font-size: 8px;	
	}
	.bottom-btn{
		background-color: #6465660f;
		border-radius: 50px;
		padding: 10px 50px;
		color:#000;
		font-size: 18px;
		font-weight: 800;
		position: absolute;
		bottom: 20px;
	}
	
	.icons{
		width:30px;
		height: 30px;
		background-size:100% 100%;
	}
	.docx{ background-image: url(../../static/docx.png);}
	.pdf{ background-image: url(../../static/pdf.png);}
	.ppt{ background-image: url(../../static/ppt.png);}
	.word{ background-image: url(../../static/word.png);}
	.excel{ background-image: url(../../static/excel.png);}
</style>
