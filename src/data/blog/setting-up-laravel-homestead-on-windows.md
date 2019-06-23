---
id: '79'
uuid: 'ec7187ae-e304-4a1d-9339-c4d30d109d52'
title: 'Setting up Laravel Homestead on Windows'
slug: 'setting-up-laravel-homestead-on-windows'
image: null
featured: '0'
page: '0'
status: 'published'
language: 'en_US'
meta_title: null
meta_description: null
author_id: '25'
created_at: '2017-11-20 14:40:55'
created_by: '25'
updated_at: '2017-11-24 10:41:28'
updated_by: '1'
published_at: '2017-11-24 10:41:28'
published_by: '25'
visibility: 'public'
mobiledoc: null
amp: null
---

My 1st task at Neontribe was to set up my Windows development environment for Lavarel PHP-powered service that exposes a website and an API.

Most developers here at Neontribe use Linux so as I was using Windows I expected a few issues to surface. Indeed, having chosen to use the Lavarel Homestead VM for simplicity, I found several sticking points not covered in the installation notes. Here's the steps you need to cover to get Homestead setup on Windows

## PC configuration

1. Ensure virtualisation is enabled in the BIOS
2. Ensure hyper-v is not enabled in (`Turn Windows features on or off`) as you can only use a single Hypervisor and Homestead uses VirtualBox
3. Ensure Bitdefender `Settings -> Advanced -> scan hosts file`option is off. Otherwise it'll comment out any lines you add.

## Homestead configuration

4. Follow [these instructions](http://backendtime.com/setup-laravel-homestead-windows/) to install Homestead and optionally Heidi. Note you can use the latest VirtualBox and Vagrant. Don't forget to edit the hosts file as administrator.
5. Run `vagrant plugin install vagrant-winnfsd` to install nfs support and add `type: nfs` to any folder mapping in `Homestead.yaml`. This can significantly boost performance.
6. Adjust the Folders sections in the `Homestead.yaml` file to be of this form:

```yaml
folders:
  - map: ~/Projects/onesite-dev
    to: /home/vagrant/code/onesite-dev
    type: nfs

sites:
  - map: onesite.dev
    to: /home/vagrant/code/onesite-dev/public
```

7. Run `vagrant reload --provision`
8. Optionally set `export VAGRANT_CWD=/c/Users/Fred/projects/homestead` in your `.bashrc` so that Vagrqant will work in any directory

Then run `vagrant up` to launch Homestead, followed by`vagrant ssh` to run any additional setup or installation steps in the Homestead VM environment.

As the folder mappings ensure the project source code is shared between Windows and Homestead you can also run your favourite editor and `git` editor in Windows rather than the Homestead VM ssh, eg using Git 4 Windows' bash shell. Just remember to make sure your editor and git configuration do not add 'CR' chars to end of lines and push them.
