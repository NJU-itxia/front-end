# IT侠预约系统 - 前端（2017年新版）

## TL;DR

1. Install Node.js: https://nodejs.org/en/download/package-manager/
2. Install Yarn: https://yarnpkg.com/en/docs/install
3. run `` npm install -g babel-cli`` to install ``babel`` globally
4. run ``yarn`` to install dependencies
5. run ``npm start``, visit http://localhost:3009

## Why to use Vagrant

* ``VirtualBox``提供了虚拟机底层的实现，以及GUI管理界面（虽有VBoxManage命令行，但并不好用）
* ``Vagrant``提供了更简单的命令行对VirtualBox进行操作，使用Vagrantfile文件来配置虚拟机，以及将各系统打包成.box文件进行分发
* 因此，Vagrant依赖于VirtualBox
* 虚拟机里运行的系统叫Guest OS，物理机上叫Host OS，两者之间相互隔离，只有两方面可以互通：
  * 网络互通：通过Port Forwarding实现,同时Guest OS里的程序需要监听``0.0.0.0``，而非``127.0.0.1``。因为前后端分离，所以需要在2个端口上互通。
  * 文件系统互通：通过Shared Folder实现，即Guest OS里的``/vagrant``和Host OS里的box所在文件夹是一样的，代码就放在这个文件夹里即可


## How to use Vagrant
* 下载Virtualbox： https://www.virtualbox.org/wiki/Downloads
* 下载Vagrant： https://www.vagrantup.com/downloads.html
* 下载Box(Ubuntu 14.04 64bit Server): https://cloud-images.ubuntu.com/vagrant/trusty/current/
* ``vagrant box add ubuntu-trusty trusty-server-cloudimg-amd64-vagrant-disk1.box``
   > 将下载的.box文件（我这里是``trusty-server-cloudimg-amd64-vagrant-disk1.box``）,导入本机作为base box，该base box 名字叫 ``ubuntu-trusty``,可以自己随便起名字
* 进入到你要放代码的文件夹，先``mkdir itxia-box``，再``cd itxia-box``
   > 创建box文件夹，以后启动这个box,都要进入该文件夹
* ``vagrant init ubuntu-trusty``
   > 使用``ubuntu-trusty``这个base box来初始化你的box
* ``vagrant up``
   > 启动你的box，第一次启动需要import，花费时间略长
* ``vagrant ssh``
   > 使用ssh进入虚拟机
* 修改apt源（推荐ustc源）:
  * http://mirrors.ustc.edu.cn/
  * https://lug.ustc.edu.cn/wiki/mirrors/help/ubuntu

## Learn React.js
* https://facebook.github.io/react/
* http://babeljs.io/docs/learn-es2015/
* https://react-bootstrap.github.io/components.html
* https://github.com/rackt/react-router
* https://github.com/getify/You-Dont-Know-JS
* https://github.com/nzakas/understandinges6
* https://github.com/tech-dojo/react-showcase
