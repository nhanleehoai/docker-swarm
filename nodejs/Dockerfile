FROM centos:7
MAINTAINER Nhan Le <nhanleehoai@yahoo.com>

ENV URL=http://nodejs.org/dist/v8.11.3/node-v8.11.3-linux-x64.tar.gz

RUN yum update -y && \
yum install -y wget && \
cd /tmp/ && \
wget -q "${URL}" && \
tar --strip-components 1 -xzf node-v* -C /usr/local && \
rm -f node-v8.11.3-linux-x64.tar.gz && \
rm -rf /var/cache/yum

RUN mkdir /opt/node

COPY hello.js /opt/node/

EXPOSE 8080

CMD ["node", "/opt/node/hello.js"]




