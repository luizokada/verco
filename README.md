# Veg.co

Site desenvolvido para fazer um comparativos de preços de produtos veganos que são vendidos em diversos lugares.

Executar o client em modo de desenvolvimento:
`yarn dev`

Executar a build do client:
`yarn start`

Para executar a api:
`pip install`

`python manage.py runserver`

A pasta cronjob contem o script de um cronjob que poderia se armazenar no Kubernetes para executar, de hora em hora, a atualização do banco da aplicação se baseado na existência de um bucket na AWS que armazena um .json com as ultimas modificações de produtos criadas por um cliente pessoa jurídica.

Dessa forma, o cliente não precisa inserir os produtos manualmente.
