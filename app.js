const http = new EasyHttp;
//接口地址  https://test-json-f8747.firebaseio.com/  6个子库啊，a,b,c,d,e,f
// 请求数据
http.get("https://my-app-97f6d.firebaseio.com/conpanies/.json")
    .then((data) => {
      console.log(data);
    })
    .catch(err => console.log(err))

// 传输数据
// const data = {
//   name:"Henry",
//   username:"米斯特吴",
//   email:"27732357@qq.com"
// };

// post user
// http.post("http://jsonplaceholder.typicode.com/users",data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// update user
// http.put("http://jsonplaceholder.typicode.com/users/2",data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// delete user
// http.delete('http://jsonplaceholder.typicode.com/users/2')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));
