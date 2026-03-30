const users = [
    {
        id: 1,
        first_name: 'Olivia',
        last_name: 'Bennett',
        user_name: 'liv_bennett',
        avatar_url: 'https://res.cloudinary.com/dv2usnwu2/image/upload/v1774609020/sample_ava_1_jrd4f3.png',
        bio: 'Coffee addict ☕ | Amateur photographer | Hiking every weekend | Currently obsessed with film photography and darkroom development. Ask me about my Pentax K1000.',
        location: 'Portland, OR',
        birthday_date: '1995-03-14',
        password: '$2a$16$sGoawBQ6JZyb4mBaY3PRouFJlv.bHILq4jxdVk0m5Z2A4XgJyXpx.',
        is_admin: true,
    },
    {
        id: 2,
        first_name: 'Marcus',
        last_name: 'Delgado',
        user_name: 'marcus_d',
        avatar_url: 'https://res.cloudinary.com/dv2usnwu2/image/upload/v1774609111/sample_ava_2_ggaaqh.jpg',
        bio: 'just a guy',
        location: 'Austin, TX',
        birthday_date: '1992-07-22',
        password: '$2a$16$UhxdB9Ai1HS0XgitvVIYwO0eDhM7uE91O.xt7U/rtjAUsE6GefKP.',
        is_admin: false,
    },
    {
        id: 3,
        first_name: 'Yuki',
        last_name: 'Tanaka',
        user_name: 'yuki_t',
        avatar_url: 'https://res.cloudinary.com/dv2usnwu2/image/upload/v1774609110/sample_ava_3_fxcxej.jpg',
        bio: "Software engineer by day, home chef by night. I document every dish I cook — over 300 recipes and counting. Currently learning to make proper ramen from scratch. It's a 3-day process and absolutely worth it.",
        location: 'San Francisco, CA',
        birthday_date: '1998-11-05',
        password: '$2a$16$IjrZZjAuuYEbbWmbpzU.verjTZXaxM1gdtQ/IuqFVv.B8z0Xktxf6',
        is_admin: false,
    },
    {
        id: 4,
        first_name: 'Derrick',
        last_name: 'Osei',
        user_name: 'd_osei',
        avatar_url: 'https://res.cloudinary.com/dv2usnwu2/image/upload/v1774609111/sample_ava_4_xvxayq.jpg',
        bio: 'idk what to write here lol',
        location: 'Atlanta, GA',
        birthday_date: '2000-01-30',
        password: '$2a$16$H4tHlr.eyisUErJlhEJAi.aLpp98.XL3hHWSzArLB21tsF8Qa7jzK',
        is_admin: false,
    },
    {
        id: 5,
        first_name: 'Sofia',
        last_name: 'Marchetti',
        user_name: 'sofia_m',
        avatar_url: 'https://res.cloudinary.com/dv2usnwu2/image/upload/v1774609111/sample_ava_5_aojk6a.jpg',
        bio: 'Architect and urban planner passionate about sustainable cities. I believe good design is invisible — it just makes life feel right. Milan born, now building a life in New York one small apartment at a time.',
        location: 'New York, NY',
        birthday_date: '1990-06-18',
        password: '$2a$16$TV02o8wsMoZ4iOky1uGYW.W/tzV45An2e9BwCInz0sd1CdjYUdWMC',
        is_admin: true,
    },
    {
        id: 6,
        first_name: 'Ethan',
        last_name: 'Cho',
        user_name: 'ethancho_',
        avatar_url: 'https://res.cloudinary.com/dv2usnwu2/image/upload/v1774609111/sample_ava_6_phlhkt.png',
        bio: 'music. sleep. repeat.',
        location: 'Seattle, WA',
        birthday_date: '2001-09-09',
        password: '$2a$16$BW4PLws8N1MC0rj3ENXsSesc/rwoRgi.rvxA12Uc62pFNVJ2FbyNO',
        is_admin: true,
    },
    {
        id: 7,
        first_name: 'Amara',
        last_name: 'Nwosu',
        user_name: 'amara_nwosu',
        avatar_url: 'https://res.cloudinary.com/dv2usnwu2/image/upload/v1774609111/sample_ava_7_em1a1w.jpg',
        bio: 'Nurse, mom of two, part-time marathon runner. I started running at 34 to prove something to myself — ended up qualifying for Boston at 37. Life is long if you keep moving.',
        location: 'Houston, TX',
        birthday_date: '1986-04-02',
        password: '$2a$16$BCeENbkfbTU.1Xt1fwpfqeb5LO9VzR2x5FGdIUiUbaqW6XpQV7m7C',
        is_admin: false,
    },
    {
        id: 8,
        first_name: 'Leo',
        last_name: 'Hartmann',
        user_name: 'leo_ha',
        avatar_url: 'https://res.cloudinary.com/dv2usnwu2/image/upload/v1774609110/sample_ava_8_i37l6n.jpg',
        bio: 'exist.',
        location: 'Chicago, IL',
        birthday_date: '1997-12-25',
        password: '$2a$16$L9uKOfE5IBpoUg2FZkKH..rmFxKPzA.NsMc55wuu51Rb/RNzbbs2W',
        is_admin: false,
    },
    {
        id: 9,
        first_name: 'Priya',
        last_name: 'Sharma',
        user_name: 'priya_sharma',
        avatar_url: 'https://res.cloudinary.com/dv2usnwu2/image/upload/v1774609110/sample_ava_9_mjanx6.jpg',
        bio: 'PhD candidate in computational neuroscience. Trying to understand how the brain encodes memory — and also trying to remember where I put my keys every single morning. The irony is not lost on me.',
        location: 'Boston, MA',
        birthday_date: '1994-08-17',
        password: '$2a$16$LSOliJEr1kMTt76j8WzYveoBSzK/PwgadbeHkFE3A6YjmwY9jqRvG',
        is_admin: false,
    },
    {
        id: 10,
        first_name: 'Carlos',
        last_name: 'Rivera',
        user_name: 'carlitos_rv',
        avatar_url: 'https://res.cloudinary.com/dv2usnwu2/image/upload/v1774609110/sample_ava_10_rmrcub.jpg',
        bio: "Former chef, current food truck owner. My abuela's recipes, my twist. Find me on 5th and Main on Fridays.",
        location: 'Miami, FL',
        birthday_date: '1988-02-14',
        password: '$2a$16$Dj4byBQsAVnvJDndUC6iOud7.fDvMYqM97pM5rbKvcQMfAEiBK.ia',
        is_admin: false,
    },
    {
        id: 11,
        first_name: 'Zoe',
        last_name: 'Petrov',
        user_name: 'zoe_ptrv',
        avatar_url: 'https://res.cloudinary.com/dv2usnwu2/image/upload/v1774609110/sample_ava_11_y2rvxj.jpg',
        bio: '🌱🐈‍⬛✨',
        location: 'Denver, CO',
        birthday_date: '2002-05-11',
        password: '$2a$16$QR3zHvoe.i3TU5xWsSgevevtPDD79kYPw0C0Wc3xS0E.IqVunobRO',
        is_admin: false,
    },
    {
        id: 12,
        first_name: 'James',
        last_name: 'Whitfield',
        user_name: 'jwhit_field',
        avatar_url: 'https://res.cloudinary.com/dv2usnwu2/image/upload/v1774609110/sample_ava_12_yc0w1w.jpg',
        bio: 'Retired Navy officer. Now I sail recreationally, grow tomatoes, and argue about history online. Proud grandfather of four. Still wake up at 0500 out of habit.',
        location: 'Annapolis, MD',
        birthday_date: '1965-10-03',
        password: '$2a$16$NClA9gauL.UjQR.oFxkju.8W5m6IjHmbf5HuN//CLFpqNvVcUlK/K',
        is_admin: false,
    },
    {
        id: 13,
        first_name: 'Nina',
        last_name: 'Kowalski',
        user_name: 'nina_kow',
        avatar_url: 'https://res.cloudinary.com/dv2usnwu2/image/upload/v1774609111/sample_ava_13_oaggtu.jpg',
        bio: "graphic designer. i make things look nice for companies that don't appreciate it",
        location: 'Brooklyn, NY',
        birthday_date: '1996-03-28',
        password: '$2a$16$8JffayycuttujXAyfT6woemoVHKpqByrpROygWn4FyY8s4VA.zTh2',
        is_admin: false,
    },
    {
        id: 14,
        first_name: 'Ravi',
        last_name: 'Menon',
        user_name: 'ravi_menon',
        avatar_url: 'https://res.cloudinary.com/dv2usnwu2/image/upload/v1774609111/sample_ava_14_wyogv4.jpg',
        bio: "Entrepreneur, investor, and lifelong learner. I've started 4 companies — 2 failed spectacularly, 1 was acquired, 1 is still alive and kicking. Failure is just tuition. Always happy to chat with founders.",
        location: 'San Jose, CA',
        birthday_date: '1983-07-07',
        password: '$2a$16$B742M.RW0jngeMZG4pVJpu9EE0IU4hI2YHIzqOtjf.l8OaqUt5P7O',
        is_admin: false,
    },
];

const posts = [
    {
        id: 1,
        post_title: 'First roll with the Pentax K1000',
        post_content:
            "Finally finished developing my first roll of Kodak Gold 200 in the darkroom last night. There's something almost meditative about the whole process — the complete darkness, the smell of the chemicals, watching an image slowly appear in the developer tray. Three of the shots came out genuinely beautiful. The rest were either overexposed or I forgot to advance the film properly. Still. I'm hooked.",
        created_at: '2024-01-08',
    },
    {
        id: 2,
        post_title: 'my setup rn',
        post_content: 'lo-fi beats, rain outside, green tea. life is ok',
        created_at: '2024-01-09',
    },
    {
        id: 3,
        post_title: 'Ramen Day 1 — The Broth Begins',
        post_content:
            "Started the tonkotsu broth this morning at 6am. Blanched the pork bones first to get rid of the scum, then into a rolling boil for the next 12 hours. My entire apartment smells like a ramen shop and I genuinely don't hate it. The goal is a broth that's milky white, rich, and coats the back of a spoon. Will update tomorrow when I start on the tare and the chashu.",
        created_at: '2024-01-10',
    },
    {
        id: 4,
        post_title: 'thoughts on sustainable housing in NYC',
        post_content:
            "Had a long conversation with a colleague today about passive house standards and whether they're actually achievable at scale in New York. The short answer is yes, but it requires buy-in from developers who are used to cutting corners on insulation and mechanical systems. The longer answer involves zoning reform, updated energy codes, and a city government willing to incentivize rather than just mandate. I've been working on a proposal for a mixed-use building in the Bronx that uses cross-laminated timber and a centralized heat recovery ventilation system. The embodied carbon numbers are promising. More on this soon.",
        created_at: '2024-01-11',
    },
    {
        id: 5,
        post_title: 'Boston qualifier',
        post_content:
            "I qualified for Boston. I'm still shaking. 3:41:22 at the Houston Marathon this morning. The standard for my age group is 3:50. I ran it in a tank top in January because it was 68 degrees and humid and none of that mattered. Miles 18 through 22 were the hardest miles of my life. I talked to my late mother in my head for the last four miles. I think she helped.",
        created_at: '2024-01-12',
    },
    {
        id: 6,
        post_title: "free will is not a thing and here's why",
        post_content:
            "I've been down a rabbit hole of determinism papers this week and I genuinely can't find a coherent argument for libertarian free will that doesn't eventually rely on something unprovable. Every decision we make is the result of prior brain states, which are the result of prior experiences, which we didn't choose. Even the feeling of choosing feels more like a post-hoc narrative we construct than an actual causal force. I'm not saying this is depressing. I actually find it kind of freeing? If I'm not truly 'responsible' for my worst moments then I'm also not taking credit for my best ones either. Anyway. It's late.",
        created_at: '2024-01-13',
    },
    {
        id: 7,
        post_title: 'food truck is official',
        post_content:
            "Permit approved. Truck wrapped. Menu finalized. We open Friday on 5th and Main. My abuela's arroz con pollo, her picadillo, and a short rib taco that's all mine. Come find us.",
        created_at: '2024-01-14',
    },
    {
        id: 8,
        post_title: 'my plants are thriving and so am i (kinda)',
        post_content: 'the monstera put out two new leaves this week. take notes everyone',
        created_at: '2024-01-15',
    },
    {
        id: 9,
        post_title: "What they don't tell you about founding a company",
        post_content:
            "Nobody warns you that the hardest part of building a company isn't the product, the fundraising, or even the hiring. It's the psychological weight of carrying other people's livelihoods. When my second company started running out of runway in 2018, I remember lying awake not worried about my own salary but about the 11 people who had believed in me enough to leave stable jobs. We ended up shutting down anyway. I paid everyone their last two months out of my own pocket. I'd do it again. But I wish someone had sat me down before company number one and said: 'This is going to change how you think about responsibility forever.'",
        created_at: '2024-01-16',
    },
    {
        id: 10,
        post_title: 'darkroom mistake turned into my favorite print',
        post_content:
            "Accidentally double-exposed a sheet of fiber paper last night and the result is genuinely one of the most interesting things I've ever printed. A portrait of my friend layered over a shot of bare tree branches. It looks intentional. Sometimes the mistake is the work.",
        created_at: '2024-01-17',
    },
    {
        id: 11,
        post_title: "can't sleep",
        post_content: "3am and my brain won't stop. not even sad just. awake.",
        created_at: '2024-01-18',
    },
    {
        id: 12,
        post_title: 'Ramen Day 3 — Final Result',
        post_content:
            "It's done. 72 hours of work across three days and I'm sitting here with a bowl of tonkotsu ramen that genuinely rivals some of the best I've had in Japan. The broth is silky and rich. The chashu melts. The ajitsuke tamago — soft-boiled eggs marinated overnight in soy, mirin, and sake — have the most beautiful jammy yolk. I made a batch of noodles from scratch too, using bread flour and kansui water for that slight chew. My roommate tasted it and said nothing for about 30 seconds and then said 'you can't ever stop making this.' I'll write up the full recipe eventually but honestly I'm not sure I can reduce it to a blog post. It's more of an experience.",
        created_at: '2024-01-19',
    },
    {
        id: 13,
        post_title: 'CLT and the future of tall buildings',
        post_content:
            "Cross-laminated timber is having a moment and it deserves it. Mass timber buildings can sequester carbon rather than emit it during construction, they're faster to build than concrete, and — this surprised even me when I first learned it — they perform remarkably well in fire conditions because large timber sections char on the outside and maintain structural integrity far longer than unprotected steel. The tallest mass timber building in the world right now is 85.4 meters in Milwaukee. I think we'll see that record broken multiple times in the next decade.",
        created_at: '2024-01-20',
    },
    {
        id: 14,
        post_title: 'training log — week 1 post-race',
        post_content:
            "Doctor said take two weeks completely off after Houston. I lasted four days. Did an easy 4 miles this morning, nothing hurt, legs felt fresh. I know I should rest but my brain doesn't know what to do with itself when I'm not running. Already thinking about what's next. Maybe a spring half. Maybe just base-building for Boston.",
        created_at: '2024-01-21',
    },
    {
        id: 15,
        post_title: 'the memory encoding thing',
        post_content:
            "Presented some early data at lab meeting today on how the hippocampus differentiates between similar spatial contexts during encoding. Nothing groundbreaking yet but there's a pattern in the theta oscillation data that I can't stop thinking about. Science moves so slowly and then sometimes you're staring at a graph at 11pm and something clicks and you forget to eat dinner.",
        created_at: '2024-01-22',
    },
    {
        id: 16,
        post_title: 'Friday was insane',
        post_content:
            "Sold out in two hours. TWO HOURS. We had people lining up before we even opened the window. I had to call my cousin to come help and she'd never worked a food truck in her life. She burned herself on the plancha twice and kept going. That's family.",
        created_at: '2024-01-23',
    },
    {
        id: 17,
        post_title: "anyone else feel like they're performing productivity",
        post_content:
            "like i sit at my desk, have the right tabs open, look busy, and produce maybe 40 minutes of actual work in 8 hours. and somehow that's just. normal??",
        created_at: '2024-01-24',
    },
    {
        id: 18,
        post_title: 'Sailing trip — Chesapeake Bay, January',
        post_content:
            'Took the Catalina out last weekend despite the cold. My crew was just my neighbor Bill and my grandson Tyler, who is 9 and has decided he wants to be a sailor. We motored out of the slip in 38-degree air, raised the main once we cleared the marina, and had a perfectly quiet two hours on the water. Tyler asked me if I was scared at sea when I was in the Navy. I told him the honest answer: sometimes, but the training made the fear manageable. He thought about that for a while and then asked if we could have hot chocolate. We could.',
        created_at: '2024-01-25',
    },
    {
        id: 19,
        post_title: "rebranding a client who doesn't know what they want",
        post_content: "week 3 of 'we'll know it when we see it.' currently on logo revision 14. FOURTEEN.",
        created_at: '2024-01-26',
    },
    {
        id: 20,
        post_title: 'why I tell every founder to embrace the failure',
        post_content:
            "I gave a talk at a startup event in San Jose last night and as usual someone asked me about my two failed companies. I used to feel a twinge of embarrassment answering that question. Now I lean into it completely. My first failure taught me about co-founder alignment — we had great chemistry socially but fundamentally different risk tolerances. My second taught me about timing. The market wasn't ready. The product was good, actually. We were just early by about three years, and a well-funded competitor launched the same concept in 2021 and raised a Series B. That stings a little differently than outright failing. But both experiences are why the company I'm running now is the best-managed thing I've ever built. Every scar is a lesson you can't learn from a book.",
        created_at: '2024-01-27',
    },
    {
        id: 21,
        post_title: 'shot on expired film',
        post_content:
            "Used a roll of expired Fuji Superia 400 from 2009 that I found in a thrift store camera. The color shift is wild — everything has a green-magenta cast that makes the photos look like they're from a fever dream. Shot a whole roll around the neighborhood at dusk. Can't decide if this is art or a happy accident. Probably both.",
        created_at: '2024-01-28',
    },
    {
        id: 22,
        post_title: 'update on the thesis',
        post_content:
            "My advisor told me today that I'm 'making progress' which from her means I'm doing fine. She has three modes: silence, 'making progress,' and 'this is publishable.' I've never heard the third one directed at me. I'll take it.",
        created_at: '2024-01-29',
    },
    {
        id: 23,
        post_title: 'denver in winter is underrated',
        post_content:
            '300 days of sun a year and people still act surprised. I went hiking yesterday in a t-shirt. it was January 30th.',
        created_at: '2024-01-30',
    },
    {
        id: 24,
        post_title: "abuela's picadillo recipe — the real one",
        post_content:
            "A lot of people have been asking since the truck opened so here it is, as best as I can write it down. The thing about abuela's cooking is she never measured anything, so these are approximations. Brown a pound and a half of ground beef with diced onion and green pepper. Don't drain the fat — that's flavor. Add a full head of minced garlic. A cup of tomato sauce. A big handful of green olives with pimentos, roughly chopped. Two teaspoons of cumin. Salt, pepper, a little oregano. Some people add raisins here. Abuela did not. Once it's all combined, taste it. Adjust. Taste again. Serve over white rice that you've cooked with a bay leaf and a little butter. Simple. Perfect.",
        created_at: '2024-01-31',
    },
    {
        id: 25,
        post_title: 'I rewired my bathroom light and did not die',
        post_content: "YouTube university continues to educate me. The flickering is gone. I'm very proud of myself.",
        created_at: '2024-02-01',
    },
    {
        id: 26,
        post_title: "on designing for people you'll never meet",
        post_content:
            "The most humbling part of urban design is that the spaces I create will be used by hundreds of thousands of people who have no idea I exist. A well-placed bench, a covered walkway, a plaza with enough shade — these become part of someone's daily life without them ever thinking about who chose to put them there. That's the whole point. Good design disappears. It just becomes the world.",
        created_at: '2024-02-02',
    },
    {
        id: 27,
        post_title: 'my brain at 2am: is glass a liquid',
        post_content: "it's not. i looked it up. anyway.",
        created_at: '2024-02-03',
    },
    {
        id: 28,
        post_title: '10 miles in the snow',
        post_content:
            "Ran 10 miles this morning in actual snowfall. Houston never gets snow so I have no idea what I'm doing but my legs felt strong and I ran the last two miles faster than the first. Coach would call that negative splits. I just call it not wanting to be cold anymore.",
        created_at: '2024-02-04',
    },
    {
        id: 29,
        post_title: 'The Peloponnesian War and why it still matters',
        post_content:
            "Finished Thucydides again last week — the Crawley translation this time after years of reading Strassler. There's a reason this book has been studied continuously for 2,400 years. The Melian Dialogue alone should be required reading for every diplomat and policymaker alive. 'The strong do what they can and the weak suffer what they must.' We haven't changed. The technology changes. The logic of power doesn't. I've argued about this passage with people online for two decades and I'm still not tired of it.",
        created_at: '2024-02-05',
    },
    {
        id: 30,
        post_title: 'client feedback be like',
        post_content:
            "'can you make the logo bigger, more modern, but also more classic, and maybe add something that really pops but also is subtle.' sure. absolutely. on it.",
        created_at: '2024-02-06',
    },
    {
        id: 31,
        post_title: 'Fujifilm vs Kodak — a completely subjective take',
        post_content:
            "I've been shooting both for about eight months now and here's where I've landed. Kodak Gold 200 for warm light, golden hour, portraits of people I love — it has this slightly soft, honeyed quality that feels nostalgic in a way that doesn't feel manufactured. Fuji 400H for overcast days, architecture, anything where I want cooler tones and a bit more clinical sharpness. Neither is objectively better. They're different moods. Anyone who tells you one is superior is probably just justifying what they already bought.",
        created_at: '2024-02-07',
    },
    {
        id: 32,
        post_title: 'the thing about startups nobody says out loud',
        post_content:
            "Most startup advice is written by people who succeeded and then retrofitted a narrative onto the chaos. Survivorship bias is everywhere in this industry. For every 'I did these five things and we hit product-market fit' post there are a thousand companies that did the same five things and shut down. I don't have a solution to this. I just think founders should read the failure post-mortems at least as often as the success stories.",
        created_at: '2024-02-08',
    },
    {
        id: 33,
        post_title: 'spilled matcha on my sketchbook',
        post_content: 'not a metaphor. just a bad morning. the drawing underneath is kind of interesting now though',
        created_at: '2024-02-09',
    },
    {
        id: 34,
        post_title: 'hippocampal replay during sleep',
        post_content:
            "There's a fascinating body of research on how the hippocampus 'replays' the day's experiences during sleep — essentially consolidating episodic memories into long-term storage. What I keep coming back to is whether this replay is purely a compression mechanism or whether it also involves some kind of evaluation, a filtering of what matters. Some models suggest the emotional tag attached to a memory influences how strongly it gets replayed. Which could explain why we remember embarrassing moments from middle school with perfect clarity but forget entire months of routine.",
        created_at: '2024-02-10',
    },
    {
        id: 35,
        post_title: 'new record on the truck',
        post_content:
            "Served 140 people in one lunch shift today. My arm feels like it's going to fall off but the register doesn't lie. Saturday is going to be even bigger. I need to hire someone.",
        created_at: '2024-02-11',
    },
    {
        id: 36,
        post_title: 'february playlist is up',
        post_content:
            'lots of this: slow jazz, one or two ambient tracks, a few old soul songs my dad used to play. link in bio if you want it',
        created_at: '2024-02-12',
    },
    {
        id: 37,
        post_title: 'Half marathon — 1:44',
        post_content:
            'Ran the Galveston Half Marathon this morning. 1:44:07. Not a PR but a solid training run. The course is flat and fast and the sea breeze at mile 8 genuinely saved me. The real goal is Boston in April and today was a confidence check. I feel ready. I think I feel ready.',
        created_at: '2024-02-13',
    },
    {
        id: 38,
        post_title: 'A letter to younger me, sort of',
        post_content:
            "I was going through old boxes in the attic last week and found my journal from my first deployment in 1987. Reading it was strange — like meeting someone who shares all your memories but has a completely different relationship with fear and uncertainty. Twenty-three-year-old James was certain about everything in the loud, brittle way that young people are. I wanted to tell him to listen more. To sit with doubt instead of fighting it. But I also know he wouldn't have listened. That's the thing about experience — you can't transfer it. You can only accumulate it.",
        created_at: '2024-02-14',
    },
    {
        id: 39,
        post_title: 'do brands deserve emotions',
        post_content:
            "had a brand meeting where the client said their brand should feel 'curious but also reliable, playful but professional, approachable but premium.' i smiled and said yes and then went home and stared at my ceiling",
        created_at: '2024-02-15',
    },
    {
        id: 40,
        post_title: 'Sourdough attempt #4',
        post_content:
            "The starter is alive and well — I've named her Priya Jr. which my labmates think is hilarious. The loaf itself came out with a decent ear and an open crumb but the crust went soft overnight. I think I didn't steam the oven enough in the first 15 minutes. Attempt 5 will involve a Dutch oven instead of the steam injection method.",
        created_at: '2024-02-16',
    },
    {
        id: 41,
        post_title: 'found a camera at a garage sale',
        post_content:
            "Olympus XA2 in perfect condition for $4. The lady selling it said it was her husband's and he never used it. Loaded it with a roll of Lomo 800 and I'm going to shoot the whole thing this weekend. This little camera fits in my jacket pocket. I love it.",
        created_at: '2024-02-17',
    },
    {
        id: 42,
        post_title: 'what makes a city walkable — actually',
        post_content:
            "Walkability scores are well-intentioned but they miss a lot. A high Walk Score doesn't tell you whether the sidewalks feel safe at night, whether there's adequate shade in a hot climate, whether the street-level experience is interesting enough to make people want to walk rather than drive. The human-scale details matter enormously: trees, benches, varied storefronts, windows that look onto the street, wide sidewalks with a clear buffer from traffic. I walked from my apartment in Brooklyn to my office last week — about 2.4 miles — and noticed for the first time how dramatically the quality of the walking experience changes block by block. We have the tools to design better urban environments. We mostly choose not to use them.",
        created_at: '2024-02-18',
    },
    {
        id: 43,
        post_title: 'hired my first employee',
        post_content:
            "Her name is Valentina. She's 20, she's fast, she doesn't complain, and she learned the whole menu in two days. I gave her a raise on day three. Good people are rare.",
        created_at: '2024-02-19',
    },
    {
        id: 44,
        post_title: 'reading on a tuesday',
        post_content: "currently: a novel about a lighthouse keeper. it's very slow and very good. that's all",
        created_at: '2024-02-20',
    },
    {
        id: 45,
        post_title: "VC culture is broken and I'll die on this hill",
        post_content:
            "The incentive structure of venture capital is fundamentally misaligned with building healthy, sustainable companies. VCs need outlier returns to justify their fund economics, which means they push portfolio companies toward hypergrowth strategies that often destroy culture, burn out teams, and prioritize growth metrics over actual value creation. I've taken VC money twice. I understand why it exists. I also think it's caused more damage to the startup ecosystem than anyone wants to admit publicly. My current company is profitable and growing at a pace my team can actually sustain. We've had term sheets. We've turned them down. I sleep well.",
        created_at: '2024-02-21',
    },
    {
        id: 46,
        post_title: '8 miles before sunrise',
        post_content:
            'Out the door by 5:15am. It was still dark for the first two miles and the city was quiet in a way it almost never is. Passed a guy walking his dog who nodded at me like we were in a secret club. We are, kind of.',
        created_at: '2024-02-22',
    },
    {
        id: 47,
        post_title: 'the theta rhythm thing keeps bothering me',
        post_content:
            "okay i know i keep coming back to this but the 4-8hz theta oscillations in CA1 during active navigation are showing up in our data in a context that doesn't fit the standard spatial coding model. i've read every paper I can find. i'm either missing something obvious or there's something interesting here. meeting with my advisor friday. trying not to get too excited.",
        created_at: '2024-02-23',
    },
    {
        id: 48,
        post_title: 'grandkids for the weekend',
        post_content:
            "All four of them, ages 4 through 12. My wife and I are exhausted in the best possible way. We baked cookies. We watched a movie about talking animals. Tyler taught his cousins the names of the sails on a sailboat. I don't think they retained any of it. It was a perfect weekend.",
        created_at: '2024-02-24',
    },
    {
        id: 49,
        post_title: 'logo revision 21',
        post_content: "they liked it. THEY LIKED IT. I'm going to sit outside and breathe real air for ten minutes",
        created_at: '2024-02-25',
    },
    {
        id: 50,
        post_title: 'Sourdough #5 — success',
        post_content:
            'Dutch oven method works. The crust shattered when I tapped it. The crumb was open and chewy. It tasted like actual bread. I may have cried a little. My roommate ate three slices with just butter and said nothing else needed to be said.',
        created_at: '2024-02-26',
    },
    {
        id: 51,
        post_title: 'shooting portraits of strangers',
        post_content:
            "I've been working up the nerve to do street portraiture and yesterday I finally asked someone — a woman selling flowers outside a shop on Division Street. I explained what I was doing, showed her the camera, asked if she'd mind. She said yes, posed without being asked, and then asked to see the viewfinder which of course is a film camera so there's nothing to see. We laughed about it. I'll get the prints back in a week. Regardless of how they look the conversation was worth it.",
        created_at: '2024-02-27',
    },
    {
        id: 52,
        post_title: 'the texture of cities',
        post_content:
            "New York has a texture. You feel it through your shoes. The subway grates, the uneven sidewalk slabs, the metal cellar doors embedded in the pavement. Every city has its own material vocabulary and New York's is patched, improvised, layered. The old under the new under the newer. I love it. Milan is the opposite — precise, deliberate, maintained. Both are beautiful for completely different reasons.",
        created_at: '2024-02-28',
    },
    {
        id: 53,
        post_title: 'rest day',
        post_content: 'Full rest. No running. Ate pasta and watched TV. This is also training.',
        created_at: '2024-03-01',
    },
    {
        id: 54,
        post_title: 'on knowing when to shut a company down',
        post_content:
            "This is something I think about a lot and don't hear discussed honestly enough. There's a culture in startups of perseverance that can curdle into denial. 'Keep going' is good advice until it isn't. The founders I've seen hurt the most were the ones who burned through their savings, their relationships, and two extra years of their lives on a company that the evidence was telling them to close eighteen months earlier. Part of my job now — informally, with founders I mentor — is to help people distinguish between a hard patch that requires pushing through and a fundamental problem that no amount of pushing will fix. It's not a clean distinction. But learning to see it is maybe the most important skill in this industry.",
        created_at: '2024-03-02',
    },
    {
        id: 55,
        post_title: 'got my film scans back',
        post_content:
            "The flower seller portrait is everything I hoped for. Sharp eyes, slightly soft background from the 50mm at f/2, and that Lomo 800 grain that makes everything look like a memory you're trying to hold onto. I'm printing this one large.",
        created_at: '2024-03-03',
    },
    {
        id: 56,
        post_title: 'new menu item testing',
        post_content:
            'Working on a slow-cooked oxtail dish to add for weekends only. Braised for five hours with sofrito, red wine, tomato, and spices. The meat falls off the bone. Over yellow rice with sweet plantains on the side. Not traditional, not fusion — just food that makes sense together. First public test is Saturday. Nervous in a good way.',
        created_at: '2024-03-04',
    },
    {
        id: 57,
        post_title: 'typography nerd post incoming',
        post_content:
            "can we talk about how grotesque sans-serifs became the default for every tech brand circa 2015 and nobody's questioned it since? like yes Helvetica is clean and yes Inter is readable and yes I know why you chose them. but there's a whole universe of type design out there and we keep eating the same meal. a well-chosen serif can communicate so much more personality. anyway. I just rebranded a bakery using a custom lettering wordmark and it looks incredible and I'm very normal about it",
        created_at: '2024-03-05',
    },
    {
        id: 58,
        post_title: 'advisor meeting went well',
        post_content:
            "She thinks the theta data is worth pursuing. We're going to run a targeted follow-up experiment in the next cohort. This means at least six more months on this specific question but I think it's the right call. Trying to publish something inconclusive would be worse than waiting.",
        created_at: '2024-03-06',
    },
    {
        id: 59,
        post_title: 'tomatoes are coming in',
        post_content:
            'Eight plants this year, four varieties. The Brandywines are huge and ugly and taste like summer used to. The Sun Golds are already producing and I eat them warm off the vine standing in the garden in the morning. My neighbors keep asking what I do differently. I tell them I talk to the plants. This is true.',
        created_at: '2024-03-07',
    },
    {
        id: 60,
        post_title: '20-miler done',
        post_content:
            "Last long run before Boston. 20.2 miles in 3:01. Fueled with gels at miles 5, 10, 14, and 18 — nothing fell apart, no wall. Legs are tired but not broken. Two weeks of taper now. I'm ready to be done with training and ready to race.",
        created_at: '2024-03-08',
    },
    {
        id: 61,
        post_title: 'procrastinating by reorganizing my desk',
        post_content: "it looks so clean now. still haven't done the thing I was supposed to do. worth it",
        created_at: '2024-03-09',
    },
    {
        id: 62,
        post_title: 'passive house — the retrofit problem',
        post_content:
            "Everyone talks about passive house in the context of new construction, but the real challenge — and opportunity — is retrofitting existing buildings. In New York, most of the housing stock that will exist in 2050 is already built. We can't just tear it down and start over. Deep energy retrofits are expensive and disruptive. They require residents to move out temporarily. They're often blocked by condo boards or constrained by landmarking restrictions. And yet this is where 80% of the work needs to happen. The green building conversation needs to shift from showcase new builds to the boring, difficult, unglamorous work of improving what already exists.",
        created_at: '2024-03-10',
    },
    {
        id: 63,
        post_title: 'made miso from scratch',
        post_content:
            "Started a batch of shiro miso. Cooked soybeans, mixed with rice koji and salt, packed into a crock with a weight on top, and now it just… waits. Minimum three months. I labeled the crock with today's date and put it in the back of the pantry. Fermentation is the most patient kind of cooking.",
        created_at: '2024-03-11',
    },
    {
        id: 64,
        post_title: 'book recommendation',
        post_content: "just finished 'the overstory' by richard powers. i'm not ok. please read it.",
        created_at: '2024-03-12',
    },
    {
        id: 65,
        post_title: 'street photography rules I made up for myself',
        post_content:
            "1. Never shoot someone from behind if you can help it. 2. If someone sees you and looks uncomfortable, lower the camera. 3. If someone asks you to delete it, delete it — no argument. 4. The best time is the hour after sunrise and the hour before sunset. 5. Walk the same street multiple times. You see different things each time. 6. The photo you almost didn't take is usually the best one.",
        created_at: '2024-03-13',
    },
    {
        id: 66,
        post_title: 'the oxtail sold out in 40 minutes',
        post_content:
            "Made 30 portions. Gone by 12:40pm. Next week I'm making 50. This is the best problem I've ever had.",
        created_at: '2024-03-14',
    },
    {
        id: 67,
        post_title: 'imposter syndrome is a liar but also constant',
        post_content:
            "I have a PhD advisor who believes in my work, a paper under review at a solid journal, and data that might be genuinely interesting. I also woke up this morning convinced that I am a fraud who has fooled everyone for six years and will be exposed soon. Both things are true at the same time. I asked a senior postdoc about this and she laughed and said 'oh that never goes away.' Wonderful.",
        created_at: '2024-03-15',
    },
    {
        id: 68,
        post_title: "the problem with 'move fast and break things'",
        post_content:
            "The phrase was coined in the context of a social network for college students. It became a philosophy applied to healthcare, finance, transportation, housing, and critical infrastructure. Moving fast and breaking things is fine when 'things' are UI components. It's less fine when 'things' are people's medical records, retirement savings, or the communities displaced by the tech campuses you built. I don't think Mark Zuckerberg intended for it to become a moral framework. But it did. And we're still cleaning up after it.",
        created_at: '2024-03-16',
    },
    {
        id: 69,
        post_title: 'early spring on the Chesapeake',
        post_content:
            "The ospreys are back. Every year I look for them as a sign that winter is actually over, and every year they show up exactly when I need them to. Took the boat out alone yesterday morning and saw three of them circling over the shallows. The water is still cold enough that you'd be in serious trouble if you went in. But the light is changing. You can feel the year turning.",
        created_at: '2024-03-17',
    },
    {
        id: 70,
        post_title: 'i miss live music',
        post_content:
            'went to a show last night and stood in the back and just felt the bass move through me. live music does something to the nervous system that nothing else does. i forget and then i remember.',
        created_at: '2024-03-18',
    },
    {
        id: 71,
        post_title: 'Boston is in 10 days',
        post_content:
            "Taper madness is real. My legs feel fine which means my brain has decided that something must be wrong with them. I've eaten more pasta this week than any human should. I've checked the weather forecast for Hopkinton seven times. High of 55 and partly cloudy. Perfect racing weather. I just need to not do anything stupid between now and Monday.",
        created_at: '2024-03-19',
    },
    {
        id: 72,
        post_title: 'on living in small spaces',
        post_content:
            "My Brooklyn apartment is 540 square feet. I have exactly what I need and nothing extra. When I visit friends in suburbs with 3,000-square-foot houses I always feel slightly overwhelmed by the sheer volume of space that needs to be managed, heated, furnished, and cleaned. There's a real freedom in constraint. I know where everything is. I can clean the whole place in 45 minutes. My design instinct for small-space solutions has gotten sharper because I live inside the problem.",
        created_at: '2024-03-20',
    },
    {
        id: 73,
        post_title: 'the film I shot in Japan, finally',
        post_content:
            "I went to Tokyo and Kyoto in November and I'm only now getting the scans back because I shot 22 rolls and the lab was backed up. Going through them is like revisiting a trip I almost forgot. I find things I didn't consciously notice when I was there — a shadow, a reflection, the way light hit a torii gate at 7am. The camera sees while the eye is busy looking.",
        created_at: '2024-03-21',
    },
    {
        id: 74,
        post_title: 'a note on building company culture remotely',
        post_content:
            "We've been fully remote since we started. I know a lot of companies who went remote during 2020 and then rushed back to offices as soon as they could, citing culture. I understand the impulse but I think it misdiagnoses the problem. Weak culture in a remote environment is usually weak culture, period. The office was masking it with proximity and in-person rituals that create the feeling of culture without the substance. The companies I've seen maintain strong remote culture are ones where values are explicit, communication norms are written down, and managers are trained to build relationships intentionally rather than passively.",
        created_at: '2024-03-22',
    },
    {
        id: 75,
        post_title: 'presentation at the lab symposium',
        post_content:
            "Presented the theta oscillation work to about 60 people today. Thirty seconds in I forgot that I was nervous. By the end I was genuinely enjoying the questions, even the aggressive one from the professor in the third row who kept saying 'but have you ruled out X.' Yes. I have ruled out X. It's in the supplementary materials. Sir.",
        created_at: '2024-03-23',
    },
    {
        id: 76,
        post_title: 'Boston Marathon — 3:38:54',
        post_content:
            "I don't have enough words. I ran from Hopkinton to Boston. I ran up Heartbreak Hill at mile 21 and I didn't slow down. I ran down Boylston Street and the sound of the crowd hit me like a wall and I started crying at mile 25.9 and finished crying at the finish line and kept crying for a while after. 3:38:54. A personal best by two minutes and 28 seconds. My mom was with me for the whole 26.2 miles. I know she was.",
        created_at: '2024-04-15',
    },
    {
        id: 77,
        post_title: 'miso check-in',
        post_content:
            'Opened the crock for the first time since March to check on the miso. It smells incredible — salty, deeply savory, a little funky. The color is deepening from white toward pale yellow. Replaced the plastic wrap and the weight and closed it back up. Three more months minimum. Patience.',
        created_at: '2024-06-11',
    },
    {
        id: 78,
        post_title: 'why I finally deleted Twitter',
        post_content:
            'I held on for longer than I should have because I told myself it was useful for following researchers and staying current in my field. That was true for a while. It stopped being true somewhere around 2022 and I spent the next two years being slowly poisoned by a feed that made me angrier and more anxious without making me more informed. I feel genuinely better. I did not expect to feel genuinely better this quickly.',
        created_at: '2024-03-24',
    },
    {
        id: 79,
        post_title: 'the short rib taco gets a permanent spot',
        post_content:
            "After three months of testing I'm officially adding the short rib taco to the permanent menu. Braised short rib, pickled red onion, avocado crema, cotija, cilantro on a fresh corn tortilla. It's the most me thing on the truck. Abuela would have loved it and probably also suggested adding more garlic. She was always right.",
        created_at: '2024-03-25',
    },
    {
        id: 80,
        post_title: 'just a photo walk',
        post_content:
            'no goal today. no film to finish. just walked around with the Pentax for three hours and shot whatever felt right. some days the process is the whole thing.',
        created_at: '2024-03-26',
    },
    {
        id: 81,
        post_title: 'the loneliness of long-distance running',
        post_content:
            "There's a quote from Haruki Murakami I keep coming back to: pain is inevitable, suffering is optional. I think about it at mile 18 of every long run, when the body starts sending signals and you have to decide what to do with them. Running a marathon is the loneliest thing I do regularly. Nobody can carry you. Nobody can run your miles for you. But crossing that line with 30,000 other people doing the same lonely thing at the same time is somehow the opposite of lonely.",
        created_at: '2024-03-27',
    },
    {
        id: 82,
        post_title: "does anyone else not know how to respond to 'how are you'",
        post_content:
            "like actually i'm fine but also there's so much happening and the honest answer would take 20 minutes and neither of us has time for that so i just say 'good, you?' and we both move on and that's probably fine right",
        created_at: '2024-03-28',
    },
    {
        id: 83,
        post_title: 'Bronx project update',
        post_content:
            "The mixed-use timber building I've been working on got preliminary approval from the community board last night. 48 units, 30% affordable, mass timber frame, green roof, shared courtyard. It took 14 months to get to this point. We've had three complete redesigns in response to community feedback, all of which made the project better. Participatory design is slower. It is also more right.",
        created_at: '2024-03-29',
    },
    {
        id: 84,
        post_title: 'paper accepted',
        post_content:
            "The theta oscillation paper was accepted at the Journal of Neuroscience. Minor revisions. I have been staring at the email for the last 20 minutes. My advisor said 'I told you so' which is the most emotionally expressive she's been in six years. I called my parents. My mom cried. I'm going to go eat something and then probably also cry.",
        created_at: '2024-04-01',
    },
    {
        id: 85,
        post_title: 'the cat showed up',
        post_content:
            "there was a cat sitting on my fire escape this morning. i gave it some milk (yes i know). it came back tonight. i don't have a cat. i might have a cat.",
        created_at: '2024-04-02',
    },
    {
        id: 86,
        post_title: 'hiring post — if you know anyone',
        post_content:
            "We're looking for a senior product designer to join a 12-person remote team building B2B workflow software. No ping pong tables. No mandatory fun. Competitive salary, actual work-life balance, and a product team that argues thoughtfully and then moves forward. DM me if you know someone who might be a fit.",
        created_at: '2024-04-03',
    },
    {
        id: 87,
        post_title: "I grew up on the water and I'll probably die on it",
        post_content:
            "My father had a boat. His father had a boat. I had my first watch on a Navy vessel at 22. Now I have a 32-foot sloop that I sail mostly alone except when Tyler is around. The water teaches patience in a way that nothing ashore does. You cannot argue with weather. You cannot rush a tide. You can only read what's in front of you and make the best decision available. I think that's why former sailors make decent leaders. They've had the arrogance trained out of them.",
        created_at: '2024-04-04',
    },
    {
        id: 88,
        post_title: 'my type specimen wall',
        post_content:
            "spent all of last saturday printing type specimens and pinning them to the wall above my desk. 40+ fonts, different weights, different sizes, just to live with them and see what I notice. designers will understand. my roommate called it 'the most chaotic art installation she's ever seen.' I take that as a compliment.",
        created_at: '2024-04-05',
    },
    {
        id: 89,
        post_title: 'the miso is done',
        post_content:
            'Nine months. I opened the crock this morning and the smell was deep, earthy, complex, and unmistakably miso. Made a simple soup — dashi, cubed tofu, wakame, green onion. Tasted it and laughed out loud alone in my kitchen. Nine months of waiting and it took 10 minutes to use. That ratio seems exactly right.',
        created_at: '2024-12-11',
    },
    {
        id: 90,
        post_title: 'reflecting on a weird year',
        post_content:
            "ran a marathon PR, published my first first-author paper, the truck cleared $200k in revenue for the first time, my cat is named Coriander now, i revised logo number 21 four more times after they said they liked it, and i still don't know where i left my keys. fine year overall.",
        created_at: '2024-12-31',
    },
    {
        id: 91,
        post_title: 'a note on grief',
        post_content:
            "My wife passed two years ago this week. I don't write about this much because I'm not sure what to say about it that isn't already obvious. She was my person for 41 years. The house is still arranged the way she liked it. I've only moved one chair. I figure if I ever want to move the chair I will.",
        created_at: '2024-04-06',
    },
    {
        id: 92,
        post_title: 'marathon training starts again',
        post_content:
            "Twelve weeks out from Chicago. First run of the new training block: 6 easy miles, heart rate in zone 2 the whole way. My body remembers. After Boston I told myself I was taking the summer completely off. I took six weeks. That's close enough.",
        created_at: '2024-07-01',
    },
    {
        id: 93,
        post_title: 'conference in Copenhagen',
        post_content:
            "At a computational neuroscience conference for the week. Copenhagen in July is extraordinary — light until 10pm, everyone on bikes, the most effortlessly livable city I've ever visited. Also presented a poster this morning and a researcher from UCL asked for my email to follow up on a potential collaboration. Trying to stay calm about that.",
        created_at: '2024-07-08',
    },
    {
        id: 94,
        post_title: 'new camera: Hasselblad 500C/M',
        post_content:
            'I found a fully serviced Hasselblad 500C/M at a camera fair for $800 — half what they usually go for — because the seller was retiring from photography and wanted it to go to someone who would use it. I shot one test roll and every single frame is tack sharp across the full 6x6 negative. Medium format is a completely different way of seeing. The image quality is almost unfair. I feel like I owe the camera something in return.',
        created_at: '2024-07-15',
    },
    {
        id: 95,
        post_title: 'catering a wedding — what i learned',
        post_content:
            "Said yes to catering a small wedding (40 guests) in March and it was the most logistically complex thing I've ever done in food. Triple my usual quantities of everything. Rental equipment I'd never used. A timeline with no margin for error. The picadillo ran out 20 minutes early because I underestimated how much people eat at weddings when the food is good. The couple said it was the best wedding food they'd ever had. I'm still not sure I'd do it again. Actually, I know I would.",
        created_at: '2024-04-20',
    },
    {
        id: 96,
        post_title: "things I believe about design that I can't fully prove",
        post_content:
            "1. Constraints produce better work than complete creative freedom, almost every time. 2. If you need to explain why a design works, it probably doesn't. 3. The client is always telling you something useful even when they're saying it badly. 4. Taste is learnable but takes longer than any school tells you. 5. The best design work I've done has always felt slightly inevitable in retrospect.",
        created_at: '2024-04-21',
    },
    {
        id: 97,
        post_title: 'Chicago Marathon — 3:34:11',
        post_content:
            'New personal best. By four minutes and 43 seconds. I ran the second half faster than the first. I did not cry at the finish line this time — I just pumped my fists and screamed something incoherent and kept walking because if I stopped I was going to fall over. My left IT band has something to say about miles 22 onward. But 3:34. I keep typing it to make it real.',
        created_at: '2024-10-13',
    },
    {
        id: 98,
        post_title: 'Coriander at 6 months',
        post_content:
            "she has learned to open the kitchen cabinet where the treats are. she cannot open it but she rattles it with a dedication i can only respect. she sits on my sketchbook when i'm trying to work. she knocked my favorite mug off the table and looked me directly in the eye while she did it. i have never loved anything this much.",
        created_at: '2024-10-14',
    },
    {
        id: 99,
        post_title: 'the UCL collaboration is happening',
        post_content:
            "Signed the agreement for a joint project with the UCL group I met in Copenhagen. We'll be running parallel experiments in London and Boston looking at hippocampal-prefrontal interactions during memory consolidation. This is the kind of work you spend a PhD dreaming about getting to do. I start the London leg in January.",
        created_at: '2024-11-01',
    },
    {
        id: 100,
        post_title: 'cold morning, good coffee, no plans',
        post_content: 'this is enough. this is actually enough.',
        created_at: '2024-11-02',
    },
    {
        id: 101,
        post_title: 'the truck has a second location',
        post_content:
            "Signed the agreement for a second truck spot — Thursdays at the Midtown arts district, in addition to our Friday on 5th and Main. Valentina is going to run Thursdays. This is a bigger step than it sounds. I'm trying to grow without losing what makes the truck feel like mine. That tension is something I think about a lot.",
        created_at: '2024-11-15',
    },
    {
        id: 102,
        post_title: 'i finished a sketchbook for the first time in my life',
        post_content:
            "Every other sketchbook I've owned: filled maybe 40% of the way and then abandoned on a shelf. This one: every page. Front to back. It took 14 months and the progression from the first page to the last is genuinely embarrassing in the best way.",
        created_at: '2024-11-20',
    },
    {
        id: 103,
        post_title: 'annual Chesapeake haul-out',
        post_content:
            "Pulled the boat out of the water for winter today. Pressure-washed the hull, checked the standing rigging, replaced a shroud that was showing wear. Tyler helped. He's 10 now and knows the name of every piece of hardware on the boat. I let him do the bottom paint on one whole section by himself. He's going to be a better sailor than me.",
        created_at: '2024-11-21',
    },
    {
        id: 104,
        post_title: "new year, same me, that's fine",
        post_content:
            "I don't do resolutions. I do intentions. The intention this year: be more patient with myself and less patient with situations I have the power to change. We'll see how that goes.",
        created_at: '2025-01-01',
    },
];

const post_user = [
    { post_id: 1, user_id: 1 },
    { post_id: 2, user_id: 6 },
    { post_id: 3, user_id: 3 },
    { post_id: 4, user_id: 5 },
    { post_id: 5, user_id: 7 },
    { post_id: 6, user_id: 9 },
    { post_id: 7, user_id: 10 },
    { post_id: 8, user_id: 11 },
    { post_id: 9, user_id: 14 },
    { post_id: 10, user_id: 1 },
    { post_id: 11, user_id: 2 },
    { post_id: 12, user_id: 3 },
    { post_id: 13, user_id: 5 },
    { post_id: 14, user_id: 7 },
    { post_id: 15, user_id: 9 },
    { post_id: 16, user_id: 10 },
    { post_id: 17, user_id: 2 },
    { post_id: 18, user_id: 12 },
    { post_id: 19, user_id: 13 },
    { post_id: 20, user_id: 14 },
    { post_id: 21, user_id: 1 },
    { post_id: 22, user_id: 9 },
    { post_id: 23, user_id: 11 },
    { post_id: 24, user_id: 10 },
    { post_id: 25, user_id: 4 },
    { post_id: 26, user_id: 5 },
    { post_id: 27, user_id: 2 },
    { post_id: 28, user_id: 7 },
    { post_id: 29, user_id: 12 },
    { post_id: 30, user_id: 13 },
    { post_id: 31, user_id: 1 },
    { post_id: 32, user_id: 14 },
    { post_id: 33, user_id: 11 },
    { post_id: 34, user_id: 9 },
    { post_id: 35, user_id: 10 },
    { post_id: 36, user_id: 6 },
    { post_id: 37, user_id: 7 },
    { post_id: 38, user_id: 12 },
    { post_id: 39, user_id: 13 },
    { post_id: 40, user_id: 9 },
    { post_id: 41, user_id: 1 },
    { post_id: 42, user_id: 5 },
    { post_id: 43, user_id: 10 },
    { post_id: 44, user_id: 6 },
    { post_id: 45, user_id: 14 },
    { post_id: 46, user_id: 7 },
    { post_id: 47, user_id: 9 },
    { post_id: 48, user_id: 12 },
    { post_id: 49, user_id: 13 },
    { post_id: 50, user_id: 9 },
    { post_id: 51, user_id: 1 },
    { post_id: 52, user_id: 5 },
    { post_id: 53, user_id: 7 },
    { post_id: 54, user_id: 14 },
    { post_id: 55, user_id: 1 },
    { post_id: 56, user_id: 10 },
    { post_id: 57, user_id: 13 },
    { post_id: 58, user_id: 9 },
    { post_id: 59, user_id: 12 },
    { post_id: 60, user_id: 7 },
    { post_id: 61, user_id: 4 },
    { post_id: 62, user_id: 5 },
    { post_id: 63, user_id: 3 },
    { post_id: 64, user_id: 8 },
    { post_id: 65, user_id: 1 },
    { post_id: 66, user_id: 10 },
    { post_id: 67, user_id: 9 },
    { post_id: 68, user_id: 14 },
    { post_id: 69, user_id: 12 },
    { post_id: 70, user_id: 6 },
    { post_id: 71, user_id: 7 },
    { post_id: 72, user_id: 5 },
    { post_id: 73, user_id: 1 },
    { post_id: 74, user_id: 14 },
    { post_id: 75, user_id: 9 },
    { post_id: 76, user_id: 7 },
    { post_id: 77, user_id: 3 },
    { post_id: 78, user_id: 9 },
    { post_id: 79, user_id: 10 },
    { post_id: 80, user_id: 1 },
    { post_id: 81, user_id: 7 },
    { post_id: 82, user_id: 4 },
    { post_id: 83, user_id: 5 },
    { post_id: 84, user_id: 9 },
    { post_id: 85, user_id: 11 },
    { post_id: 86, user_id: 14 },
    { post_id: 87, user_id: 12 },
    { post_id: 88, user_id: 13 },
    { post_id: 89, user_id: 3 },
    { post_id: 90, user_id: 8 },
    { post_id: 91, user_id: 12 },
    { post_id: 92, user_id: 7 },
    { post_id: 93, user_id: 9 },
    { post_id: 94, user_id: 1 },
    { post_id: 95, user_id: 10 },
    { post_id: 96, user_id: 13 },
    { post_id: 97, user_id: 7 },
    { post_id: 98, user_id: 11 },
    { post_id: 99, user_id: 9 },
    { post_id: 100, user_id: 6 },
    { post_id: 101, user_id: 10 },
    { post_id: 102, user_id: 13 },
    { post_id: 103, user_id: 12 },
    { post_id: 104, user_id: 4 },
];

const comments = [
    {
        id: 1,
        comment:
            "The darkroom process sounds so meditative. I've been wanting to try film photography for ages — what would you recommend for a complete beginner?",
        created_at: '2024-01-08',
    },
    {
        id: 2,
        comment:
            'Kodak Gold 200 is such a great starting point. The overexposed ones are honestly sometimes better anyway lol',
        created_at: '2024-01-08',
    },
    {
        id: 3,
        comment: "ok but the double exposure one sounds INCREDIBLE. please post the print when it's done",
        created_at: '2024-01-17',
    },
    {
        id: 4,
        comment:
            "I did something similar once but on purpose and it never looked as good as the accidents do. there's a lesson in there somewhere",
        created_at: '2024-01-17',
    },
    {
        id: 5,
        comment:
            "This is beautiful writing. The camera sees while the eye is busy looking — I'm going to think about that for a while.",
        created_at: '2024-03-21',
    },
    {
        id: 6,
        comment: '22 rolls!! the dedication. I could never be that patient waiting for scans',
        created_at: '2024-03-21',
    },
    {
        id: 7,
        comment:
            'lo-fi + rain is literally the only correct combination. add a weighted blanket and you have perfection',
        created_at: '2024-01-09',
    },
    { id: 8, comment: 'same energy as me rn honestly', created_at: '2024-01-09' },
    { id: 9, comment: "Day 1 and I'm already stressed on your behalf lol. Please update us", created_at: '2024-01-10' },
    {
        id: 10,
        comment: 'The commitment to making ramen from scratch is a personality trait and I respect it deeply',
        created_at: '2024-01-10',
    },
    {
        id: 11,
        comment: 'I tried this once and my broth came out brown and thin. What am I doing wrong??',
        created_at: '2024-01-10',
    },
    {
        id: 12,
        comment:
            "you have to keep it at a ROLLING boil the whole time, not a simmer. that's what makes it milky and rich",
        created_at: '2024-01-10',
    },
    {
        id: 13,
        comment: "Day 3 update DID NOT disappoint. Please write the full recipe eventually I'm begging",
        created_at: '2024-01-19',
    },
    {
        id: 14,
        comment: "your roommate's reaction is exactly what good food deserves. silence first, then everything else",
        created_at: '2024-01-19',
    },
    {
        id: 15,
        comment:
            "I've been making tonkotsu for years and the kansui noodles from scratch is the part I always skip. respect.",
        created_at: '2024-01-19',
    },
    {
        id: 16,
        comment:
            "The passive house retrofit problem is so real and so underdiscussed. Every time I go to a green building conference it's all shiny new construction and zero conversation about the existing stock.",
        created_at: '2024-01-11',
    },
    {
        id: 17,
        comment:
            'The Bronx project sounds amazing. Will you be sharing more details about the CLT specification at any point?',
        created_at: '2024-01-11',
    },
    { id: 18, comment: "Congrats!! I'm crying reading this. The thing about your mom 😭", created_at: '2024-01-12' },
    {
        id: 19,
        comment: "3:41 is INCREDIBLE for a first qualifier. You're going to destroy Boston",
        created_at: '2024-01-12',
    },
    {
        id: 20,
        comment:
            'I ran Houston last year in 4:02 and thought I was going to die at mile 22. You are built differently.',
        created_at: '2024-01-12',
    },
    {
        id: 21,
        comment: 'The humidity in January there is criminal. You earned every second of that time.',
        created_at: '2024-01-12',
    },
    {
        id: 22,
        comment:
            "okay i've read this three times and i still don't know if I agree with you or if you've just argued it very convincingly",
        created_at: '2024-01-13',
    },
    {
        id: 23,
        comment:
            'The post-hoc narrative framing is the part that gets me. Like we decide and then we explain the decision to ourselves after the fact. Scary stuff.',
        created_at: '2024-01-13',
    },
    {
        id: 24,
        comment:
            'hard determinism always breaks down for me when I try to apply it to moral responsibility. how do you hold people accountable in that framework',
        created_at: '2024-01-13',
    },
    {
        id: 25,
        comment:
            "That's actually a solid legal/philosophical question — compatibilist free will tries to square that circle if you want to go deeper",
        created_at: '2024-01-13',
    },
    { id: 26, comment: 'CONGRATULATIONS!! Come celebrate soon, dinner is on me', created_at: '2024-01-14' },
    {
        id: 27,
        comment: "Going to be there Friday for sure. The arroz con pollo is the one I'm most excited about",
        created_at: '2024-01-14',
    },
    {
        id: 28,
        comment: "my monstera is dying and i'm choosing to not think about what that means",
        created_at: '2024-01-15',
    },
    {
        id: 29,
        comment:
            "what's your light situation? mine turned around completely when I moved it closer to the window but out of direct sun",
        created_at: '2024-01-15',
    },
    {
        id: 30,
        comment:
            'The co-founder alignment point is the one nobody talks about enough. We were best friends. We should never have started a company together.',
        created_at: '2024-01-16',
    },
    {
        id: 31,
        comment: 'Paying everyone out of pocket says everything about the kind of person you are.',
        created_at: '2024-01-16',
    },
    {
        id: 32,
        comment:
            "The 'early by three years' thing haunts me. My first startup was the same story. The timing variable is brutal and mostly out of your hands.",
        created_at: '2024-01-16',
    },
    {
        id: 33,
        comment:
            "I needed to read the part about building something sustainable. We've been pressured to raise and I keep resisting and everyone thinks I'm crazy.",
        created_at: '2024-01-16',
    },
    {
        id: 34,
        comment:
            "You're not crazy. Profitable and sustainable beats fast and fragile every time, at least for the humans involved.",
        created_at: '2024-01-16',
    },
    {
        id: 35,
        comment:
            "Fujifilm vs Kodak discourse is eternal and I love every iteration of it. I'm a Portra 400 loyalist myself but I respect your reasoning completely.",
        created_at: '2024-02-07',
    },
    {
        id: 36,
        comment:
            "The 'different moods' framing is exactly right. It's not about better or worse, it's about what you're trying to feel.",
        created_at: '2024-02-07',
    },
    { id: 37, comment: 'okay what about Ilford HP5 in this framework where does that land', created_at: '2024-02-07' },
    {
        id: 38,
        comment:
            "HP5 is its own category entirely, it's the film for when you want the world to feel a little bit heavier and more serious lol",
        created_at: '2024-02-07',
    },
    {
        id: 39,
        comment: "I felt this at 3am last night. Didn't even have a reason. Just awake.",
        created_at: '2024-01-18',
    },
    {
        id: 40,
        comment: "the comma after 'sad' is doing a lot of work in this post and I felt it",
        created_at: '2024-01-18',
    },
    {
        id: 41,
        comment:
            "The part about walking the same street multiple times is so true. I've shot the same block for two years and I'm still finding new things.",
        created_at: '2024-03-13',
    },
    {
        id: 42,
        comment: 'Rule 3 should be the first rule honestly. No photo is worth making someone uncomfortable.',
        created_at: '2024-03-13',
    },
    {
        id: 43,
        comment:
            "The photo you almost didn't take one is the reason I now shoot first and hesitate later. Changed how I work.",
        created_at: '2024-03-13',
    },
    {
        id: 44,
        comment:
            'Boston qualifier to Boston to Chicago PR in one year is an absolutely unhinged training arc in the best way',
        created_at: '2024-01-12',
    },
    {
        id: 45,
        comment: 'I ugly cried reading the Boston post. 3:38 and a personal best?? You are AMAZING',
        created_at: '2024-04-15',
    },
    {
        id: 46,
        comment:
            "The Boylston Street stretch hits different when you're in it. I did Boston in 2019 and I still get emotional thinking about it.",
        created_at: '2024-04-15',
    },
    { id: 47, comment: 'Your mom was absolutely with you. No doubt.', created_at: '2024-04-15' },
    {
        id: 48,
        comment:
            '3:34 at Chicago is a full 4+ minute PR. You are not the same runner who qualified at Houston. This is incredible.',
        created_at: '2024-10-13',
    },
    {
        id: 49,
        comment:
            "The IT band will talk to you for a week and then shut up. Ice it. You've earned the complaining rights.",
        created_at: '2024-10-13',
    },
    {
        id: 50,
        comment:
            'The hippocampal replay stuff is genuinely fascinating. The idea that emotional tagging influences consolidation strength — do you know of any work linking this to trauma memory formation?',
        created_at: '2024-02-10',
    },
    {
        id: 51,
        comment:
            "That explains why I remember every embarrassing thing I've ever done with photographic clarity and forget where I put my phone every single day",
        created_at: '2024-02-10',
    },
    { id: 52, comment: "Good luck Friday!! I'll be there", created_at: '2024-02-12' },
    {
        id: 53,
        comment: "Sold out in two hours on your FIRST day. That is not a coincidence, that's years of work showing up.",
        created_at: '2024-01-23',
    },
    {
        id: 54,
        comment: "Your cousin burning herself twice and keeping going is the most beautiful thing I've read today",
        created_at: '2024-01-23',
    },
    {
        id: 55,
        comment: "The picadillo recipe!! I've been waiting for this since you opened. Making it this weekend.",
        created_at: '2024-01-31',
    },
    {
        id: 56,
        comment: "My abuela also never measured anything. I think that's just how real cooking works.",
        created_at: '2024-01-31',
    },
    {
        id: 57,
        comment: 'Adding the olives is non-negotiable. Anyone who leaves them out is wrong.',
        created_at: '2024-01-31',
    },
    {
        id: 58,
        comment: "What's your take on raisins in picadillo? My family is divided on this every holiday.",
        created_at: '2024-01-31',
    },
    {
        id: 59,
        comment: 'No raisins. This is not up for debate. Your abuela and my abuela are in agreement from the beyond.',
        created_at: '2024-01-31',
    },
    {
        id: 60,
        comment: 'The oxtail selling out in 40 minutes is exactly what it deserved. Please make 80 next week.',
        created_at: '2024-03-14',
    },
    { id: 61, comment: 'Valentina sounds like an absolute legend. Hold onto her.', created_at: '2024-02-19' },
    {
        id: 62,
        comment: 'Good people AND fast learners are the rarest combination. You got lucky.',
        created_at: '2024-02-19',
    },
    {
        id: 63,
        comment: "The short rib taco being permanent is the best news I've heard all week and I mean that sincerely",
        created_at: '2024-03-25',
    },
    {
        id: 64,
        comment:
            'Thank you for naming the tension between growing and keeping the soul of the thing. Most food truck success stories skip that part.',
        created_at: '2024-11-15',
    },
    {
        id: 65,
        comment:
            'Tyler asking for hot chocolate after that whole conversation about fear is the most 9-year-old thing possible and I love it',
        created_at: '2024-01-25',
    },
    {
        id: 66,
        comment:
            "The sailing patience = leadership patience connection is something I've never heard articulated that way but it's completely right.",
        created_at: '2024-04-04',
    },
    {
        id: 67,
        comment:
            "I grew up on the coast and this post made me homesick in a way I wasn't expecting on a Tuesday morning.",
        created_at: '2024-04-04',
    },
    {
        id: 68,
        comment: 'The Melian Dialogue is haunting me now. I read it in college and forgot how brutal it is.',
        created_at: '2024-02-05',
    },
    {
        id: 69,
        comment:
            "I've assigned Thucydides to students for 15 years and the Melian Dialogue never loses its impact. You've described it perfectly.",
        created_at: '2024-02-05',
    },
    {
        id: 70,
        comment: 'The ospreys are back = spring is real. This is the only calendar system I trust.',
        created_at: '2024-03-17',
    },
    {
        id: 71,
        comment: 'I read this and then went outside and stood in the sun for five minutes. Thank you.',
        created_at: '2024-03-17',
    },
    {
        id: 72,
        comment: "Tyler knowing every piece of hardware is the best thing. You're raising a sailor.",
        created_at: '2024-11-21',
    },
    {
        id: 73,
        comment: 'Reading this after a long week and it hit somewhere quiet. Thank you for writing it.',
        created_at: '2024-02-14',
    },
    { id: 74, comment: '41 years. I hope I get to write something like this someday.', created_at: '2024-04-06' },
    { id: 75, comment: "The chair detail broke me. I'm so sorry for your loss.", created_at: '2024-04-06' },
    { id: 76, comment: 'logo revision 14 should be a war crime', created_at: '2024-01-26' },
    {
        id: 77,
        comment: 'I once did 22 revisions for a startup that pivoted and never launched. 22. I still think about it.',
        created_at: '2024-01-26',
    },
    {
        id: 78,
        comment:
            "the 'we'll know it when we see it' clients are the ones who don't know what they want AND don't trust you to figure it out for them. nightmare combination.",
        created_at: '2024-01-26',
    },
    {
        id: 79,
        comment: "logo revision 21 being approved made me physically exhale. I've been invested in this saga",
        created_at: '2024-02-25',
    },
    {
        id: 80,
        comment:
            "The typography post is everything. The number of fintech apps I've had to design for that insist on Inter and nothing else is too high.",
        created_at: '2024-03-05',
    },
    {
        id: 81,
        comment: "A custom lettering wordmark for a bakery sounds BEAUTIFUL. Any chance you'd share it?",
        created_at: '2024-03-05',
    },
    {
        id: 82,
        comment:
            'finished a sketchbook completely is genuinely a milestone. I have eight half-finished ones on my shelf judging me.',
        created_at: '2024-11-20',
    },
    {
        id: 83,
        comment: "The progression from first page to last is always the most honest portfolio you'll ever have.",
        created_at: '2024-11-20',
    },
    {
        id: 84,
        comment: 'the five things I believe list is going on my studio wall. especially number 2.',
        created_at: '2024-04-21',
    },
    {
        id: 85,
        comment:
            'Number 4 is the uncomfortable one. Taste taking longer than any school tells you is so true and nobody warns you.',
        created_at: '2024-04-21',
    },
    {
        id: 86,
        comment:
            'The Hasselblad for $800 is a crime that you benefited from. Congrats. That camera is going to ruin your other cameras for you.',
        created_at: '2024-07-15',
    },
    {
        id: 87,
        comment:
            "Medium format is a trap because once you see the quality you can't unsee it. Welcome to the expensive side.",
        created_at: '2024-07-15',
    },
    { id: 88, comment: "The plant is thriving and that's the only update I needed today", created_at: '2024-01-15' },
    {
        id: 89,
        comment: 'three emojis as a bio is the most unbothered energy possible. I respect it.',
        created_at: '2024-01-30',
    },
    {
        id: 90,
        comment:
            "denver really does go hard with the winter sun. people in other states look at me like I'm lying when I describe January there",
        created_at: '2024-01-30',
    },
    {
        id: 91,
        comment:
            "live music does something no recording can replicate. it's the shared physical presence of it. glad you went.",
        created_at: '2024-03-18',
    },
    {
        id: 92,
        comment:
            "I went to a show last month after a really hard week and it fixed something in me I didn't know was broken",
        created_at: '2024-03-18',
    },
    {
        id: 93,
        comment:
            "the 'performing productivity' thing is so real it's uncomfortable. I've had 45-minute days inside 8-hour ones and nobody noticed.",
        created_at: '2024-01-24',
    },
    {
        id: 94,
        comment: "Honestly the 40 minutes of real work probably produce more than most people's 8 hours anyway",
        created_at: '2024-01-24',
    },
    {
        id: 95,
        comment: 'the brain at 2am sending you random trivia questions is a universal experience I think',
        created_at: '2024-02-03',
    },
    {
        id: 96,
        comment:
            'I once spent 45 minutes at 3am researching whether hot dogs are sandwiches. The internet is a dangerous place at night.',
        created_at: '2024-02-03',
    },
    {
        id: 97,
        comment: "the 'just awake' feeling is so specific and so isolating. hope you got some sleep eventually",
        created_at: '2024-01-18',
    },
    {
        id: 98,
        comment:
            "Rewiring a bathroom fixture is where it starts. Next thing you know you're replacing subfloor at midnight. Respect the journey.",
        created_at: '2024-02-01',
    },
    {
        id: 99,
        comment: 'This is why YouTube is the most useful website ever created, unpopular opinion but I stand by it',
        created_at: '2024-02-01',
    },
    {
        id: 100,
        comment:
            "The thesis advisor communication scale is painfully accurate. 'Making progress' meaning 'fine' is the most compressed emotional vocabulary ever developed.",
        created_at: '2024-01-29',
    },
    {
        id: 101,
        comment:
            'My advisor communicates entirely in long silences and single raised eyebrows. I envy you your three modes.',
        created_at: '2024-01-29',
    },
    {
        id: 102,
        comment:
            "The imposter syndrome never going away thing is the most discouraging encouragement I've ever received, and also somehow helpful?",
        created_at: '2024-03-15',
    },
    {
        id: 103,
        comment:
            "Six years in and it still hits? That's somehow reassuring and devastating at the same time. Thank you for being honest about it.",
        created_at: '2024-03-15',
    },
    {
        id: 104,
        comment: 'CONGRATULATIONS on the acceptance!! Journal of Neuroscience is not small. This is huge.',
        created_at: '2024-04-01',
    },
    {
        id: 105,
        comment:
            "First first-author paper at JNeurosci is a massive deal. Your advisor saying 'I told you so' is chef's kiss.",
        created_at: '2024-04-01',
    },
    {
        id: 106,
        comment:
            'The Copenhagen lab collaboration sounds incredible. Parallel experiments across two continents is big science energy.',
        created_at: '2024-11-01',
    },
    {
        id: 107,
        comment: "UCL is a great group for hippocampal work. You're going to learn so much from that collaboration.",
        created_at: '2024-11-01',
    },
    {
        id: 108,
        comment:
            "The presenter who goes into flow state mid-talk and stops being nervous — that's the dream. Sounds like it went really well.",
        created_at: '2024-03-23',
    },
    {
        id: 109,
        comment:
            'The professor who asks the supplementary materials question in person is a special kind of person. Glad you were ready for him.',
        created_at: '2024-03-23',
    },
    {
        id: 110,
        comment:
            'Sourdough Dutch oven is the only correct method and I will die on this hill. Congrats on the successful loaf.',
        created_at: '2024-02-26',
    },
    {
        id: 111,
        comment: 'The crust shattering when you tap it is the most satisfying sound in all of baking. You did it.',
        created_at: '2024-02-26',
    },
    {
        id: 112,
        comment:
            "The miso post after nine months of waiting is so quietly triumphant. This is the most patient cooking post I've ever read.",
        created_at: '2024-12-11',
    },
    {
        id: 113,
        comment:
            "Nine months to make, ten minutes to use, and it was worth every day. That's a whole philosophy of life right there.",
        created_at: '2024-12-11',
    },
    {
        id: 114,
        comment:
            "The survivorship bias point is the most important thing in this post and it's buried in the middle. The failure post-mortems are where the real education is.",
        created_at: '2024-02-08',
    },
    {
        id: 115,
        comment:
            "I've started specifically seeking out failure stories after reading stuff like this. They're harder to find because nobody wants to write them.",
        created_at: '2024-02-08',
    },
    {
        id: 116,
        comment:
            "Profitable and turning down term sheets is genuinely rare. I have so many questions about how you've managed the growth without outside capital.",
        created_at: '2024-02-21',
    },
    {
        id: 117,
        comment:
            "The remote culture point about proximity masking weak culture is the most honest thing I've read about the return-to-office debate.",
        created_at: '2024-03-22',
    },
    {
        id: 118,
        comment:
            "We went full remote in 2020 and never went back and our culture is stronger than it was in-office. It's about intentionality, exactly as you said.",
        created_at: '2024-03-22',
    },
    {
        id: 119,
        comment:
            "Coriander rattling the cabinet with pure determination is the most relatable character in any story I've read this year.",
        created_at: '2024-10-14',
    },
    {
        id: 120,
        comment:
            "The direct eye contact while knocking the mug off is cats asserting dominance and there's nothing you can do about it. Welcome to having a cat.",
        created_at: '2024-10-14',
    },
    {
        id: 121,
        comment: "this is enough is the most grounding two-sentence post I've seen in a long time. saving this.",
        created_at: '2024-11-02',
    },
    {
        id: 122,
        comment:
            "The small apartment thesis is something I've been arguing with my partner about for years. 540 sqft sounds perfect to me.",
        created_at: '2024-03-20',
    },
    {
        id: 123,
        comment:
            "designing for people who'll never know you exist and making their lives quietly better — that's one of the most beautiful descriptions of a job I've ever read",
        created_at: '2024-02-02',
    },
    {
        id: 124,
        comment:
            'The texture of cities paragraph made me want to walk around my own city and actually feel it instead of just moving through it',
        created_at: '2024-02-28',
    },
    {
        id: 125,
        comment:
            "Milan vs New York is such a good comparison because they're both genuinely beautiful and completely opposite in their logic.",
        created_at: '2024-02-28',
    },
    {
        id: 126,
        comment:
            'taper madness is a real clinical condition and I say this as someone who has been there seven times. the weather-checking is the worst symptom.',
        created_at: '2024-03-19',
    },
    {
        id: 127,
        comment: '55 and partly cloudy is basically perfect marathon weather. Your legs know what to do.',
        created_at: '2024-03-19',
    },
    {
        id: 128,
        comment:
            'The negative splits in snow story is unhinged running behavior and I mean that as the highest compliment.',
        created_at: '2024-02-04',
    },
    {
        id: 129,
        comment:
            'I did a half marathon once and you could not have paid me to run 10 miles in snow. You are built from different material.',
        created_at: '2024-02-04',
    },
    {
        id: 130,
        comment:
            "The Murakami quote and then 'crossing that line with 30,000 people doing the same lonely thing' — you should write a book honestly",
        created_at: '2024-03-27',
    },
];

const post_comment = [
    { post_id: 1, comment_id: 1 },
    { post_id: 1, comment_id: 2 },
    { post_id: 10, comment_id: 3 },
    { post_id: 10, comment_id: 4 },
    { post_id: 73, comment_id: 5 },
    { post_id: 73, comment_id: 6 },
    { post_id: 2, comment_id: 7 },
    { post_id: 2, comment_id: 8 },
    { post_id: 3, comment_id: 9 },
    { post_id: 3, comment_id: 10 },
    { post_id: 3, comment_id: 11 },
    { post_id: 3, comment_id: 12 },
    { post_id: 12, comment_id: 13 },
    { post_id: 12, comment_id: 14 },
    { post_id: 12, comment_id: 15 },
    { post_id: 4, comment_id: 16 },
    { post_id: 4, comment_id: 17 },
    { post_id: 5, comment_id: 18 },
    { post_id: 5, comment_id: 19 },
    { post_id: 5, comment_id: 20 },
    { post_id: 5, comment_id: 21 },
    { post_id: 6, comment_id: 22 },
    { post_id: 6, comment_id: 23 },
    { post_id: 6, comment_id: 24 },
    { post_id: 6, comment_id: 25 },
    { post_id: 7, comment_id: 26 },
    { post_id: 7, comment_id: 27 },
    { post_id: 8, comment_id: 28 },
    { post_id: 8, comment_id: 29 },
    { post_id: 9, comment_id: 30 },
    { post_id: 9, comment_id: 31 },
    { post_id: 9, comment_id: 32 },
    { post_id: 9, comment_id: 33 },
    { post_id: 9, comment_id: 34 },
    { post_id: 31, comment_id: 35 },
    { post_id: 31, comment_id: 36 },
    { post_id: 31, comment_id: 37 },
    { post_id: 31, comment_id: 38 },
    { post_id: 11, comment_id: 39 },
    { post_id: 11, comment_id: 40 },
    { post_id: 65, comment_id: 41 },
    { post_id: 65, comment_id: 42 },
    { post_id: 65, comment_id: 43 },
    { post_id: 5, comment_id: 44 },
    { post_id: 76, comment_id: 45 },
    { post_id: 76, comment_id: 46 },
    { post_id: 76, comment_id: 47 },
    { post_id: 97, comment_id: 48 },
    { post_id: 97, comment_id: 49 },
    { post_id: 34, comment_id: 50 },
    { post_id: 34, comment_id: 51 },
    { post_id: 36, comment_id: 52 },
    { post_id: 16, comment_id: 53 },
    { post_id: 16, comment_id: 54 },
    { post_id: 24, comment_id: 55 },
    { post_id: 24, comment_id: 56 },
    { post_id: 24, comment_id: 57 },
    { post_id: 24, comment_id: 58 },
    { post_id: 24, comment_id: 59 },
    { post_id: 66, comment_id: 60 },
    { post_id: 43, comment_id: 61 },
    { post_id: 43, comment_id: 62 },
    { post_id: 79, comment_id: 63 },
    { post_id: 101, comment_id: 64 },
    { post_id: 18, comment_id: 65 },
    { post_id: 87, comment_id: 66 },
    { post_id: 87, comment_id: 67 },
    { post_id: 29, comment_id: 68 },
    { post_id: 29, comment_id: 69 },
    { post_id: 69, comment_id: 70 },
    { post_id: 69, comment_id: 71 },
    { post_id: 103, comment_id: 72 },
    { post_id: 38, comment_id: 73 },
    { post_id: 91, comment_id: 74 },
    { post_id: 91, comment_id: 75 },
    { post_id: 19, comment_id: 76 },
    { post_id: 19, comment_id: 77 },
    { post_id: 19, comment_id: 78 },
    { post_id: 49, comment_id: 79 },
    { post_id: 57, comment_id: 80 },
    { post_id: 57, comment_id: 81 },
    { post_id: 102, comment_id: 82 },
    { post_id: 102, comment_id: 83 },
    { post_id: 96, comment_id: 84 },
    { post_id: 96, comment_id: 85 },
    { post_id: 94, comment_id: 86 },
    { post_id: 94, comment_id: 87 },
    { post_id: 8, comment_id: 88 },
    { post_id: 23, comment_id: 89 },
    { post_id: 23, comment_id: 90 },
    { post_id: 70, comment_id: 91 },
    { post_id: 70, comment_id: 92 },
    { post_id: 17, comment_id: 93 },
    { post_id: 17, comment_id: 94 },
    { post_id: 27, comment_id: 95 },
    { post_id: 27, comment_id: 96 },
    { post_id: 11, comment_id: 97 },
    { post_id: 25, comment_id: 98 },
    { post_id: 25, comment_id: 99 },
    { post_id: 22, comment_id: 100 },
    { post_id: 22, comment_id: 101 },
    { post_id: 67, comment_id: 102 },
    { post_id: 67, comment_id: 103 },
    { post_id: 84, comment_id: 104 },
    { post_id: 84, comment_id: 105 },
    { post_id: 99, comment_id: 106 },
    { post_id: 99, comment_id: 107 },
    { post_id: 75, comment_id: 108 },
    { post_id: 75, comment_id: 109 },
    { post_id: 50, comment_id: 110 },
    { post_id: 50, comment_id: 111 },
    { post_id: 89, comment_id: 112 },
    { post_id: 89, comment_id: 113 },
    { post_id: 32, comment_id: 114 },
    { post_id: 32, comment_id: 115 },
    { post_id: 45, comment_id: 116 },
    { post_id: 74, comment_id: 117 },
    { post_id: 74, comment_id: 118 },
    { post_id: 98, comment_id: 119 },
    { post_id: 98, comment_id: 120 },
    { post_id: 100, comment_id: 121 },
    { post_id: 72, comment_id: 122 },
    { post_id: 26, comment_id: 123 },
    { post_id: 52, comment_id: 124 },
    { post_id: 52, comment_id: 125 },
    { post_id: 71, comment_id: 126 },
    { post_id: 71, comment_id: 127 },
    { post_id: 28, comment_id: 128 },
    { post_id: 28, comment_id: 129 },
    { post_id: 81, comment_id: 130 },
];

const comment_user = [
    { comment_id: 1, user_id: 3 },
    { comment_id: 2, user_id: 10 },
    { comment_id: 3, user_id: 13 },
    { comment_id: 4, user_id: 12 },
    { comment_id: 5, user_id: 7 },
    { comment_id: 6, user_id: 6 },
    { comment_id: 7, user_id: 11 },
    { comment_id: 8, user_id: 4 },
    { comment_id: 9, user_id: 5 },
    { comment_id: 10, user_id: 14 },
    { comment_id: 11, user_id: 8 },
    { comment_id: 12, user_id: 1 },
    { comment_id: 13, user_id: 2 },
    { comment_id: 14, user_id: 10 },
    { comment_id: 15, user_id: 5 },
    { comment_id: 16, user_id: 14 },
    { comment_id: 17, user_id: 7 },
    { comment_id: 18, user_id: 10 },
    { comment_id: 19, user_id: 14 },
    { comment_id: 20, user_id: 2 },
    { comment_id: 21, user_id: 9 },
    { comment_id: 22, user_id: 4 },
    { comment_id: 23, user_id: 3 },
    { comment_id: 24, user_id: 8 },
    { comment_id: 25, user_id: 9 },
    { comment_id: 26, user_id: 13 },
    { comment_id: 27, user_id: 7 },
    { comment_id: 28, user_id: 6 },
    { comment_id: 29, user_id: 1 },
    { comment_id: 30, user_id: 13 },
    { comment_id: 31, user_id: 7 },
    { comment_id: 32, user_id: 1 },
    { comment_id: 33, user_id: 3 },
    { comment_id: 34, user_id: 5 },
    { comment_id: 35, user_id: 9 },
    { comment_id: 36, user_id: 6 },
    { comment_id: 37, user_id: 2 },
    { comment_id: 38, user_id: 1 },
    { comment_id: 39, user_id: 6 },
    { comment_id: 40, user_id: 13 },
    { comment_id: 41, user_id: 10 },
    { comment_id: 42, user_id: 14 },
    { comment_id: 43, user_id: 3 },
    { comment_id: 44, user_id: 5 },
    { comment_id: 45, user_id: 13 },
    { comment_id: 46, user_id: 12 },
    { comment_id: 47, user_id: 3 },
    { comment_id: 48, user_id: 10 },
    { comment_id: 49, user_id: 9 },
    { comment_id: 50, user_id: 5 },
    { comment_id: 51, user_id: 4 },
    { comment_id: 52, user_id: 2 },
    { comment_id: 53, user_id: 14 },
    { comment_id: 54, user_id: 1 },
    { comment_id: 55, user_id: 2 },
    { comment_id: 56, user_id: 7 },
    { comment_id: 57, user_id: 5 },
    { comment_id: 58, user_id: 8 },
    { comment_id: 59, user_id: 9 },
    { comment_id: 60, user_id: 1 },
    { comment_id: 61, user_id: 9 },
    { comment_id: 62, user_id: 14 },
    { comment_id: 63, user_id: 7 },
    { comment_id: 64, user_id: 9 },
    { comment_id: 65, user_id: 11 },
    { comment_id: 66, user_id: 5 },
    { comment_id: 67, user_id: 13 },
    { comment_id: 68, user_id: 3 },
    { comment_id: 69, user_id: 12 },
    { comment_id: 70, user_id: 4 },
    { comment_id: 71, user_id: 11 },
    { comment_id: 72, user_id: 1 },
    { comment_id: 73, user_id: 6 },
    { comment_id: 74, user_id: 5 },
    { comment_id: 75, user_id: 3 },
    { comment_id: 76, user_id: 9 },
    { comment_id: 77, user_id: 3 },
    { comment_id: 78, user_id: 14 },
    { comment_id: 79, user_id: 7 },
    { comment_id: 80, user_id: 9 },
    { comment_id: 81, user_id: 1 },
    { comment_id: 82, user_id: 5 },
    { comment_id: 83, user_id: 10 },
    { comment_id: 84, user_id: 6 },
    { comment_id: 85, user_id: 3 },
    { comment_id: 86, user_id: 7 },
    { comment_id: 87, user_id: 13 },
    { comment_id: 88, user_id: 14 },
    { comment_id: 89, user_id: 10 },
    { comment_id: 90, user_id: 1 },
    { comment_id: 91, user_id: 6 },
    { comment_id: 92, user_id: 4 },
    { comment_id: 93, user_id: 8 },
    { comment_id: 94, user_id: 2 },
    { comment_id: 95, user_id: 6 },
    { comment_id: 96, user_id: 2 },
    { comment_id: 97, user_id: 5 },
    { comment_id: 98, user_id: 13 },
    { comment_id: 99, user_id: 4 },
    { comment_id: 100, user_id: 8 },
    { comment_id: 101, user_id: 2 },
    { comment_id: 102, user_id: 7 },
    { comment_id: 103, user_id: 10 },
    { comment_id: 104, user_id: 14 },
    { comment_id: 105, user_id: 5 },
    { comment_id: 106, user_id: 12 },
    { comment_id: 107, user_id: 3 },
    { comment_id: 108, user_id: 10 },
    { comment_id: 109, user_id: 12 },
    { comment_id: 110, user_id: 7 },
    { comment_id: 111, user_id: 1 },
    { comment_id: 112, user_id: 5 },
    { comment_id: 113, user_id: 14 },
    { comment_id: 114, user_id: 9 },
    { comment_id: 115, user_id: 13 },
    { comment_id: 116, user_id: 3 },
    { comment_id: 117, user_id: 7 },
    { comment_id: 118, user_id: 5 },
    { comment_id: 119, user_id: 1 },
    { comment_id: 120, user_id: 12 },
    { comment_id: 121, user_id: 6 },
    { comment_id: 122, user_id: 10 },
    { comment_id: 123, user_id: 9 },
    { comment_id: 124, user_id: 1 },
    { comment_id: 125, user_id: 14 },
    { comment_id: 126, user_id: 7 },
    { comment_id: 127, user_id: 3 },
    { comment_id: 128, user_id: 5 },
    { comment_id: 129, user_id: 2 },
    { comment_id: 130, user_id: 13 },
];
