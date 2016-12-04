#!/bin/sh -e

PROJECT_NAME=t2ng.demo
NODE_MODULES_DIR=./node_modules/${PROJECT_NAME}
TS_TYPING_DIR=./tools/manual_typings
THRIFT_SOURCE=`pwd`/../thrift/src/${PROJECT_NAME}

rm -fr ${NODE_MODULES_DIR} && mkdir ${NODE_MODULES_DIR}
rm -fr ${TS_TYPING_DIR}/${PROJECT_NAME} && mkdir ${TS_TYPING_DIR}/${PROJECT_NAME}

echo "{\"name\":\"$PROJECT_NAME\",\"version\":\"0.0.1\"}" > ${NODE_MODULES_DIR}/package.json

for file in ${THRIFT_SOURCE}/js/*
do
  ln -s ${file} ${NODE_MODULES_DIR}
done
for file in ${THRIFT_SOURCE}/ts/*
do
  ln -s ${file} ${TS_TYPING_DIR}/${PROJECT_NAME}/`basename ${file}`
done

rm -fr ${TS_TYPING_DIR}/thrift.d.ts && ln -s `pwd`/node_modules/thrift/lib/ts/thrift.d.ts ./tools/manual_typings

