# GuoChiJiuAR
Dev repo for GuoChiJiu WebAR

公网ip：39.101.194.195
网址：https://xinguyuan.cn/
项羽测试：./xy.html


nginx网站目录`/usr/share/nginx/html`

ngixn设置文件路径`/etc/nginx/conf.d/default.conf`

nginx初始内容：
```
├── 404.html
├── 50x.html
├── en-US -> ../../doc/HTML/en-US
├── icons
│   └── poweredby.png -> ../../../pixmaps/poweredby.png
├── img -> ../../doc/HTML/img
├── index.html -> ../../doc/HTML/index.html
├── nginx-logo.png
└── poweredby.png -> nginx-logo.png
```
删除目录下所有文件`rm -fr *` 

列出目录下所有隐藏文件`ls -a`

删除目录下所有隐藏文件`rm -rf * .*`

然后 git clone到当前文件夹`git clone https://github.com/MingxuanXie/guo-chi-jiu.git .`

网站地址

更多参考：https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-centos-7?spm=a2c6h.12873639.0.0.692d25b8bTITXH