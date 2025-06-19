---
id: 10
uuid: 'af6be0e3-03b3-49bb-9a8f-6f6ac2006adf'
title: 'Fixing an SVG gotcha'
slug: 'fixing-an-svg-gotcha'
image: null
featured: 0
page: 0
status: 'published'
language: 'en_US'
meta_title: null
meta_description: null
author_id: 1
created_at: '2014-04-24T14:34:29.000Z'
created_by: 1
updated_at: '2014-04-24T14:41:30.000Z'
updated_by: 1
published_at: '2014-04-24T14:34:29.000Z'
published_by: 1
visibility: 'public'
mobiledoc: null
amp: null
author_name: 'Neontribe'
author_slug: 'neontribe'
author_image: 'images/2019/03/neonround.png'
author_cover: null
author_facebook: null
author_twitter: null
---

So there you are thinking I just need to put this graphic in to my web page and everyone will be happy. But your graphic just happens to be an SVG. Great, you think, that will look ace at all the sizes I need to show it. This is mostly true, but there are a few catches that will require you to do a little extra work. Firstly IE8 and older just won’t so you will need to provide an alternative for these browsers such as:

```
<!--[if lt IE 9]>
    <h1><img class="logo" src="images/logo.png" /><span>Login</span></h1>
<!<![endif]-->
<!--[if gt IE 8]>
    <h1><img class="logo" src="images/logo.svg" alt=""  /><span>Login</span></h1>
<!<![endif]-->
<!--[if !IE]><!-->
    <h1><img class="logo" src="images/logo.svg" alt="" /><span>Login</span></h1>
<!--<![endif]-->

```

## The gotcha

This is good, we have an SVG where we can and a PNG where we just can’t. Now comes the gotcha: IE looks for a `viewBox` attribute on an svg in order to correctly scale it. Only some SVG creation and editing programs include this attribute; note that Inkscape does not by default. So, we must ensure that this attribute is present. SVG images are just markup so we can open them in our favorite text editors. We now need to add the viewBox attribute like this (see the last line):

```
<svg
   xmlns:dc="https://purl.org/dc/elements/1.1/"
   xmlns:cc="https://creativecommons.org/ns#"
   xmlns:rdf="https://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="https://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   version="1.1"
   width="541.02563"
   height="281.4584"
   viewBox="0 0 541.02563 281.4584"
```

We add the `viewBox=` line with the value `0 0 [width] [height]`. When we use this fixed SVG, IE will scale it as we would hope. Otherwise, if the `viewBox` line is not in your SVG, IE will clip your SVG at the size your were expecting to scale too.
