---
id: '77'
uuid: '983ad9db-1876-459e-9ad9-0e9c2e4a4cc1'
title: 'Windows 10 local account password recovery'
slug: 'windows-10-local-account-password-recovery'
image: 'null'
featured: '0'
page: '0'
status: 'published'
language: 'en_US'
meta_title: 'null'
meta_description: 'null'
author_id: '2'
created_at: '2017-09-11 09:25:27'
created_by: '2'
updated_at: '2017-09-12 09:30:08'
updated_by: '1'
published_at: '2017-09-12 09:22:52'
published_by: '2'
visibility: 'public'
mobiledoc: 'null'
amp: 'null'
---

We are going to look at a solution to reset the password on a local Windows account, this will not work for Microsoft account (use the [Microsoft password reset form](https://account.live.com/password/reset)) or an Active Directory account (contact your network administrator).

![](/content/images/2017/09/password-incorrect.png)

Enter your PC BIOS and set the computer to boot from CDROM (or usb key) and insert a [bootable Windows Installation Media](http://windowsiso.net/windows-10-iso/windows-10-creators-update-1703-download-build-15063/).

At the Windows Setup screen press **Shift+F10** to bring up a command prompt.

![](/content/images/2017/09/cmd-1.png)

We are going to replace the **Ease of access utility** from the login screen with the **cmd.exe** command prompt and then reboot the machine.

```
x:\>move d:\windows\system32\utilman.exe d:\windows\system32\utilman.exe.bak
        1 file(s) moved.

x:\>copy d:\windows\system32\cmd.exe d:\windows\system32\utilman.exe
        1 file(s) copied.

x:\> wpeutil reboot
```

![](/content/images/2017/09/move-and-replace.png)

Once Windows has rebooted and you are at the login screen click the **Ease of access** button (highlighted below), which should bring up a command prompt.

![](/content/images/2017/09/ease-of-access.png)

We will use this administrative prompt to create a new "neonrecovery" user and give them administrative permissions, followed by another reboot.

```
C:\Windows\System32> net user neonrecovery /add
The command completed successfully.

C:\Windows\System32> net localgroup administrators neonrecovery /add
The command completed successfully.

C:\Windows\System32>
```

![](/content/images/2017/09/add-admin-user-1.png)

Next reboot the computer by clicking the Power button in the bottom right of the login screen, and selecting restart. Once you click through to the login screen you should now see the new user account that we created in the previous steps.

![](/content/images/2017/09/neonrecovery.png)

Select the recovery account, it should let you straight in with no password. As we have given the account administrative permissions you should be able to follow the standard method of resetting the passwords.

**Start > Control Panel > User Accounts > User Accounts > Manage another account > select the account > Change Password**

![](/content/images/2017/09/change-password.png)

If you wish to keep the recovery account then you should set a password for it.

You will want to perform the steps described at the start of this document in reverse to replace **C:\Windows\System32\utilman.exe** with **C:\Windows\System32\utilman.exe.bak** once your password has been recovered.
