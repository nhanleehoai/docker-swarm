FROM centos:7
MAINTAINER Nhan Le <nhanleehoai@yahoo.com>

WORKDIR /tmp
ENV URL=http://nginx.org/packages/centos/7/x86_64/RPMS/nginx-1.8.1-1.el7.ngx.x86_64.rpm

RUN yum update -y && \
yum install -y wget && \
wget -q "${URL}" && \
yum localinstall -y nginx-1.8.1-1.el7.ngx.x86_64.rpm && \
rm -f nginx-1.8.1-1.el7.ngx.x86_64.rpm && \
rm -rf /var/cache/yum

RUN useradd www && \
	mkdir /var/www && \
	chown www /var/www/ && \
	mkdir /etc/nginx/ssl && \
	chown www /etc/nginx/ssl
	
COPY nginx.conf /etc/nginx/
COPY index.html /var/www/


EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]




