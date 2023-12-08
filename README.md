+ download
  ```
    git clone https://github.com/liuyenhui/vagent.git
    npm install
    npm run build
    npm run start
  ```

https://zhuanlan.zhihu.com/p/645089615

Windows 10 安装或打开应用程序、文件出现： “无法成功完成操作，因为文件包含病毒或潜在的垃圾软件”


解决方法：


1、打开 ”Windows 安全中心“



2、选择 ”病毒和威胁防护“，并将 ”实时保护“ 关闭



3、找到 ”排除项“ 下的 ”添加或删除排除项“（注意，该方法可能已经无效，可使用下面的方法）



4、找到并打开 ”允许的威胁“


5、找到并打开 ”保护历史记录“

6、找到刚刚被阻止的操作并选择操作 ”还原“ 或 ”允许“ 再重新安装或打开应用程序即

log:
on Linux: ~/. config/vagent/logs/main. log.
on macOS: ~/Library/Logs/vagent/main. log.
on Windows: %USERPROFILE%\AppData\Roaming\vagent\logs\main. log.