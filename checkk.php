<html>
<head>
<title>demo socket io</title>

<script src="socket.io.js"></script> 
<script> 
var socketio=io("http://192.168.1.16:3000");
var userid="cung ok nha";
socketio.emit("cation",userid);
 socketio.on("cation",function(data){
document.getElementById("noidung").innerHTML=data;
});
</script>
</head>
<body>
<div id="mra">click send</div>
<h2 id="noidung"></h2>
</body>
</html>


////////////////////////////////////////////////////	
 /* 	socket.on("insertchat",function(data){
		var kq=JSON.parse(data);
		var data1=kq.myse;
		var data2=kq.it;
		var data3=kq.ndmess;
 	    var sql = "INSERT INTO mess (outmess,inmess,messeng) VALUES ('"+data1+"','"+data2+"','"+data3+"')";
  conn.query(sql, function (err, result) {if (err) throw err;});
    //console.log(socket.id+"vua gui:"+data);
    //socketio.sockets.emit("cation",data+"888");
	//socket.emit();
	//socket.broadcast.emit();
	//socketio.to("socketid or name socket").emit();
	//socketio.to(data2).emit("getchat","ao that de");
	socket.on("disconnect",function(){
	console.log("co nguoi ngat ket noi"+socket.id);
conn.end(); 	
});
	});   */
///////////////////////////////////////////////	
 /* socket.on("you",function(data){
		var kq=JSON.parse(data);
		var data1=kq.myse;
		var data2=kq.it;
		var data3=kq.ndmess;

	var d="ao that de";
	socketio.to(data2).emit("you",d);
	
	

	}); */   
/////////////////////////////////////////