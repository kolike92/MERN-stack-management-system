const mongoose   = require('mongoose');
//mongoose.connect('mongodb://kolike92:KOlike2266@database2-shard-00-00-bfpnw.mongodb.net:27017,database2-shard-00-01-bfpnw.mongodb.net:27017,database2-shard-00-02-bfpnw.mongodb.net:27017/test?ssl=true&replicaSet=database2-shard-0&authSource=admin&retryWrites=true&w=majority',{ useNewUrlParser: true });
mongoose.connect('mongodb://kolike92:KOlike2266@database2-shard-00-00-bfpnw.mongodb.net:27017,database2-shard-00-01-bfpnw.mongodb.net:27017,database2-shard-00-02-bfpnw.mongodb.net:27017/test?ssl=true&replicaSet=database2-shard-0&authSource=admin&retryWrites=true&w=majority',{ useNewUrlParser: true });

// get persistent class
const User     = require('../../project 2/express/users');
      
var user = new User();  
user.name='Jack'
user.rank='General'
user.sex = 'male'
user.date = '122'
user.phone='123'
user.email='456'
user.save(function(err) {
	if (err) {
		console.log(err);
	}
	else {
		console.log('User created!');
		User.find(function(err, users) {
			if (err) {
				console.log(err);
			}
			else {
				console.log(users);
			}
		});
	}
});