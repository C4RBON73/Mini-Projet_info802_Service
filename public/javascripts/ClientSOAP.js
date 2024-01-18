var soap = require('soap');
  var url = 'http://127.0.0.1:8000/CalculTpsTrajetService.wsdl';
  //Reponse du SOAP = 6h15
  var args = {distance: 1000., autonomie: 200., tpsRecharge: 0.15};

  soap.createClient(url, {}, function(err, client) {
      client.Calcul_Temps(args, function(err, result) {
          console.log(result);
      });
  });