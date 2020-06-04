const express =require ('express');

let pintore = require('../controles/pintorescontroller.js');

let ruter =exprerss.router();

router.get('/', pintor.list());
module.exports = router;