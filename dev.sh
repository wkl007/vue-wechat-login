#!/usr/bin/env bash
npm run build:dev
scp -r dist/* 测试服务器用户名@测试服务器公网ip:/目录
