const server = require('express'),
      md5 = require('md5'),
      express = require('express'),
      client = require('./models/client');

class Server {

  constructor(user, music, films, player) {
    
    this.user = user;
    this.music = music;
    this.player = player;
    this.films = films;

  }
  
  getUser() {
    return this.user;
  }

  setUser(user) {
    this.user = user;
  }
  
  serialize() {
    return {
      user: user,
      music: music
    }; 
  }
}

module.exports = Server;
