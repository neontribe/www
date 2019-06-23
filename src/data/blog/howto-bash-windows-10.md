---
id: '25'
uuid: '898d30cc-fe11-41a2-9f35-e823128c5026'
title: 'Bashing Windows 10 Insider Preview Build'
slug: 'howto-bash-windows-10'
image: null
featured: '0'
page: '0'
status: 'published'
language: 'en_US'
meta_title: null
meta_description: null
author_id: '2'
created_at: '2016-04-07 13:06:18'
created_by: '2'
updated_at: '2016-08-08 10:08:06'
updated_by: '1'
published_at: '2016-06-17 10:45:03'
published_by: '2'
visibility: 'public'
mobiledoc: null
amp: null
---

_Now the [Windows 10 Anniversary update](https://support.microsoft.com/en-us/help/12387/windows-10-update-history) is out, you won't need to go through the Insider Preview rigamarole to get the integrated Bash shell._

The Insider Preview of Windows 10 (Build 14316 and later) has the beta of the new port of Bash shell from Ubuntu included, however it takes a bit of fiddling to get it going.

First turn on Developer Mode via `Settings > Update & security > For developers`.
![For Developers](/content/images/2016/04/for_developers.png)

Next we want to check we are using the Insider Preview in `Settings > Update & Security > Advanced Options`.
![Settings, Update & Security](/content/images/2016/04/settings-update-security.png)

You need to be running the Insider Preview "Fast" track to get build 14316 or later currently.
![Advanced Options](/content/images/2016/04/settings-update-security-advanced_options.png)

Then search for “Turn Windows Features on or off” and enable Windows Subsystem for Linux (Beta).
![Turn Windows features on or off](/content/images/2016/06/windowsbash.png)

Now open `start > cmd` to open a command prompt and type `bash`. After a few moments it should have installed the bash shell.

**Usage**

Now open `start > bash` and you should be presented with a full Ubuntu 14.04 bash prompt, with working apt and all the other command line goodness (no Desktop/Graphical UI).

**Troubleshooting**

The process of opting into the Insider Builds did not go smoothly for me. It appears if you opt in after a build has been released you won't update to the Insider Preview until the next preview is pushed out to customers. Patience is key here.

Check which build of Windows you are running, the release build is 10586.

`start > run > winver`

![About Windows](/content/images/2016/04/about_windows.png)

Check the registry entries for the Insider Preview:

`start > run > regedit`

goto key:  
`HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\WindowsSelfHost\Applicability`

Check that **BranchName** and **UserPreferredBranchName** strings are set to **rs1_release**.

Also ensure that **EnablePreviewBuilds** and **ThresholdOptedin** DWORDs are set to **1**.

![regedit](/content/images/2016/04/regedit.png)

If the key

`HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\WindowsSelfHost\Applicability\RecoveredFrom`

exists it features builds that have been installed and then reverted from. These will be unavailable to install again unless the key is removed.

If you had to change anything in the registry editor, restart your computer and check for updates again.

**References:**

- [Run Bash on Ubuntu on Windows](https://blogs.windows.com/buildingapps/2016/03/30/run-bash-on-ubuntu-on-windows/)
- [Fix Windows 10 Insider Preview Build Not Appearing](http://www.askvg.com/fix-windows-10-insider-preview-build-10240-not-appearing-on-windows-update/)
- [Fix Failing Windows 10 Insider Update](http://www.neowin.net/news/heres-how-to-fix-failing-windows-10-insider-updates-if-you-tweaked-your-registry)
- [fbl_impressive Enterprise 10130 - Error 0x80246017](http://answers.microsoft.com/en-us/insider/forum/insider_wintp-insider_install/fblimpressive-enterprise-10130-error-0x80246017/8fd32dc8-51be-4732-a605-20b75ab9a26b?auth=1)
