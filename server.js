const express = require('express')
const app = express()
const port = 4567;
var publicDir = require('path').join(__dirname,'/images');
app.use(express.static(publicDir));

app.get('/', index);
app.get('/skregistration', skRegistration);
app.get('/uregistration', userRegistration);
app.get('/adminlogin', adminLogin);
app.get('/shopkeeperlogin', skLogin);
app.get('/userlogin', userLogin);
app.get('/admin', admin);
app.get('/shopkeeper', shopKeeper);
app.get('/user', user);

app.get('/admin/viewShopKeepers', adminViewShopKeepers);
app.get('/admin/viewUsers', adminViewUsers);
app.get('/admin/viewBooks', adminViewBooks);
app.get('/admin/veiwQueries', adminVeiwQueries);
app.get('/admin/ChangePassword', adminPassword);

app.get('/shopkeeper/viewProfile', skViewProfile);
app.get('/shopkeeper/viewUsers', skViewUsers);
app.get('/shopkeeper/addBooks', skAddBooks);
app.get('/shopkeeper/viewBooks', skViewBooks);
app.get('/shopkeeper/orderBooks', skOrderBooks);
app.get('/shopkeeper/viewQueries', skVeiwQueries);
app.get('/shopkeeper/ChangePassword', skPassword);


app.get('/user/viewProfile', userViewProfile);
app.get('/user/viewShops', userViewShops);
app.get('/user/searchBook', userSearchBooks);
app.get('/user/viewBooks', userViewBooks);
app.get('/user/payment', userPayment);
app.get('/user/myBooks', myBooks);
app.get('/user/viewFavourates', userViewFavourites);
app.get('/user/addQueries', userAddQueries);
app.get('/user/veiwQueries', userVeiwQueries);
app.get('/user/ChangePassword', userPassword);

function index(req, res) {
	res.sendFile("./index.html",{root:__dirname});
}

function skRegistration(req, res) {
	res.sendFile("./shopkeeperReg.html",{root:__dirname});
}

function userRegistration(req, res) {
	res.sendFile("./userReg.html",{root:__dirname});
}

function adminLogin(req, res) {
	res.sendFile("./admin.html",{root:__dirname});
}

function skLogin(req, res) {
	res.sendFile("./shopkeeper.html",{root:__dirname});
}

function userLogin(req, res) {
	res.sendFile("./user.html",{root:__dirname});
}

function admin(req, res) {
	res.sendFile("Admin/home.html",{root:__dirname});
}

function adminViewShopKeepers(req, res) {
	res.sendFile("Admin/viewShopKeepers.html",{root:__dirname});
}

function adminViewUsers(req, res) {
	res.sendFile("Admin/viewUsers.html",{root:__dirname});
}

function adminViewBooks(req, res) {
	res.sendFile("Admin/viewBooks.html",{root:__dirname});
}

function adminVeiwQueries(req, res) {
	res.sendFile("Admin/viewQueries.html",{root:__dirname});
}

function adminPassword(req, res) {
	res.sendFile("Admin/ChangePassword.html",{root:__dirname});
}

function shopKeeper(req, res) {
	res.sendFile("ShopKeeper/home.html",{root:__dirname});
}

function skViewProfile(req, res) {
	res.sendFile("ShopKeeper/profile.html",{root:__dirname});
}

function skViewUsers(req, res) {
	res.sendFile("ShopKeeper/viewUsers.html",{root:__dirname});
}

function skAddBooks(req, res) {
	res.sendFile("ShopKeeper/addBooks.html",{root:__dirname});
}

function skViewBooks(req, res) {
	res.sendFile("ShopKeeper/viewBooks.html",{root:__dirname});
}

function skOrderBooks(req, res) {
	res.sendFile("ShopKeeper/orderBooks.html",{root:__dirname});
}

function skVeiwQueries(req, res) {
	res.sendFile("ShopKeeper/viewQueries.html",{root:__dirname});
}

function skPassword(req, res) {
	res.sendFile("ShopKeeper/ChangePassword.html",{root:__dirname});
}

function user(req, res) {
	res.sendFile("User/home.html",{root:__dirname});
}

function userViewProfile(req, res) {
	res.sendFile("User/profile.html",{root:__dirname});
}

function userViewShops(req, res) {
	res.sendFile("User/viewShops.html",{root:__dirname});
}

function userSearchBooks(req, res) {
	res.sendFile("User/searchbook.html",{root:__dirname});
}

function userViewBooks(req, res) {
	res.sendFile("User/viewBooks.html",{root:__dirname});
}

function userPayment(req, res) {
	res.sendFile("User/payment.html",{root:__dirname});
}

function myBooks(req, res) {
	res.sendFile("User/myBooks.html",{root:__dirname});
}

function userViewFavourites(req, res) {
	res.sendFile("User/viewFavourates.html",{root:__dirname});
}


function userAddQueries(req, res) {
	res.sendFile("User/addQueries.html",{root:__dirname});
}



function userVeiwQueries(req, res) {
	res.sendFile("User/viewQueries.html",{root:__dirname});
}

function userPassword(req, res) {
	res.sendFile("User/ChangePassword.html",{root:__dirname});
}

app.listen(port, () => console.log(`Server Started on ${port} Port Number`))
