# Node
FROM python:alpine 
RUN pip install spyne
RUN pip install lxml
CMD [ "python3", "CalculTempsTrajet.py"]
