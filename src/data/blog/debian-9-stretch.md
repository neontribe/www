---
id: '82'
uuid: 'a62c40f5-337f-4186-8fbd-d4360d399cf3'
title: 'Debian & VirtualBox Guest Additions Redux'
slug: 'debian-9-stretch'
image: null
featured: '0'
page: '0'
status: 'published'
language: 'en_US'
meta_title: null
meta_description: null
author_id: '2'
created_at: '2018-01-30 09:30:13'
created_by: '2'
updated_at: '2018-11-09 13:41:41'
updated_by: '2'
published_at: '2018-01-31 09:28:55'
published_by: '2'
visibility: 'public'
mobiledoc: null
amp: null
---

In my [previous look at Debian & VirtualBox](https://www.neontribe.co.uk/debian-virtualbox-guest-additions/) we looked at installing the Guest Additions from the CD image.

This time we look at enabling the `backports` in APT and installing it with the distributions package manager.

**Housekeeping**

As we are going to be playing with kernel's and their modules we want to make sure our system is up-to-date before we start. If you have a policy in place for a production system - you should follow it! We are going through the reboot to avoid issues with APT building VirtualBox kernel modules for a newer kernel than the one currently running.

On my test system, I'm using the quick & dirty method.

```
$ sudo apt clean && sudo apt update && sudo apt -y dist-upgrade && sudo apt -y autoremove && sudo apt -y autoclean && update-grub && reboot
```

**Futzing with APT to enable `backports` with `contrib`**

Ensure that the `contrib` repository is enabled in APT.

```
$ sudo vim /etc/apt/sources.list
+ deb http://ftp.uk.debian.org/debian/ stretch main contrib non-free
```

Then add the following to enable the stretch-backports.

```
+ # stretch-backports
+ deb http://ftp.uk.debian.org/debian/ stretch-backports main contrib
```

**Installation**

Now that `backports`/`contrib` have been enabled we can install the virtualbox-guest-utils with APT.

```
$ sudo apt update
$ sudo apt install build-essential module-assistant dkms virtualbox-guest-dkms virutalbox-guest-x11 virtualbox-guest-utils linux-headers-amd64
```

**Module Assistant**

Used if you want to install the VirtualBox Guest Utils from the ISO image.

```
$ sudo m-a prepare
$ sudo mount /media/cdrom
$ sudo sh /media/cdrom/VBoxLinuxAdditions.run
```

**References**

- [How to install VirtualBox guest additions in a Debian virtual machine](https://unix.stackexchange.com/questions/286934/how-to-install-virtualbox-guest-additions-in-a-debian-virtual-machine)
- [Installing guest additions on Debian](https://virtualboxes.org/doc/installing-guest-additions-on-debian/)
