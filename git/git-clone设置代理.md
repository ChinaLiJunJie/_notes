[git clone 过慢科学加快速度](https://blog.csdn.net/initialdmg/article/details/74999176)

git clone 速度很慢时，可以使用科学上网加设置代理的方式进行加速

* step 1：

    科学上网，并开启 http 全局代理，记下 ip 及 prot

* step 2:

    设置 git 使用代理
    
    ```sh
    git config --global http.proxy http://127.0.0.1:34828
    git config --global https.proxy https://127.0.0.1:34828
    ```
* step 3:

    使用后关闭代理

    ```sh
    git config --global --unset http.proxy
    git config --global --unset https.proxy
    ```