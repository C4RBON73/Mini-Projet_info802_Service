
module.exports = { 
 /*   getCalcul : async function(){
        var res = 5;
        var args = {distance: 1000., autonomie: 200., tpsRecharge: 0.15};
        res = await create(args);
         
        console.log("bijour");
        console.log(res);
        return res;
    }
}

async function create(args){
    var soap = require('soap');
    var url = 'http://127.0.0.1:8000/CalculTpsTrajetService.wsdl';
    
    soap.createClient(url, {}, function (err, client) {
        if (err) {
            console.error('Error creating SOAP client:', err);
            return;
        }
        client.Calcul_Temps(args, function (err, result) {
            if (err) {
                console.error('Error making SOAP request:', err);
                return;
            }
            console.log("ici");
            return result
        });
    });*/

    // Utilisation de la fonction
    getCalcul : async function(){
    res = await myObject.calcul()
    return res;
    }

    
}
const soap = require('soap');

const create = async function (args) {
    const url = 'http://127.0.0.1:8000/CalculTpsTrajetService.wsdl';

    return new Promise((resolve, reject) => {
        soap.createClient(url, {}, function (err, client) {
            if (err) {
                console.error('Error creating SOAP client:', err);
                reject(err);
            }

            client.Calcul_Temps(args, function (err, result) {
                if (err) {
                    console.error('Error making SOAP request:', err);
                    reject(err);
                }
                resolve(result);
            });
        });
    });
};

const myObject = {
    calcul: async function () {
        var res = 5;
        var args = { distance: 1000., autonomie: 200., tpsRecharge: 0.15 };
        res = await create(args);

        return res;
    }
};


