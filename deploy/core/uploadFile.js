const runCommand = require('./handleCommand')
const getCurrentTime = require('./handleTime')

// 文件上传(ssh对象、配置信息、本地待上传文件)
async function uploadFile (ssh, config, targetFile, localFile) {
  return new Promise((resolve, reject) => {
    console.log('4-开始文件上传')
    handleSourceFile(ssh, config)
    ssh.putFile(localFile, config.deployDir + targetFile).then(async () => {
      resolve(console.log('5-文件上传完成'))
    }, (err) => {
      reject(console.error('5-上传失败！', err))
    })
  })
}

// 处理源文件(ssh对象、配置信息)
async function handleSourceFile (ssh, config) {
  if (config.openBackUp) {
    console.log('已开启远端备份!')
    await runCommand(
      ssh,
      `
      if [ -d ${config.releaseDir} ];
      then mv ${config.releaseDir} ${config.releaseDir}_${getCurrentTime()}
      fi
      `,
      config.deployDir)
  } else {
    console.log('提醒：未开启远端备份!')
    await runCommand(
      ssh,
      `
      if [ -d ${config.releaseDir} ];
      then mv ${config.releaseDir} /tmp/${config.releaseDir}_${getCurrentTime()}
      fi
      `,
      config.deployDir)
  }
}

module.exports = uploadFile
