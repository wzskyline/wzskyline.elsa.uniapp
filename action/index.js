let host = location.host.includes('8000')?'http://106.12.144.8:7001': `http://${location.host}`;
host = 'http://127.0.0.1:1234'
export const urls={
  list:`${host}/list`,
  update:`${host}/update`,
}

const safeFetch = async (url,method,postData,headers)=>{
  let arg = {}
  if(method){
    arg = { method: method, body:JSON.stringify(postData), mode:'cors', headers:{
      "content-type":"application/json;charset=utf-8"
    }  }
  } 
  const res = await fetch(url, arg).then(function(response){  
    return response.json() 
   }).catch(function(e){ 
    console.log('error: ' + e );
   })
  return res; 
}
export const  getlist = async (arg)=>{
   let url = `${urls.list}?search=${arg.search}&page=${arg.page}&pageSize=${arg.pageSize}`
   const res = await safeFetch(url); return res;
}
  
export const  addOneExcel = async (table,obj)=>{
  obj.id = Date.now()%1000000;
  const res = await safeFetch(`${urls.update}`,'post',{table,obj}); return res;
}
export default {
  getlist,addOneExcel
}