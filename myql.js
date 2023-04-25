var mysql = require('mysql');

var conn = mysql.createConnection({
  host: "194.233.170.150",
  user: "freedb_root123456",
  password: "8G8Suj%88C9t7mY",
  port:3306,
  //database: "freedb_student1"
});


conn.connect(function (err){
    //nếu có nỗi thì in ra
    if (err) throw err.stack;
    //nếu thành công
    console.log('ket noi thanh cong');
});

module.exports=conn;