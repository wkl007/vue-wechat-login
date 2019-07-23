#!/usr/bin/env bash
npm run build:pro
scp -r dist/* 正式服务器用户名@正式服务器公网ip:/目录
