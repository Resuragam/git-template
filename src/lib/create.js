/**
 * @Description: 创建项目函数 create
 * @author: Haoyu Huang
 * @date: 2023/5/27
*/

const {
    isFileExist,
    selectFeature,
    initProjectDir,
    changePackageInfo,
    end
} = require('../utils/create')

async function create(projectName) {
    // 判断文件是否已经存在
    isFileExist(projectName)
    // 获取需要的功能
    const feature = await selectFeature()
    // 初始化文件目录
    initProjectDir(projectName)
    // 改写项目的 package.json 基本信息，比如 name、description
    changePackageInfo(projectName);
    // 安装 feature
    installFeature(feature);
    // 结束
    end(projectName);
}

module.exports = {
    create,
}