var express = require('express');
var router = express.Router();
const path = require("path");
const clientS = require("./ClientSOAP.js");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname,"./PagePrincipale.html"));

});

distance= 1000.
autonomie= 200.
tpsRecharge= 0.15

  router.get('/getCalcul', async (req, res) => {
    try {
        const result = await clientS.getCalcul();
        res.send(result);
    } catch (error) {
        console.error('Une erreur est survenue :', error);
        res.status(500).send('Une erreur est survenue côté serveur.');
    }
});

module.exports = router;
