
const {GraphQLClient} = require("graphql-request");
const nGQLC = new GraphQLClient("https://api.chargetrip.io/graphql", {
    headers: {
        "Content-Type" : "application/json",
        "x-client-id": "65f84a06f8b5c3070f031324",
        'x-app-id': '65f84a06f8b5c3070f031326',
    }
});

function requete()  {

    const query = `
                  {
                    carList(size:100, page:0) {
                        id
                        naming {
                          make
                          model
                          version
                          edition
                          chargetrip_version
                        }
                        adapters {
                          standard
                          power
                          time
                          speed
                        }
                        battery {
                          usable_kwh
                          full_kwh
                        }
                        range {
                          chargetrip_range {
                            best
                            worst
                          }
                        }
                        media {
                          image {
                            id
                            type
                            url
                            height
                            width
                            thumbnail_url
                            thumbnail_height
                            thumbnail_width
                          }
                        }
                        routing {
                          fast_charging_support
                        }
                      }
                  }
                `

    return new Promise(((resolve, reject) => {
        nGQLC.request(query).then((data) => resolve(data)).catch(e => reject(e));
    }))
}
module.exports = {



carsQuery : async function(){
    let res = "" ;
    await requete().then(r => {
        res = r;
    }).catch(e => {
        res = e;
    })
    return res;
}
}