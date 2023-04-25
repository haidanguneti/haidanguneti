//const conn=require('./myql');//cí này cần để ở một file riêng
var express =require("express");
var app=express();

var http=require("http").createServer(app);

var socketio=require("socket.io")(http,{cors:{origin:["https://haidanguneti.000webhostapp.com"]}});

http.listen(process.env.PORT||3000,function(){
console.log("sever stated running..");
socketio.on("connection",function(socket){
console.log("co nguoi ket noi"+socket.id);

//////////  csdl

 
//////////
//đây là phần cần xử lý
///////////////////////////////////////////	
/*   socket.on("getchat",function(data){
		var kq=JSON.parse(data);
		var data1=kq.myse;
		var data2=kq.it;
		socket.join(data1);
		
		
		//console.log(socket.id);
		//console.log(socket.adapter.rooms);
var sql = "SELECT * FROM mess WHERE (outmess = '"+data1+"' AND inmess = '"+data2+"')  OR (outmess = '"+data2+"' AND inmess = '"+data1+"') ORDER BY msgid";
 conn.query(sql, function (err,result,fields){
	 if (err) throw err;
	  var te=result.messeng;
	 var ht="";
	 var c=result.length;
	 for(var i=0;i<c;i++){
	     if(result[i].outmess==data2 ){
	        socket.emit("getchat","<div class='get'><p>"+result[i].messeng+"</p></div>"); 
		       }else {
                     socket.emit("getchat","<div class='out'><p>"+result[i].messeng+"</p></div>");         
	                   }
	                     };
	                        });
	                             });   */
		
////////////////////////////////////////////////////	
/*  	 socket.on("insertchat",function(data){
		var kq=JSON.parse(data);
		var data1=kq.myse;
		var data2=kq.it;
		var data3=kq.ndmess;
		socket.join(data1);
 	    var sql = "INSERT INTO mess (outmess,inmess,messeng) VALUES ('"+data1+"','"+data2+"','"+data3+"')";
  conn.query(sql, function (err, result) {if (err) throw err;});

	}); */ 	 
      
///////////////////////////////////////////////	
  socket.on("toyou",function(data){
		var kq=JSON.parse(data);
		var data1=kq.myse;
		var data2=kq.it;
		var data3=kq.ndmess;
		socket.join(data1);
console.log(data1);
console.log(data2);
console.log(data3);

socket.join(data2);
socket.phong=data2;
console.log(socket.adapter.rooms);
socket.broadcast.to(socket.phong).emit("toyou","lamoi");
socket.leave(data2);
console.log(socket.adapter.rooms);	
	



	});    
/////////////////////////////////////////  

				 
                                 
                              				

	
  /*socket.phong=data2;//tạo thêm object phong
	socket.join(data2);
	socketio.to(socket.phong).emit("toyou",data3);//tất cả trong phòng đó
    socket.broadcast.to(socket.phong).emit("toyou",data3);//tất cả trong phòng đó trừ người yêu cầu 
	tránh đặt hàm io là "socket" mà hãy đặt là "socketio" vì trong thư viện có săn lệnh "socket" 
     hãy tạo thêm object cho socket như là socket.phong rồi mới nhúng vào tên room  .
     value của input                                                                               	 */

  
 
  });
});




