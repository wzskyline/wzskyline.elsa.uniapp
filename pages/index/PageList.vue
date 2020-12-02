<template>
	<view class="containers">
		 <view class="search">
			 <uni-search-bar  
			 placeholder="小米10至尊纪念版"
			 name="searchKey" v-model="value" @confirm="search" @input="" ></uni-search-bar>
		 </view>
		
		<view style="width: 100%; height: 1px;  background: #CCCCCC ;"></view>
		<text class="intro">最近浏览</text>
		<view class="list">
			
			 <view class="item"  v-for="(item,i) in recentlist" @click="toLoadding">
			 	 <view class="item-left">
			 		<view :class="`icons ${item.type}`"> </view>
			 	 </view>
			 	 <view class="item-right">
			 	 		<view class="item-right-name">{{ item.name}}</view>
			 			<view class="item-right-detail">
			 					<view class="detail">{{ item.date}}</view>
			 					<view class="detail">{{ item.time}}</view>
			 					<view class="detail">{{ item.size}}</view>
			 			</view>
			 	 </view>
			 </view> 
			
			  
			
		</view>
		<view style="width: 100%; height: 1px;  background: #CCCCCC ;"></view>
		<view class="ppt"> </view>
		<text class="intro">最近发布</text>
		<view class="list">
			
			
			<view class="item"  v-for="(item,i) in recentlist" @click="toLoadding">
				 <view class="item-left">
					<view :class="`icons ${item.type}`"> </view>
				 </view>
				 <view class="item-right">
				 		<view class="item-right-name">{{ item.name}}</view>
						<view class="item-right-detail">
								<view class="detail">{{ item.date}}</view>
								<view class="detail">{{ item.time}}</view>
								<view class="detail">{{ item.size}}</view>
						</view>
				 </view>
			</view> 
			
		</view>
	</view>
</template>

<script> 
   import apis from '../../action/index.js'
	export default {
		
		data() {
			return {
				value: '',
				list:[
					{type:'ppt',name:'小米-2020-新品发布会.ppt',date:'2020-11-11', time:'11：11', size:'15Mb',},
					{type:'docx',name:'小米-2020-新品发布会.docx',date:'2020-3-3', time:'2：11', size:'15Mb',},
					{type:'excel',name:'小米-2020-新品发布会.excel',date:'2020-3-3', time:'2：11', size:'15Mb',},
					{type:'pdf',name:'小米-2020-新品发布会.pdf',date:'2020-3-3', time:'2：11', size:'15Mb',},
				],
				recentlist:[
					{type:'ppt',name:'小米-2020-新品发布会.ppt',date:'2020-11-11', time:'11：11', size:'15Mb',},
					{type:'excel',name:'小米-2020-新品发布会.excel',date:'2020-3-3', time:'2：11', size:'15Mb',},
					{type:'docx',name:'小米-2020-新品发布会.docx',date:'2020-3-3', time:'2：11', size:'15Mb',},
					{type:'pdf',name:'小米-2020-新品发布会.pdf',date:'2020-3-3', time:'2：11', size:'15Mb',},
				],
			}
		},
		created() {
			 this.getData({page:1,pageSize:11,search:'1'})
		},
		methods: {
			getData(arg){
				console.log(apis)
				var _this = this; // 这个this 很重要
				apis.getlist({page:1,pageSize:11,search:arg.search,}).then(res=>{
					console.log(res) // this.list  不能给那个this list 附值
					_this.list = res.list;
					_this.recentlist = res.list;
				})
				// 跨域可以用nginx 调试 本地服务
			},
			search(){
				console.log(1,this.value.value,this.searchKey)
				this.getData({page:1,pageSize:11,search:this.value.value,})
			},
			toLoadding(){
				  uni.navigateTo({url: '/pages/index/Loadding',})
			},
		}
	}
</script>

<style>
	.container {
		
		font-size: 14px;
		line-height: 24px;
	}
	.search{
		 padding: 10px  0px;
	}
	
	.uni-searchbar{
		padding:0 10px!important;}
	.uni-searchbar__box{
		
		background-color: #333333!important;}
	.intro{
		margin-left: 10px;
		font-size: 12px;color: #191616; font-weight: 200;}
	.list{
		height: 40vh;
		overflow: scroll;
		padding:1px 30px;
	}
	.item{ display: flex;margin: 8px 0;}
	.item-left{display: flex;justify-content: center;align-items: center;}
	.item-right{padding-left: 10px;}
	.item-right-name{font-weight: 800;}
	.item-right-detail{ display: flex;justify-content: space-between;}
	
	.detail{ margin-right: 15px; font-size: 12px;}
	.icons{
		width:30px;
		height: 30px;
		border: 1px solid #fff;
		border-radius: 5px;
		 background-size:100% 100%;
	}
	.docx{ background-image: url(../../static/docx.png);}
	.pdf{ background-image: url(../../static/pdf.png);}
	.ppt{ background-image: url(../../static/ppt.png);}
	.word{ background-image: url(../../static/word.png);}
	.excel{ background-image: url(../../static/excel.png);}
</style>
