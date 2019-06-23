---
id: '19'
uuid: 'e95caf49-249c-4e40-a107-ba7bf8529f61'
title: "So, you're about to switch the DNS"
slug: 'so-youre-about-to-switch-the-dns'
image: null
featured: '0'
page: '0'
status: 'published'
language: 'en_US'
meta_title: null
meta_description: null
author_id: '4'
created_at: '2015-08-20 08:34:22'
created_by: '4'
updated_at: '2016-08-10 09:05:55'
updated_by: '1'
published_at: '2014-01-14 11:24:00'
published_by: '4'
visibility: 'public'
mobiledoc: null
amp: null
---

It's a common scenario: You've built a new website locally to replace an older one, tested it fully (with your automated testing framework of choice), and now you're deploying it to a spanking new server it's going to live on. You're editing your local "hosts" file to tell your browser to resolve the domain name to the IP address of its new server, and you find that everything is well.

The next step is to change the DNS, so that the domain name points to the new server in the wild. Here's where it can get tricky. If you need to change the nameservers of the domain, then you're stuck with having to wait for the change to propagate throughout the net, and explaining to your client that it could take anywhere from an hour to a day.

On the other hand, if you can edit the DNS zone file directly, your changes will be instantaneous - on the nameserver. But here's the problem: All these shiny DNS entries in the zone file have a time-to-live (TTL) value (in seconds), and it's likely quite high, perhaps around 4 hours (14,400 seconds). So when your user agent tries to reach the domain, gets punted to its nameserver, who tells it that the "A" record for the domain points at a given IP address, it also says that this information is good for a certain period of time.

Being a good user agent, it caches that lookup for the length of time given (let's say 4 hours for this example). This reduces the load on the nameservers, and really speeds up future requests. But you can see where this is going - we've edited the zone file, but let's say the user agent got that information a few minutes before the change, and now it's got the old information, which it will rely on for another 3 hours and fifty-something minutes. Let's also say the user was in fact the client, and they want to see their new site, but they keep seeing the old site on the old server, and they're getting antsy.

##So what can we do?

Well, firstly, we can flush our local DNS cache. Try these commands in your OS's terminal or command window.

###OS X Mavericks

    dscacheutil -flushcache; sudo killall -HUP mDNSResponder

###Windows 7 & 8

    ipconfig /flushdns

###Ubuntu

Well, Ubuntu doesn't cache DNS lookups.

However, sometimes flushing your local DNS cache is only half the story. Your ISP might cache the lookups too, for example, and you'll have a hard time getting Virgin Media or BT flushing their DNS caches for you.

##A better approach

This one requires a little forward planning, but it should make your site migrations that much easier.

Have a look at the current time-to-live for your DNS entries (and not just "A", check your "CNAME"s and "MX" records too if applicable), and then, at at least twice that length of time (to account for overzealous cachers; after all, the TTL is merely a suggestion) before going live, set them to a small duration, such as 5 minutes (300 seconds).

Perhaps doing this the day before is easiest. Now you're telling all user agents who look up records that the information you're giving them is only good for 5 minutes, so they'll come back and check it on the first new request every five minutes, and presto, when you go live and change the DNS, the users will see the new site within 5 minutes.

Don't forget to change the TTL back to its normal value shortly after you've changed the DNS to point at the new server. In fact, you could do it at the same time, since this new information is now supposed to be canonical. However, you might be better server leaving it for a little while, in case you run into any problems that require a rollback to the old server. In this case, the rollback would only take up to 5 minutes for individual users.

##Any drawbacks or pitfalls?

Unfortunately yes, there are two main gotchas with this technique. Firstly, you can never be fully sure that the DNS caches respect the TTLs they're given. Your ISP might set a default cache duration regardless, for example.

Secondly, for the duration of the short TTLs, you're hammering your nameserver much more than usual. DNS lookups are cheap, and your host's nameservers should be up to the task (and indeed that's why you have at least two of them per domain name), but it's worth bearing in mind. You certainly don't want to forget resetting the TTLs.

With all that in mind, this is still a handy technique.
