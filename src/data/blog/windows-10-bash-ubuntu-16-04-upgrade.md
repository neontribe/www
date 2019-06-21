---
id: '59'
uuid: 'ec5cfa83-3dad-4b78-a41a-e5fcfd4eb228'
title: 'Creators Update and BASH (Ubuntu 16.04 upgrade)'
slug: 'windows-10-bash-ubuntu-16-04-upgrade'
image: 'null'
featured: '0'
page: '0'
status: 'published'
language: 'en_US'
meta_title: 'null'
meta_description: 'null'
author_id: '2'
created_at: '2017-05-08 08:57:37'
created_by: '2'
updated_at: '2018-03-08 13:41:05'
updated_by: '2'
published_at: '2017-06-14 07:52:53'
published_by: '2'
visibility: 'public'
mobiledoc: 'null'
amp: 'null'
---

Windows 10 Creators Update brings with it a new version of the Windows Subsystem for Linux, including upgrading the Ubuntu distribution from 14.04 (Trusty) to 16.04 (Xenial).

**Remove & Replace**

The recommendation from Microsoft is that you completely remove the Ubuntu environment and then re-install it.

To remove Ubuntu we open an administrator command prompt (as previously covered in [my first installation howto](https://www.neontribe.co.uk/windows-10-build-1607-integrated-bash/) and then enter the following commands:

```
C:\> lxrun /uninstall /full /y
This will uninstall Ubuntu on Windows.
This will remove the Ubuntu environment as well as any modifications, new applications, and user data.
Uninstalling...
```

Once it has been removed you can then re-install it with this command:

```
C:\> lxrun /install
-- Beta feature --
This will install Ubuntu on Windows, distributed by Canonical
and licensed under its terms available here:
https://aka.ms.uowterms

Type "y" to continue: y
Downloading from the Windows Store... 100%
Extracting filesystem, this will take a few minutes...
Would you like to set the Ubuntu locale to match the Windows locale (en-GB)?
the default locale is en_US.
Type "y" to continue: y

Please create a default UNIX user account. The username does not need to match your Windows username.
For more information visit: https://aka.ms/wslusers
Enter new UNIX username: user
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
Installation successful!
```

**Live upgrade**

If you have a particularly complex environment already configured however, you can do an in place upgrade. Check the Ubuntu [instructions](https://help.ubuntu.com/lts/serverguide/installing-upgrading.html).

```
$ sudo apt update
$ sudo do-release-upgrade
```

You can confirm that your Ubuntu environment has been upgraded to 16.04 by looking at _/etc/lsb_-_release_ or running the \_lsb*\_\_release -a* command:

```
~$ cat /etc/lsb-release
DISTRIB_ID=Ubuntu
DISTRIB_RELEASE=16.04
DISTRIB_CODENAME=xenial
DISTRIB_DESCRIPTION="Ubuntu 16.0.2 LTS"

~$ lsb_release -a
No LSB modules are available.
Distributor ID: Ubuntu
Description:    Ubuntu 16.04.2 LTS
Release:        16.04
Codename:       xenial
```

**Changes**

Many changes and improvements have been made and issues fixed including, ifconfig, ping and ICMP tools working. File change notification (INOTIFY) including notifications for files in the Windows file system, which will be relevant to web developers working in Node.js, Ruby and Python. It is now possible to launch Windows apps and tools from within Bash, and Linux tools from Windows. It is also possible to [run other distributions](http://www.zdnet.com/article/how-to-run-opensuse-linux-on-windows-10/) of Linux within WSL now, however it is not currently supported by Microsoft.

**References**

- [Windows 10 Creators Update: What’s new in Bash/WSL & Windows Console](https://blogs.msdn.microsoft.com/commandline/2017/04/11/windows-10-creators-update-whats-new-in-bashwsl-windows-console/)
- [Ubuntu 16.04 >> Ubuntu Server Guide >> Installation >> Upgrading](https://help.ubuntu.com/lts/serverguide/installing-upgrading.html)
- [Windows 10 Creators Update adds lots of new Bash/WSL features](http://www.zdnet.com/article/windows-10-creators-update-adds-lots-of-new-bashwsl-features/)
- [How to run openSUSE Linux on Windows 10](http://www.zdnet.com/article/how-to-run-opensuse-linux-on-windows-10/)
