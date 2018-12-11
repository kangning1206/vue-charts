/*
* @Author: kangning1206
* @Date:   2018-11-25 11:22:25
* @Last Modified by:   kangning1206
* @Last Modified time: 2018-11-25 15:52:18
*/

// 1、OPTIONS
// 返回服务器针对特定资源所支持的HTTP请求方法，也可以利用向web服务器发送‘*’的请求来测试服务器的功能性
// 2、HEAD
// 向服务器索与GET请求相一致的响应，只不过响应体将不会被返回。这一方法可以再不必传输整个响应内容的情况下，
// 就可以获取包含在响应小消息头中的元信息。
// 3、GET
// 向特定的资源发出请求。它本质就是发送一个请求来取得服务器上的某一资源。资源通过一组HTTP头和呈现数据
// （如HTML文本，或者图片或者视频等）返回给客户端。GET请求中，永远不会包含呈现数据。
// 4、POST
// 向指定资源提交数据进行处理请求（例如提交表单或者上传文件）。数据被包含在请求体中。POST请求可能会导致新的资源的建立和/或已有资源的修改。
// Loadrunner中对应POST请求函数：web_submit_data,web_submit_form
// 5、PUT
// 向指定资源位置上传其最新内容
// 6、DELETE
// 请求服务器删除Request-URL所标识的资源
// 7、TRACE
// 回显服务器收到的请求，主要用于测试或诊断
// 8、CONNECT


export default {
  OPTIONS: 'options',
  HEAD: 'head',
  GET: 'get',
  POST: 'post',
  PUT: 'put',
  DELETE: 'delete',
  TRACE: 'trace',
  CONNECT: 'connect',
};
