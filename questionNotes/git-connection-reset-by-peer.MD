gitHup官方解决办法：https://help.github.com/articles/using-ssh-over-the-https-port/

在HTTPS端口上使用SSH
有时，防火墙拒绝完全连接SSH连接。如果使用带有凭据缓存的HTTPS克隆不是一个选项，您可以尝试使用通过HTTPS端口进行的SSH连接进行克隆。大多数防火墙规则应该允许这一点，但代理服务器可能会干扰

GitHub企业用户：目前不支持通过HTTPS端口通过SSH访问GitHub Enterprise。
要测试是否可以通过HTTPS端口SSH，请运行此SSH命令：

ssh -T -p 443 git@ssh.github.com 
嗨用户名！您已成功验证，但GitHub不
提供shell访问。
如果这样工作，太棒了！如果没有，您可能需要遵循我们的故障排除指南。

通过HTTPS启用SSH连接

如果您能够git@ssh.github.com通过端口443 进行SSH 连接，则可以覆盖SSH设置，以强制任何连接到GitHub以运行该服务器和端口。
Connection reset by peer
要在您的ssh配置中设置此文件，请在此处编辑文件~/.ssh/config，然后添加此部分：

Host github.com
  Hostname ssh.github.com
  Port 443
您可以通过再次连接到GitHub来测试这个工作：

ssh -T git@github.com 
嗨用户名！您已成功验证，但GitHub不
提供shell访问。