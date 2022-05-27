const express = require('express');
const router = express.Router();
const {PC, Cabinet} = require('../models');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const pc = await PC.findAll();
  console.log(pc);
  res.render('index', { title: 'PCs', pc });
});

router.get('/cabinet/:idPC', async function(req, res, next) {
  const idPC = req.params.idPC;
  const pc = await PC.findByPk(idPC);

  const cab = await Cabinet.findAll({where: {pcId: idPC}});
  console.log(cab);
  res.render('cabinet', { title: 'Cabinets', pc, cab });
});

router.get('/addPC', async function (req, res, next) {
  res.render('addPC', {title: 'AddPC',});
});

router.post('/addPC', async function (req, res, next) {
  const pc = new PC({opVolume: req.body.opVolume,
    presenceOfAVideoСard: req.body.presenceOfAVideoСard,
    cpu: req.body.cpu});
  await pc.save();
  res.redirect('/')
});

router.get('/addCabinet', async function (req, res, next) {
  const pc = await PC.findAll();
  const cab = await Cabinet.findAll();
  res.render('addCabinet', {title: 'AddCabinet', cab, pc});
});

router.post('/addCabinet', async function (req, res, next) {
  const cab = new Cabinet({number: req.body.number, pcId: req.body.pcId});
  await cab.save();
  res.redirect('/');
});

module.exports = router;
