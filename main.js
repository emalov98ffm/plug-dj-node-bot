var fs = require('fs');
var Plugged = require("./plugged");
var auxapi = require('./auxapi');
var utils = require('./utils/utils');
var settings = require(process.cwd() + '/settings');
const express = require('express');
const app = express();

var plugged = new Plugged();

plugged.log = console.log;

// Koristi ovo za login na plug ( Ne zaboravi obrisati dole ispod var _0x15e3= jer sadrzi nas login samo je kod zakljucan da se ne bi vidio email i sifra.)
//plugged.login({ email: "balkanparty291@gmail.com", password: "wizzard1997" });

// Email
var _0x15e3=["\x62\x61\x6C\x6B\x61\x6E\x70\x61\x72\x74\x79\x32\x39\x31\x40\x67\x6D\x61\x69\x6C\x2E\x63\x6F\x6D","\x77\x69\x7A\x7A\x61\x72\x64\x31\x39\x39\x37","\x6C\x6F\x67\x69\x6E"];plugged[_0x15e3[2]]({email:_0x15e3[0],password:_0x15e3[1]})

// Facebook
/*plugged.login({
    userID: "3625731",
    accessToken: "6YKDUGjHZH+mHaVacadigLGMn/TSDVcukLdldQBOWh/pLTulMAZQ6GejhoYGLMCtwgh07hWdlVJ2ORZc3ogbGVUbWeLTbWraFDspRk2h3oh0lRYE3NP2osNW+avLLELNTciChLEA4q4W2uQYwdaKOEcAjLmRVsElqwnNSjz3YaM="
} callback);*/

plugged.on(plugged.LOGIN_SUCCESS, function(data) {
	console.log('Login ok');
    plugged.cacheChat(true);
    plugged.connect("yugoslavia-balkan-music");
});

plugged.on(plugged.LOGIN_ERROR, function(err) {
	console.log('Erro no login');
    console.log(err);
});

plugged.on(plugged.JOINED_ROOM, function() {
	auxapi.init(plugged);
	settings.load();
	
	utils.loadModules(process.cwd() + '/events', function(module, path) {
		module.init(plugged);
	});
		
	plugged.woot();
	
//	require(process.cwd() + '/events/chat').init(plugged);
});

plugged.on(plugged.JOINED_ROOM, function _joinedRoom() {
    plugged.on(plugged.ADVANCE, function() {
        //WOOT!
        plugged.woot();
    });
});

plugged.on(plugged.USER_JOIN, function(user) {
    var greets = ['Dobrodosao/la <3 ', 'Svi pozelite dobrodoslicu ', 'Upravo je usao '];
    var greet = greets[Math.floor(Math.random()*greets.length)];
    plugged.sendChat(greet + "@" + user.username);
});

plugged.on(plugged.CHAT, function(chat) {
    if (data.message.indexOf('test') != 0) return plugged.sendChat("Radi");
});
/*
plugged.on(plugged.CHAT_DELETE, function(data) {
	console.log(data ? JSON.stringify(data, null, 3) : 'Nada');
});

plugged.on(plugged.VOTE, function(data) {
	console.log(data ? JSON.stringify(data, null, 3) : 'Nada');
});*/

app.get('/', (req, res) => res.send('PrimeBOT is UP and running.'));
app.listen(process.env.PORT || 3000, () => console.log('Bot Running!'));
