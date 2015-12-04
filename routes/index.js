var express = require('express');
var passport = require('passport');
var router = express.Router();

var Event = require('../models/EventModel');
var UserModel = require('../models/UserModel');

router.get('/register', function(req, res) {
    res.render('register', { });
});

router.post('/register', function(req, res) {
    UserModel.register(new UserModel({ username : req.body.username }), req.body.password, function(err, UserModel) {
        if (err) {
            return res.render('register', { UserModel : UserModel });
        }

        passport.authenticate('local')(req, res, function () {
            res.redirect('/');
        });
    });
});

router.get('/login', function(req, res) {
    res.render('login', { user : req.user });
});

router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/admin');
});

router.post('/deletedata', function(req, res){
  if(req.user !== undefined && req.user.username == 'admin'){
      Event.findByIdAndRemove(req.body.iddata, function (err, data) {
        res.redirect('/admin')
      });
  }
  else {
    res.redirect('/');
  }
});

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

router.get('/admin', function(req, res) {
    if(req.user !== undefined && req.user.username == 'admin'){
      Event.find().limit(4).sort({date: -1}).exec(function (err, ev) {
        res.render('admin', { title: "Panneau d'administration", data: ev });
      });
    }
    else {
      res.redirect('/');
    }
});

/* GET home page. */
router.get('/info/:id', function(req, res, next) {
  Event.findOne({_id: req.params.id}, function (err, resu){
    res.render('info', { title: resu.nom, data: resu });
  });
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'EventReporter' });
});

router.get('/event', function(req, res, next) {
  Event.find().limit(4).sort({date: -1}).exec(function (err, ev) {
    res.render('event', { title: 'Événements en cours', data: ev });
  });
});

router.get('/signaler', function(req, res, next) {
  res.render('signaler', { title: 'Signaler un événement' });
});

router.post('/signaler', function(req, res, next) {
  var newEvent = new Event({nom: req.body.nom, description: req.body.message, statut: 0, description_admin: "Pas de description admin.", date: req.body.date, longitude: req.body.longitude, latitude: req.body.latitude, date: req.body.date, ip: req.body.ip});
  newEvent.save();
  res.redirect('/');
  });

  router.post('/update_admin', function(req, res, next) {
    var statut = 0;

    if(req.body.statut1 !== undefined && req.body.statut1 == 'on')
      statut = 1;
    else if(req.body.statut2 !== undefined && req.body.statut2 == 'on')
      statut = 2;

    Event.update({_id: req.body.id_modification}, {description_admin: req.body.description_admin, statut: statut}).exec();
    res.redirect('/admin');
    });

  var server = require('http').createServer(router),
      io = require('socket.io').listen(server),
      ent = require('ent'),
      fs = require('fs');

  var io = require('socket.io').listen(server);

  // quand un client se connecte
  io.sockets.on('connection', function (socket, pseudo, room) {

    socket.on('nouveau_client', function(pseudo, room) {
        socket.join(room);
        pseudo = ent.encode(pseudo);
        socket.broadcast.to(room).emit('nouveau_client', pseudo);
    });

    socket.on('message', function (message, pseudo, room) {
          message = ent.encode(message);
          socket.broadcast.to(room).emit('message', {pseudoem: pseudo, message: message});
      });

  });
  server.listen(3001);

module.exports = router;
