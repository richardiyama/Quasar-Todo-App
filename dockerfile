#change this to your own repo, should you have uploaded your image!
FROM  quasar framework/client-dev:latest

MAINTAINER Orb Solutions <richard.iyama@orbsolutions.com.ng>

WORKDIR /opt/app

COPY package.json /opt/app/
RUN npm install

COPY . /opt/app

EXPOSE 8080

CMD /bin/sh
