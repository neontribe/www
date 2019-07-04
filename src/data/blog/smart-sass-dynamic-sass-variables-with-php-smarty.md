---
id: 11
uuid: '7e92a5c2-7819-47ec-92f9-7fba64c5da55'
title: 'Smart Sass: Dynamic Sass with PHP Smarty'
slug: 'smart-sass-dynamic-sass-variables-with-php-smarty'
image: null
featured: 0
page: 0
status: 'published'
language: 'en_US'
meta_title: null
meta_description: null
author_id: 1
created_at: '2014-05-23T09:12:58.000Z'
created_by: 1
updated_at: '2015-11-02T14:48:17.000Z'
updated_by: 1
published_at: '2014-05-23T09:15:11.000Z'
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

Sass is a language which makes use of server-side compilation in order to generate CSS. Variables are one of the core features of Sass and allow us to specify reusable style definitions. However, what if we want the values of these variables to be assigned dynamically? To add some context to the issue, lets imagine that we have a site but we would like for the client to define the background colour, font and text colour whilst also maintaining our nicely formatted Sass file. Well, here's how:

Firstly, we will need to add a third layer of architecture to our CSS generation for which we will need a server side templating language. For the purposes of this article we will use the PHP templating engine 'Smarty'. Using Smarty we can now create, what I'm calling **Smart Sass** files using the Smarty variable notation `{$myVariable}`. Couple this with Sass variable declarations and we end up with the Smarty template file looking something like this:

```css
$font: {$myFont};
$textColour: {$myTextColour};
$background: {$myBackground};

body {
  font: $font;
  color: $textColour;
  background: $background;
}
```

Notice that the Smarty and Sass variable syntax is very similar, this can actually cause a conflict and is discussed later in the article. Name this file something like styles.tpl ready for the next step: assigning values to our Smarty templates and compiling it to generate our Sass file.

Let's now create a PHP function which will initalise an instance of Smarty and assign our template variables some values:

```php
function update_styles() {
  require_once 'Smarty/libs/Smarty.class.php';

  // Create Smarty object
  $smarty = new Smarty();

  // Here you should set some Smarty directories for caching, config and compiling etc.

  // Set our Smarty template values
  $smarty->assign('myFont', 'sans-serif');
  $smarty->assign('myTextColour', '#000');
  $smarty->assign('myBackground', 'yellow');
}
```

Of course you will likely want to adapt the example above to, for example, retrieve the values from a form request and loop over the submitted values.

Next, we want to be able to insert these values into the Smarty template we defined earlier, return the compiled output and write this value to our new, Sass formatted file. To do this, we can append the following to our function:

```php
// Get compiled template output
$data = $smarty->fetch('style.tpl');

// Write compiled ouput to our SASS file
$file = 'style.scss';
$handle = fopen($file, 'w');
fwrite($handle, $data);
fclose($handle);
```

Execute this function and _tadahh!_ Check it out, we now have a `style.scss` Sass file filled out with all the variable values we assigned. **Note:** If you don't see a generated file there is probably something wrong with your file paths and/or permissions.

Wait, there's one last step. In order to generate the CSS from the Sass file we need to call the Compass compiler (Sass is built on this). To do this I called the following PHP function where \$dir is the location for where our Sass project lives:

```php
exec("compass compile $dir");
```

Done! We now have an automated system for generating Sass files based on our dynamic input.

## Things to keep in mind with this approach

1. The process is one-way meaning that if we start modifying the output Sass file, we cannot reverse our process in order to generate an equivalent Smarty template (or whichever templating engine you decide to use). In other words, recompiling our Smart Sass files would lose any changes that were made directly to the `style.scss` file. All this really means is that you should remember to only update the code at top layer - the Smart Sass files. This way, our changes will trickle down the process flow correctly.

2. The web user will need permissions to write to the output Sass file(s) and Smarty compilation directory (refer to the Smarty docs for how to get started and configure such options).

## Avoiding a Sass+Smarty conflict

Being so alike, it is possible for the SASS and Smarty syntaxes to collide; specifically SASS allows the following `#{$variable}`.

I was able to avoid this feature by limiting Smarty to only compiling a partial Sass file \_vars.scss which stores all the variable definitions. This approach means we can limit the amount of additional compilation needed and potentially separate static and dynamic Sass variables. This means -- as long as you're careful -- the syntax conflict can be avoided.

## But we already have a PHP port of Sass

Yes they do exist ([phpsass](https://packagist.org/packages/richthegeek/phpsass)). However, they rely on continuous maintenance to bring them in-line with the Sass compiler. That said, if this isn't really a concern, it may be a better fit and is one I haven't fully explored.
