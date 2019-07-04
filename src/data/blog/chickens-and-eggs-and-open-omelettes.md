---
id: 75
uuid: '60df142e-62f6-40aa-a5bf-2f419ae33f52'
title: 'Chickens and eggs and an open omelette.'
slug: 'chickens-and-eggs-and-open-omelettes'
image: null
featured: 0
page: 0
status: 'published'
language: 'en_US'
meta_title: null
meta_description: null
author_id: 5
created_at: '2017-08-22T21:26:07.000Z'
created_by: 5
updated_at: '2017-11-03T09:59:00.000Z'
updated_by: 1
published_at: '2017-11-02T16:12:19.000Z'
published_by: 5
visibility: 'public'
mobiledoc: null
amp: null
author_name: 'Harry Harrold'
author_slug: 'harry-harrold'
author_image: '//www.gravatar.com/avatar/febf032ab16fef166824f5172cd87393?s=250&d=mm&r=x'
author_cover: null
author_facebook: null
author_twitter: null
---

Neontribe's involvement with the IATI standard started this spring, with a small user research project as part of the [Open Ag Funding](https://www.interaction.org/project/open-ag-funding/overview) project. Our brief was to study the journeys of those engaged in publishing open data to the IATI standard and to produce a three-slide summary.

The outcome was [nine slides](https://docs.google.com/presentation/d/1Q9zkM5jRhFd_nxPSqm99KsomIlRygmH0EombnsZlBnY/), with [annotated journeys to back them up](https://drive.google.com/file/d/0B0d6Y-TBmyuKbkZORXZxYW5UUTg/) and as a result Neontribe were engaged on a development project: produce a user interface that packaged some useful publishing tools together.

The top-line observation from that initial research in particular really stuck with us: carrots vs. sticks. Motivating publishers to produce quality data, rather than simply - in the face of time pressure and all the other constraints we all share - doing what compliance demanded. The ones we spoke to would be motivated to publish good quality data if they were confident it was being used. From our own involvement in countless hack days, and projects large and small, we knew that to be used, data has to be good quality.

That's the chicken and egg of open data right there. Good quality data is more likely to be used. Data is more likely to be good quality if its publishers believe it'll get used. What we want to do is break that vicious cycle.

This keys into the mission of our friends at [Open Data Services](http://www.opendataservices.coop/) who introduced us to IATI in the first place. As they put it, "We aim to make open data Useful, Usable and In Use."

Our first interface scribblings were in this direction: towards an interface which tells publishers how their data can be used right now, and how it _could_ be used if they improved it. Our core concept is that this order of things is more motivating than its opposite; that it is better to say what is good, and then what could be better, than it is to say what has failed and needs fixing.

At that point, we were unsure of a technical approach that'd make it feasible to actually provide this interface.

However, turns out that the idea that the fitness of a dataset to a particular purpose is programmatically testable is not new.

In fact, the folk at [Publish What You Find](http://www.publishwhatyoufund.org/) had done some work there for data that's compliant to the IATI standard back in March this year. They've blogged about their [Data Quality Tester here.](http://www.publishwhatyoufund.org/publish-what-you-fund-launches-new-index-data-quality-tool-and-technical-consultation/) It uses something like a test-driven development approach, with some Python code to check data quality by checking to see if the dataset itself passes an explicit test.

At the same time as we were working on our interface ideas, the ODS folk were building out the concept of "Opinionated Review". That's the idea that their [COVE tools](http://cove.opendataservices.coop/) could be extended from testing for validity to testing for a wider range of conditions and circumstances.

We'd already committed to working with COVE as part of our publishing toolkit, so this put us in an excellent place implementation-wise.

Where we are now is taking examples of ways people actually use data, which we can articulate programmatically so we can a) test people's data to see if it is usable in such a fashion and b) suggest appropriate data enhancement activities if it is not. One example is: "Your data can be used to trace funding down to activity on the ground, because your dataset links your activities to a funder using identifiers called OrgIDs" vs. "Sorry, your data could NOT be used to trace funding down to the ground, but it could be if you linked your activities to a funder using identifiers called OrgIDs.". Add to that to an interface to help the publisher actually make that improvement, and we think you'd be on to something.

As Reid Porter of [Interaction](https://www.interaction.org/) puts it: "The goal is to suggest improvements based on user needs, not wag a finger and point out their data’s deficiencies or missing fields."

Chickens, eggs, something breaking, hence producing an omelette? I think my metaphor is getting a bit stretched, but that's where we are. Reframing the vicious cycle of data quality.
