from zeep import Client
import sys


def calculTemps ():

    distance = sys.argv[1]
    autonomie = sys.argv[2]
    tpsRecharge = sys.argv[3]
    client = Client('http://127.0.0.1:8000/CalculTpsTrajetService.wsdl')
    result = client.service.Calcul_Temps(distance, autonomie, tpsRecharge)
    print(result)
    return result
    

