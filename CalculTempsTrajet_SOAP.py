
from spyne import *
from lxml import *

from spyne.server.wsgi import WsgiApplication

from spyne.protocol.soap import Soap11

from wsgiref.simple_server import make_server

class CalculTpsTrajetService(ServiceBase) :
    @rpc(Float, Float, Float,  _returns=Float)
    def Calcul_Temps(ctx, distance,vitesse,points):
        temps = distance/vitesse * 60
        return temps + (points * 30)

        
application = Application([CalculTpsTrajetService], 'spyne.examples.hello.soap',
    in_protocol=Soap11(validator='lxml'),
    out_protocol=Soap11())

wsgi_application = WsgiApplication(application)

server = make_server('127.0.0.1', 8000, wsgi_application)
server.serve_forever()
