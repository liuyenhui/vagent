
    "asar": "^3.2.0",
    "node-gyp": "^10.0.1"
    "@npmcli/fs": "^3.1.0",
    "fs-xattr": "^0.4.0"

    "electron-builder": "^24.9.1", >>23.6.0
    "electron": "^26.0.0", >> 24.1.0
    Node Version: v18.16.0

  -g @electron/osx-sign
  -g @electron/asar

packagerConfig: {
  // 基础配置（一般这些就够用了）
  "name": "MyElectronApp", // 应用程序的名称
  "productName": "My Electron App", // 产品名称（用于生成安装包的名称）
  "icon": "path/to/icon.png", // 应用程序的图标路径
  "out": "build/", // 输出目录的路径
  "overwrite": true, // 是否覆盖已存在的打包文件
  "asar": true, // 是否使用asar打包格式
  "version": "1.0.0", // 应用程序版本号
  "copyright": "Copyright © 2023", // 版权信息
  "ignore": [ // 不需要打包的文件和文件夹的路径列表
    ".git",
    ".vscode",
    "node_modules/.cache",
    "src"
  ],
  // 配置其他构建器（特殊情况下使用）
  "win": { // Windows平台的配置
    "target": "nsis", // 打包的目标格式为NSIS安装程序
    "icon": "path/to/windows/icon.ico", // Windows平台的图标路径
    "publisherName": "My Company", // 发布者名称
    "fileAssociations": [ // 关联文件类型的配置
      {
        "ext": "myext", // 文件扩展名
        "name": "My Extension", // 文件类型名称
        "description": "Open My Extension files", // 文件类型描述
        "role": "Editor" // 文件类型的角色
      }
    ],
    "certificateFile": "path/to/certificate.pfx", // 数字证书文件的路径
    "certificatePassword": "password123" // 数字证书的密码
  },
  "mac": { // macOS平台的配置
    "target": "dmg", // 打包的目标格式为DMG镜像
    "icon": "path/to/mac/icon.icns", // macOS平台的图标路径
    "category": "public.app-category.utilities", // 应用程序的分类
    "extendInfo": { // 扩展应用程序包的配置
      "NSAppTransportSecurity": {
        "NSAllowsArbitraryLoads": true // 允许应用程序加载任意的网络资源
      }
    }
  },
  "linux": { // Linux平台的配置
    "target": "deb", // 打包的目标格式为DEB包
    "icon": "path/to/linux/icon.png", // Linux平台的图标路径
    "category": "Utility", // 应用程序的分类
    "description": "My Electron App", // 应用程序的描述
    "desktop": { // 创建桌面快捷方式的配置
      "Name": "My Electron App", // 快捷方式的名称
      "Comment": "My Electron App", // 快捷方式的注释
      "Exec": "./MyElectronApp", // 快捷方式的执行命令
      "Terminal": false // 是否在终端中打开应用程序
    }
  }
}

单独配置平台
name: Build
on: [push, pull_request]

jobs:
  build_on_linux:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - uses: actions/setup-node@master
      with:
        node-version: 14
    - name: install dependencies
      run: npm install
    - name: build
      run: npm run make

  build_on_mac:
    runs-on: macos-latest
    steps:
    - uses: actions/checkout@v2
    - uses: actions/setup-node@master
      with:
        node-version: 14
    - name: install dependencies
      run: npm install
    - name: build
      run: npm run make

  build_on_win:
    runs-on: windows-latest
    steps:
    - uses: actions/checkout@v2
    - uses: actions/setup-node@master
      with:
        node-version: 14
    - name: install dependencies
      run: npm install
    - name: build
      run: npm run make

     - uses: actions/checkout@v4
    - name: Set up Python
      # This is the version of the action for setting up Python, not the Python version.
      uses: actions/setup-python@v4
      with:
        # Semantic version range syntax or exact version of a Python version
        python-version: '3.9'
        # Optional - x64 or x86 architecture, defaults to x64
        architecture: 'x64'

     - name: install macos-alias use DMG
      run: npm install macos-alias