---
id: '34'
uuid: '0546f4d2-a0c0-4108-a029-64ec7a9e93ef'
title: 'Virtualbox only showing 32-bit guests on Windows'
slug: 'virtualbox-only-showing-32-bit-clients'
image: 'null'
featured: '0'
page: '0'
status: 'published'
language: 'en_US'
meta_title: 'null'
meta_description: 'null'
author_id: '2'
created_at: '2016-07-29 08:16:15'
created_by: '2'
updated_at: '2016-08-15 13:13:56'
updated_by: '1'
published_at: '2016-08-12 11:14:30'
published_by: '2'
visibility: 'public'
mobiledoc: 'null'
amp: 'null'
---

When trying to create a Virtualbox VM recently I was only presented with the option of creating a 32-bit client. After a bit of research it turns out this can be caused by incorrect settings in the BIOS or by a competing Virtual Machine software cohabiting the system.

**CPU**

First of all your CPU must support the virtualization extensions. We can check this on a Bash console if you have [installed the integrated feature](https://www.neontribe.co.uk/windows-10-build-1607-integrated-bash/).

```
$ egrep -c '(vmx|svm)' /proc/cpuinfo
2
```

If it returns a positive number, 1 or higher your CPU does support the virtualization extensions. You must still ensure it's enabled in the BIOS. If it returns 0 then your CPU does not support hardware virtualization.

**BIOS**

You must have hardware virutalization enabled in the BIOS to create and run 64-bit virtual machines.

The following BIOS features need to be enabled:

- Intel Virtualization Technology [Enabled] (or AMD-v).
- Intel VT-d Feature [Enabled].

**Hyper-V**

If Hyper-V is enabled then Virtualbox will not be able to create 64-bit virtual machines.

```
Start > type "Turn Windows features on or off" > ensure Hyper-V is unchecked
```

![Turn Windows features on or off](/content/images/2016/07/turn-windows-features-on-or-off.png)

If Hyper-V was enabled this will require a reboot.

**References**

- [Why is VirtualBox only showing 32-bit guest versions on my 64 bit Win8 host OS?](http://www.fixedbyvonnie.com/2014/11/virtualbox-showing-32-bit-guest-versions-64-bit-host-os/#.V5sNlzsrKUm)
- [Virtualbox has no 64-bit option](http://askubuntu.com/questions/675251/virtualbox-has-no-64-bit-options)
- [KVM Installation](https://help.ubuntu.com/community/KVM/Installation)
