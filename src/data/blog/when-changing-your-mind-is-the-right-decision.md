---
id: 64
uuid: '22e51a95-41f4-4e6e-aa7f-0f5e8e98d887'
title: 'When changing your mind is the right decision…'
slug: 'when-changing-your-mind-is-the-right-decision'
image: null
featured: 0
page: 0
status: 'published'
language: 'en_US'
meta_title: null
meta_description: null
author_id: 5
created_at: '2017-07-21 17:13:32'
created_by: 5
updated_at: '2017-07-21 17:36:11'
updated_by: 1
published_at: '2017-07-21 17:31:25'
published_by: 5
visibility: 'public'
mobiledoc: null
amp: null
---

In 2016 Neontribe did a [little discovery work](https://www.neontribe.co.uk/discovery-and-direction/ 'A blog post about Discovery') for the Alexandra Rose charity. Their core project is the Rose Voucher scheme, which helps parents with young children on low incomes to buy fresh fruit and vegetables from market stalls.

By the end of that work we knew (thankfully) that we weren’t aiming to build an app that helped parents locate and rate stalls and share recipes. We needed instead to focus on digitising a paper voucher system that was full of repetitive work, and would not scale at all well as the charity grew the number of areas it was working in.

Our [bid to Comic Relief’s tech-for-good funding](https://www.comicrelief.com/grants/tech-for-good/ 'tech-for-good funding') allows us to build on that work, focusing on moving the reimbursement of market traders from paper vouchers to a digital system, saving time and money and helping the project to expand.

“You need chargeable cards” you might think, as we did, very briefly, in the early discovery phase.

However a crucial element of the Rose Voucher project is dignity for the recipients. Their early project evaluations show that “feeling accepted as customers” is an important element of retention on the scheme. Since most of the markets have no point of sale technology (and amongst those that do, take up among fruit and veg trader is low) handing over vouchers is the best way for scheme members to shop “like everyone else”.

So by the time we started on the Comic Relief project, we knew that we needed to retain paper vouchers within the process - we just had to help somebody get the information from the voucher into a digital system where payment can be requested - and then present that information in a format that’ll be useful for the next step along the process.

Before we began we’d already done a bit of user research with a handful of traders in Brixton market who knew the scheme. We’d given them a mobile phone that could scan vouchers, a laptop with a barcode scanner, and some vouchers for them to start scanning…

Barcodes - we thought - were our most likely solution - reducing error from writing down voucher numbers. However the user research showed just how slow phone based scanners were - and how unwieldy to use on a stall with vouchers blowing in the wind. Whilst the handheld supermarket style scanner was more promising, that would mean laptop or tablet tech on the stall, and power to run both - possibly not ideal.

And so the Comic Relief project began. We had planned a four month project - a month each on discovery, alpha then beta development, then a short private beta programme to learn some more.

After the Comic Relief kick-off day in Manchester, looking at all the discovery we’d already done we ripped up that plan and set off in a new direction. We found we already knew enough to start coding and designing a rough interface. We could start coding quicker, and spread our building, measuring and learning out at little more.

A new question had come up: “Could typing in voucher codes actually be the simplest way to streamline this process?”. It was definitely a good place to start technically - whatever method people used to get vouchers in a system, it’d boil down to an entry in a datastore, and a text entry box is a very easy bit of code to write. But could simple text entry actually meet user needs too?

After a fortnight, we started coding. After another fortnight, we had a scruffy alpha we could show a market trader - the "mark one text box", which simply let a market trader add the code from a voucher to a list using a text entry field on a phone. So could the textbox actually stand up to being used? What would we learn?

First up, we watched how traders actually used a phone for data entry. To our surprise, it looked _easier_ to use native form controls - a phone number pad - to enter the code than it had to try and use a mobile phone scanner. There was no trouble with wrinkled vouchers, no juggling vouchers from hand to hand, no vouchers blowing away in the wind.

Secondly, we'd pre-filled the code entry boxes so that they start with the first five characters of the last voucher you recorded. This means no need to complete (or place ditto marks, as we had seen in user research) the part of the code which is used to specify scheme or area where a voucher was issues. And that means that entering a voucher code involves about half as many key presses and therefore it's twice as fast - except for the rare occasions when a voucher from outside the area shows up.

Some traders thought it was “quicker than writing them down” but even those that weren’t sure about thought “it was quick enough” and “worth it to save work for other people or get payment quicker”

We’ve not entirely left the barcode scanner behind. Lots of traders on the scheme are processing vouchers in a home office rather than at their stalls, and we’re keen to see if we can offer them a “bulk” solution that might involve a supermarket scanner for speed. However, we’re spending some time to improve it rather than concentrating of the barcode scanner right now.

At the same time as working up the "mark one text box", we were prototyping an interface in paper for the whole process. Starting with our initial user research, we quickly sketched up a [very lo-fidelity paper prototype.](https://drive.google.com/file/d/0B0d6Y-TBmyuKelZheUtHeUV1Q2M/view?usp=sharing 'A prototype')

We took that prototype out, set up in a community hub near the market in Barnsley and invited traders in to run through how it'd work. Here's the [insights from that usability test](https://drive.google.com/file/d/0B0d6Y-TBmyuKZW90Zlc2NEtRY2c/view?usp=sharing 'A pdf of a test report'), and the conversations it sparked.

From that, we iterated to a [paper prototype which also included a “download” option](https://drive.google.com/file/d/0B0d6Y-TBmyuKZkpCNUVuVWVIakk/view?usp=sharing 'Another prototype video') - sparked by talking to users about how they need to include things in their own accounts process.

We initially thought that we would be developing a system that supported the 4 different payment types that the 4 different areas currently involved in the project use. However as the user research brings us closer to the traders, and as we all look hard at our assumptions (in this case the need for the project to offer quite so much flexibility), it seems that we may actually be helping to streamline that so that all traders are paid directly as a result of using the new system. Don’t hold us to that yet though - we reserve the right to change our mind.
