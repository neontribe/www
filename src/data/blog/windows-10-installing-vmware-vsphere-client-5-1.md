---
id: 21
uuid: '72024693-d1f0-48d7-b43b-9ee312acacc8'
title: 'Windows 10 howto install VMware vSphere client 5.1'
slug: 'windows-10-installing-vmware-vsphere-client-5-1'
image: null
featured: 0
page: 0
status: 'published'
language: 'en_US'
meta_title: null
meta_description: null
author_id: 2
created_at: '2015-11-18 13:14:11'
created_by: 2
updated_at: '2016-06-17 22:42:54'
updated_by: 1
published_at: '2015-11-18 13:23:58'
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

Neontribe uses VMware ESXI 5.1; however, we had issues installing the management client onto Windows 10.

The installation begins, but halfway through a popup window never appears and you can't continue. The task manager shows the hung process with a comment about contacting your system administrator.

We need to manually install some components before it will successfully install; specifically in this order:

- Microsoft .NET Framework 3.5
- [Microsoft Visual J# 2.0 x64](http://www.microsoft.com/en-us/download/details.aspx?id=15468)

To install Microsoft .NET Framework 3.5, use the _Add or Remove Programs_ feature built into Windows:

- Start -> search for "Control Panel" (The old style one)
- Search for "programs" -> select "add or remove programs"
- Select "turn Windows features on or off" and put a tick next to ".net framework 3.5"

Once you have added the .NET Framework you can manually install [Microsoft Visual J# 2.0 x64](http://www.microsoft.com/en-us/download/details.aspx?id=15468).

You should now be able to install the [VMware vSphere client 5.1](https://my.vmware.com/group/vmware/details?downloadGroup=VCL-VSP510-ESXI-510-EN&productId=285) software.
