const config = require('../deploy.config.js')
const helper = require('./core/helper')
const compressFile = require('./core/compressFile')
const sshServer = require('./core/ssh')
const uploadFile = require('./core/uploadFile')
const runCommand = require('./core/handleCommand')
const deleteFile = require('./core/deleteFile')

// 主程序(可单独执行)
async function main () {
  try {
    const SELECT_CONFIG = (await helper(config)).value // 所选部署项目的配置信息
    console.log('您选择了部署 ' + SELECT_CONFIG.name)
    const targetFile = `${SELECT_CONFIG.releaseDir}.zip` // 本地压缩文件
    const localFile = `${__dirname}/${targetFile}` // 待上传本地文件
    SELECT_CONFIG.openCompress ? await compressFile(SELECT_CONFIG.targetDir, localFile, SELECT_CONFIG.releaseDir) : '' //压缩
    await sshServer.connectServe(SELECT_CONFIG.ssh) // 连接
    await uploadFile(sshServer.ssh, SELECT_CONFIG, targetFile, localFile) // 上传
    await runCommand(sshServer.ssh, 'unzip ' + targetFile, SELECT_CONFIG.deployDir) // 解压
    await runCommand(sshServer.ssh, 'rm -f ' + targetFile, SELECT_CONFIG.deployDir) // 删除
    deleteFile(localFile) // 删除本地压缩文件
  } catch (err) {
    console.log('部署过程出现错误！', err)
  } finally {
    process.exit()
  }
}

// run main
main()
