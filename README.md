# Official Electronero Website

### Clone the repo
```
git clone https://github.com/electronero/electronero.github.io electronero-site
cd electronero-site
npm i
npm start
```
The application is now running on port 3000

### Prerequisites

NodeJS > 8 <https://nodejs.org/en/download/>

### Server

#### NGINX
Example NGINX server for HTTP, ssl is not very different.
```
server {
    root /usr/share/nginx/electronero.org;
    index index.php index.html index.htm;

    listen 80;
    server_name electronero.com electronero.net electronero.org electronero.info;

    location / {
        proxy_pass http://your_server_ip:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Example NGINX conf, change 192.168.0.1 to your server ip. Run two instances of the app in load balancing strategy, serve index through proxy pass reverse. https://www.nginx.com/resources/wiki/start/topics/examples/full/
```
user       www www;  ## Default: nobody
worker_processes  5;  ## Default: 1
error_log  logs/error.log;
pid        logs/nginx.pid;
worker_rlimit_nofile 8192;

events {
  worker_connections  4096;  ## Default: 1024
}

http {
  include    conf/mime.types;
  include    /etc/nginx/proxy.conf;
  include    /etc/nginx/fastcgi.conf;
  index    index.html index.htm index.php;

  default_type application/octet-stream;
  log_format   main '$remote_addr - $remote_user [$time_local]  $status '
    '"$request" $body_bytes_sent "$http_referer" '
    '"$http_user_agent" "$http_x_forwarded_for"';
  access_log   logs/access.log  main;
  sendfile     on;
  tcp_nopush   on;
  server_names_hash_bucket_size 128; # this seems to be required for some vhosts

  server { # php/fastcgi
    listen       80;
    server_name  electronero.com electronero.net electronero.org electronero.info;
    access_log   logs/electronero.access.log  main;
    root         html;

    location ~ \.php$ {
      fastcgi_pass   127.0.0.1:1025;
    }
  }

  server { # simple reverse-proxy
    listen       80;
    server_name  electronero.com electronero.net electronero.org electronero.info;
    access_log   logs/electronero.access.log  main;

    # serve static files
    location ~ ^/(images|javascript|js|css|flash|media|static)/  {
      root    /var/www/virtual/big.server.com/htdocs;
      expires 30d;
    }

    # pass requests for dynamic content to rails/turbogears/zope, et al
    location / {
      proxy_pass      http://127.0.0.1:3000;
    }
  }

  upstream big_server_com {
    server 127.0.0.3:3000 weight=5;
    server 127.0.0.3:3001 weight=5;
    server 192.168.0.1:3000;
    server 192.168.0.1:3001;
  }

  server { # simple load balancing
    listen          80;
    server_name     big.server.com;
    access_log      logs/big.server.access.log main;

    location / {
      proxy_pass      http://big_server_com;
    }
  }
}
```

Or to use Apache first we must enable some mods: 
```a2enmod proxy proxy_ajp proxy_http rewrite deflate headers proxy_balancer proxy_connect proxy_html```

Example Apache server for HTTP. 
```
<VirtualHost *:80>
	ServerName electronero.org
	ServerAlias electronero.com electronero.net electronero.info
   
    # Servers to proxy the connection, or;
    # List of application servers:
    # Usage: 
    # ProxyPreserveHost On
    # ProxyPass / http://[IP Addr.]:[port]/
    # ProxyPassReverse / http://[IP Addr.]:[port]/
    
	ProxyPreserveHost On
	ProxyPass / http://0.0.0.0:3000/ keepalive=on
	ProxyPassReverse / http://0.0.0.0:3000/
</VirtualHost>
```
SSL is not much different.
```
<VirtualHost *:443>

    SSLEngine On

    # Set the path to SSL certificate
    # Usage: SSLCertificateFile /path/to/cert.pem
    SSLCertificateFile /etc/apache2/ssl/file.pem


    # Servers to proxy the connection, or;
    # List of application servers:
    # Usage:
    # ProxyPreserveHost On
    # ProxyPass / http://[IP Addr.]:[port]/
    # ProxyPassReverse / http://[IP Addr.]:[port]/

    ProxyPreserveHost On
    ProxyPass / http://0.0.0.0:3000/
    ProxyPassReverse / http://0.0.0.0:3000/


</VirtualHost>
```

### Port
Change port the app runs on by starting the app with ```node ./bin/www 300``` 
To set the port for production set the process.env before you run the app, or just edit the following Start script in package.json 
```
{
  "name": "electronero",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "start": "node ./bin/www"
  },
  
  Modify the start script and add port as seen below:
  
  {
  "name": "electronero",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "start": "node ./bin/www 3001"
  },
```
