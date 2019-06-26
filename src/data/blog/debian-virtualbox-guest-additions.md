---
id: 78
uuid: 'b378d03f-80b8-4b8c-b094-6feb5e4899c4'
title: 'Debian Stretch VirtualBox Guest Additions'
slug: 'debian-virtualbox-guest-additions'
image: null
featured: 0
page: 0
status: 'published'
language: 'en_US'
meta_title: null
meta_description: null
author_id: 2
created_at: '2017-10-03 08:39:26'
created_by: 2
updated_at: '2017-10-03 10:10:33'
updated_by: 1
published_at: '2017-10-03 09:17:57'
published_by: 2
visibility: 'public'
mobiledoc: null
amp: null
author_name: 'Andy Barnes'
author_slug: 'andy'
author_image: 'images/2019/03/Andy-Barnes.jpg'
author_cover: 'images/2018/01/knight-in-armour-cropped.jpg'
author_facebook: null
author_twitter: null
---

I discovered recently that VirtualBox is no longer in the Debian official repositories, which prevents us from installing the Guest Additions from the package manager (apt).

The Guest Additions provide the drivers for the virtual hardware in a VirtualBox guest.

Installing the Guest Additions is still relatively straight forward however.

```
$ sudo apt update
$ sudo apt install build-essential module-assistant dkms
$ sudo m-a prepare
```

From the Virtualbox menu select "Devices > Insert Guest Additions CD image.." and after a few moments a dialog should appear prompting you to install the additions.

![](images/2017/10/guest-additions.png)
Select "Run" and let the installation proceed. If you have autorun disabled or the dialog does not appear you can manually start it:

```
$ sudo sh /media/cdrom/VBoxLinuxAdditions.run
Verifying archive integrity... All good.
Uncompressing VirtualBox 5.1.28 Guest Additions for Linux...........
VirtualBox Guest Additions installer
Copying additional installer modules ...
vboxadd.sh Starting the VirtualBox Guest Additions.
$ sudo reboot
```

Finally reboot the machine.

**References**

- [VirtualBox](https://www.virtualbox.org/wiki/Downloads)
