# spring4-angular2-t2ng
Demo project shows how to wire Spring4 and Angular2 using Apache Thrift ([t2ng](https://github.com/apocarteres/t2ng))

Important files:
- thrift/src - generated sources for Java, JS and TS
- thrift/idl - Apache Thrift IDL files
- thrift/generate.sh - runs t2ng in Docker and produces some files into ```src``` dir

Frontend preparation:
 - make sure you have installed ```npm 3.10.8 or newer```
 - we took a well organized seed for Angular2 from: ```https://github.com/mgechev/angular-seed```
 - in order to use Thrift we had to put ```thrift": "^0.9.3``` dependency into ```package.json```
 - assemble dependencies by: ```npm i```
 - we created simple shell script to link Thrift related files ```link-thrift-typings.sh```. Run it from ```angular-seed``` directory
 - make ```"noImplicitAny": false``` in angular-seed/tsconfig.json
 - make ```"noImplicitAny": false``` in angular-seed/src/client/tsconfig.json
 - add Thrift JS implementation to project dependencies at ```angular-seed/tools/config/project.config.ts```
 - start app: type ```npm start -- -b``` from ```angular-seed``` directory
  
Setup NGINX:
 - just make a symlink of ```nginx/t2ng.demo``` to your NGINX ```sites-enabled```folder
 - restart your NGINX: ```nginx -s reload```
 
Build and start up backend:
 - from ```spring4-angular2-t2ng``` directory type ```mvn clean package```
 - and then ```java -jar service/target/service.jar```
 
At this point you can open your browser at go to ```http://localhost:8080```

Type in input box any of ["manager", "programmer", "qa"] values in order to request corresponding person from service

 
