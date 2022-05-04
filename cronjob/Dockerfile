FROM python:latest

RUN apk update
RUN pip install

COPY populateTable.py .

ENTRYPOINT [ "/bin/sh" ]
CMD [ "python ./populateTable.py" ]