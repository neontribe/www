---
id: 22
uuid: '825cbda7-2094-4cdc-a9d9-d75285ab7ecc'
title: 'ElementaryOS install on Dell XPS 13 (9350)'
slug: 'elementaryos-install-on-dell-xps-13-9350-or-uefi-only'
image: null
featured: 0
page: 0
status: 'published'
language: 'en_US'
meta_title: null
meta_description: null
author_id: 2
created_at: '2015-11-27T15:44:50.000Z'
created_by: 2
updated_at: '2016-06-17T21:45:45.000Z'
updated_by: 1
published_at: '2015-11-27T15:55:40.000Z'
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

_Update: These steps should no longer be necessary if you are using the latest release of ElementaryOS which seems to have fixed the UEFI issues._

There is a problem with the latest ElementaryOS (0.3.1) installation image when used on a UEFI only system; in our case this was a Dell XPS 13 (9350) laptop. The installation completes but you are presented with a grub> prompt when you restart the laptop.

You can use tab to complete the grub commands

```bash
grub> configfile(hd <tab>
```

For our installation the file we are looking for paths as follows:

```bash
grub> configfile (hd0,gpt1)/boot/grub/grub.cfg
```

Which should then boot the laptop normally. Once the laptop has booted into the ElementaryOS installation we can fix the problem permanently.

```bash
$ sudo cp /boot/efi/EFI/grub/grubx64.efi /boot/efi/EFI/grub/grubx64.efi.broken
$ sudo cp /boot/grub/x86_64-efi/grub.efi /boot/efi/EFI/grubx64.efi
$ sudo reboot
```

You should now have a fully working ElementaryOS installed on your UEFI system.
