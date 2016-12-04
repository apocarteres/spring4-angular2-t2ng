#!/bin/sh -e

docker run -it --rm -v=`pwd`/idl:/app/idl -v=`pwd`/src:/app/out -e "PROJECT_NAME=t2ng.demo" apocarteres/t2ng