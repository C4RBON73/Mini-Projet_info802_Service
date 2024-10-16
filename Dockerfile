# Node
FROM python:alpine 
RUN pip install spyne
RUN pip install lxml
RUN pip install wsgiref
CMD [ "python3", "CalculTempsTrajet.py"]
