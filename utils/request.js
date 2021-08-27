export default function request(path,data={},method='get'){
	return new Promise((resolve,reject)=>{
		wx.request({
			url:'http://localhost:3001' + path,
			data,
			method,
			success:(res)=>{
				resolve(res.data)
			},
			fail:(err)=> {
				reject(err)
			}
		})
	})
}