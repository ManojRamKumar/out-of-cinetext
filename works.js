// Edit the titles, summaries, images, Instagram URLs and body text below.
const contactEmail = "manojramkumar13@gmail.com";
const resumePath = "resume.pdf"; // Upload your PDF to the repository root.
const profileInstagram = "https://www.instagram.com/out.of.cinetext/";
const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida.`;
const works = [{
        id: "01",
        group: "Cinema",
        category: "Life",
        title: "Change is the universal constant",
        summary: "A reflection on change through a conversation between Sheldon and Penny.",
        image: "images/work-01.jpg",
        instagram: "https://www.instagram.com/p/DEmwQ68ovcZ/?",
        body: `"CHANGE," the one thing that's ironically constant. The one thing that teaches us to adapt. The one thing that lets us choose to grow or let go. But before that, what makes us acknowledge this change as a blessing or a burden? What makes us rethink the choices we made that led to this change?
  
 It’s the people who enter our lives. It’s up to us to love them, hate them, or choose to make them stay. Their presence, absence, and influence, in one way or another, become the catalysts for the choices we make. Those choices put us in circumstances… circumstances invite consequences… and those consequences breed change. It’s a paradox we can neither fully deny nor completely accept. And with all the chaos this change brings, it’s inevitable that we must embrace it, especially when love comes into play. The often unspoken impact of love can shift the very landscapes of our lives, nudging us toward growth and resilience.
 
 Looking at it from a counterpoint, we might think we can never accept change in our lives. Unknowingly, we are led to believe this. But in reality, we’ve always been the ones who come to embrace it. Whether through the bonds we cherish or the lessons we learn, change urges us to reflect, refine, and, ultimately, rediscover who we are making the journey as transformative as the destination itself.
 `
    },

    {
        id: "02",
        group: "Personal",
        category: "Personal essay",
        title: "The Thin Line Between Love and Endurance",
        summary: "An introspective exploration of love & commitment",
        image: "images/work-02.jpg",
        instagram: "https://www.instagram.com/p/C5cpZR5vy1Y/?",
        body: `Do we continue loving the person just because we think we can bear with their complexities, or do we bear those complexities just because we love them? What makes us decide to stay and work out in a relationship, is it the integrity of our commitment, or the circumstances that bind us together? As we tackle a thin balance of our individuality and the barriers of our partner, we often find ourselves grappling with questions of self-respect and toxicity. For a relationship that has spanned years, there's a chance of lines getting blurred between love and endurance. So how can we decide on letting go of a relationship where both parties end up having closure? Is it even remotely plausible? Perhaps, in the quiet moments of reflection, we realize that the decision to stay or leave is only for our own growth and understanding of what it truly means to love and be loved.

        As far as relationships go, we're constantly challenged to reconcile our ideals based on our circumstances. Each day becomes a delicate dance between compromise and self-preservation as we weigh the significance of our individuality against the dynamics of the relationship. We may find ourselves clinging to memories of happier times, seeking solace in the hope that things will improve, while simultaneously grappling with the harsh truth that change may be necessary for our own well-being.

        Then comes the question of integrity. While dealing with the intricacies that come with our partner's personality, there's always an innate desire to uphold the essence of who we are. Yet, the decision to walk away from a relationship requires a lot of courage and introspection. It demands confrontation and closure at the same time, which is the toughest part for a relationship that's bound to be broken. On the other hand, one might supposedly feel obligated to stay just because the relationship has spanned a reasonably good number of years.
        
        Perhaps the true measure of love lies not in how much of ourselves we are willing to surrender to sustain it, but in how much of ourselves we can preserve while being in it.`
    },
    {
        id: "03",
        group: "Cinema",
        category: "Character study",
        title: "I choose to believe you",
        summary: "A Main character analysis ft. Ante Sundaraniki",
        image: "images/work-03.jpg",
        instagram: "https://www.instagram.com/p/DKtzWXYSGwd/?",
        body: `Does heroism always have to wear the mask of rebellion? Of a man showing up with fists clenched and rage blazing, ready to take on the world for his woman? Maybe sometimes it does. But more often than not, it's quieter than that. It's not always about beating the odds in dramatic fashion, it's about standing still when everything around you demands otherwise. It's about trust, empathy, and choosing love over logic. Heroism doesn't always make noise. Sometimes, it's silent. Sometimes, it's just a man listening. Choosing not to doubt. Choosing not to crumble in the face of "proof." Choosing her over everything else that insists otherwise. When a man stands by the woman he loves-not because the world tells him to, but because his heart does-that's heroic too. When Sundar and Leela were placed in a situation no couple should ever have to face where cold, clinical reports claimed she was pregnant, and yet she stood her ground and said she wasn't he didn't let the facts cloud the truth of who she is. He didn't falter. He believed her. Not because he was blind, but because he chose to see her.

        And that's what makes Sundar one of the finest-written male protagonists in recent memory. His heroism wasn't loud. It wasn't revolutionary in the way we're used to seeing it on screen. But it was radical in its own right. He chose belief over betrayal. He chose emotional integrity over societal pressure. He chose love, not as a reaction, but as a decision. In a world that constantly demands proof, Sundar's faith in Leela becomes the most powerful statement. It tells us that real masculinity doesn't lie in dominating a narrative, but in holding space for another's truth, even when it's inconvenient. Especially then.

        If heroism is about rising above, then Sundar rose in the most humane way possible.`
    },
    {
        id: "04",
        group: "Cinema",
        category: "Relationship",
        title: "The Bare Minimum Complex",
        summary: "A Relationship analysis",
        image: "images/work-04.jpg",
        instagram: "https://www.instagram.com/p/DNTEnGpyema/?",
        body: `What's the bare minimum one can ask for in a relationship?

That's the question "Materialists" throws at you subtly, cleverly, and without judgment. But before diving into what the film says, you have to ask yourself: Is the bare minimum even enough anymore in modern-day dating? Or has dating become so tangled in expectations, performative gestures, and checklists that we've forgotten what the foundation should even look like?

The truth is it's all a matter of perspective. When you're in love, really in love, even the idea of bare minimum begins to lose its weight. The so-called standards blur. You stop measuring love in checkboxes. You start feeling it in presence, in effort, in the pauses between chaos. And sometimes, that's all it takes to know someone's worth keeping in your life. Take Lucy's story in Materialists, for instance. She's introduced as someone unapologetically materialistic, drawn to shiny lives and shinier futures. And then she ends up choosing John a man who, by every societal metric, has nothing to offer. He's broke. He's unstable. He's not Harry, the golden boy with the perfect life. But that's the thing when you're not in love, even a unicorn like Harry doesn't feel right. And when you are, even someone who has nothing can somehow feel like everything.

So where does this shift happen? This moment when standards take a backseat to something more intangible? Maybe it comes after life has bruised you enough. After experiences have stripped you down to what really matters. After you've been in enough relationships that ticked every box, yet left you feeling empty. Maybe, after all that, the bare minimum isn't a starting point anymore. It becomes the baseline for peace. A kind of emotional survival kit. And maybe, just maybe, two people who once split over their differences can still find their way back not by changing who they are, but by accepting who they've become.
In the end, "Materialists" isn't just a commentary on gold-digging or idealism. It's about how perspectives evolve. About how love doesn't always look like logic. And about how sometimes, the most unrealistic thing we can ask for in a relationship is perfection. Because the bare minimum? It's not so bare when it's built on the right intent.`
    },
    {
        id: "05",
        group: "Cinema",
        category: "Life Lesson",
        title: "Good old days",
        summary: "A life lesson from The Office ",
        image: "images/work-05.jpg",
        instagram: "https://www.instagram.com/p/DJRDfwISYHG/?",
        body: `Nostalgia is a cruel trickster. You never realize you're in the good old days while they're happening-because, in the moment, they don't feel like much at all. They feel like rushed mornings, casual texts or shared laughter. It's the comfort of routine we don't notice until it's disrupted. A routine that feels like background noise, like just another day in "The Office". Jim's pranks on Dwight weren't legendary office moments when they happened-they were just another Tuesday for them. Michael's awkward speeches weren't iconic-they were just Michael being Michael. But then one day, the office is quieter, the desks are emptier, and suddenly, those ordinary days become something you'd give anything to relive.

Andy Bernard got it right. We chase after what's next, waiting for life to finally feel like is at its peak, never realizing we're already in it. Maybe the trick is to catch ourselves in the middle of a moment and think-what if this is it? What if this is one of those memories we'll miss? Because the truth is, the best times don't announce themselves. They slip by, unnoticed, until they're gone. And by then, all we can do is look back and wish we had held on a little longer.`
    },
    {
        id: "06",
        group: "Cinema",
        category: "Observation",
        title: "An Allegory twisted",
        summary: "Analysis on Obsession",
        image: "images/work-06.jpg",
        instagram: "https://www.instagram.com/p/DZ2cG6NGurB/?",
        body: `The thing about "Obsession" is that it appears deceptively simple on the surface, but the more I sit with it, the more layers I find underneath. At least, that's how I interpreted it. For me, the film feels like an extreme allegory for modern day's dating anxiety. It takes all those irrational fears, overthinking patterns, and worst- case scenarios we create in our heads and pushes them to their absolute limits. Bear is placed in a perfectly plausible situation where he can simply ask Nikki out. Sure, it might be awkward. It might be messy. He might get rejected. But instead of confronting those possibilities, he looks for a shortcut, a way around vulnerability itself. And that's where everything starts to spiral.

What fascinated me most is how the film frames Bear. Initially, he comes across as an innocent, hesitant guy who's simply indecisive about his crush. Someone awkward enough for us to empathize with. Someone whose anxieties feel relatable. And because we're seeing the story through that lens, we're almost encouraged to place him somewhere in the middle ground, not entirely right, not entirely wrong. But the more I thought about it after my second watch, the more that perception started to crack.

A character can make mistakes. A character can act out of fear. But when someone witnesses the consequences of their actions, understands the damage they're causing, and still chooses to continue in one way or another, they've crossed a line. At that point, they're no longer just flawed, they become the villain of their own story. And that's exactly what Bear is. Maybe that's the film's smartest trick. It spends so much time making us focus on Nikki that we assume the title Obsession refers to her. But in retrospect, it feels like the title has always been about Bear. His inability to let go. His refusal to confront reality. His need to control an outcome instead of accepting uncertainty.

His actions, which started off as an instinct continued to be an actual obsession despite the consequences and fear. And maybe that's what makes Obsession so effective. Beneath the thriller elements lies a character study about what happens when anxiety is left unchecked, when vulnerability is replaced with control, and when affection slowly mutates into obsession.`
    },
    {
        id: "07",
        group: "Cinema",
        category: "Observation",
        title: "A Third-act Masterclass",
        summary: "A cliffhanger analysis",
        image: "images/work-07.jpg",
        instagram: "https://www.instagram.com/reel/DCO0q5vvrKg/?",
        body: `The cliffhanger at the end of “Across the Spider-Verse” is a masterclass in storytelling, a moment that works so powerfully because of how perfectly the film’s third act is crafted. This final act has so much happening at once, layers of action, tension, and character motivations all converging yet we’re able to follow it effortlessly, staying engaged every step of the way. By the time Miles finally escapes from Miguel, his relentless pursuer, we’re rooting for him to save his father. We feel that sense of relief right along with him. But then comes the twist: Miles has ended up in the wrong universe. This reveal lands with a huge impact, and it works so well for two reasons.

First, we’re so focused on Miles outsmarting and escaping Miguel, who’s a formidable character himself. Miguel isn’t just powerful; he’s an expert on the multiverse, having built the entire Spider-Society and dedicated himself to understanding its complexities. His relentless mission to stop Miles from disrupting the multiverse’s “canon events” makes him seem nearly infallible. We, like Miguel, believe Miles has made it back to his original universe because that’s the logical outcome - Miguel himself expects it, so why wouldn’t we?

This brings us to the second reason the twist works: Miguel and the audience are both so fixated on opposing sides of this chase that we end up making the same wrong assumption. We want Miles to succeed, while Miguel is determined to catch him, yet we’re both misled into thinking he’s returned to his universe. The fact that Miguel, gets it wrong too strengthens our belief that Miles is “home.” But the twist reveals that both Miguel and the audience have been led astray, proving that even the strongest character can make a critical error. This misalignment between what we’re led to believe and what’s actually true creates the perfect “mind=blown” moment.

This is how you pull off a twist in a cliffhanger. By building up Miguel as a powerful, knowledgeable figure, and then showing he’s just as prone to error as we are. We aren’t shown that Miguel has figured this out yet, but discovering, along with Gwen and Miles, that he’s ended up in the wrong universe is a brilliant storytelling choice. And to take it up a notch, we’re introduced to Prowler Miles, an even bigger twist that elevates the cliffhanger of an already outstanding third act. Closing with Gwen assembling a team to rescue Miles is the perfect culmination, showcasing masterful storytelling that leaves us eagerly awaiting the next installment.`
    },
    {
        id: "08",
        group: "Personal",
        category: "Observation",
        title: "I didn't mean to",
        summary: "A Relationship hiccup",
        image: "images/work-08.jpg",
        instagram: "https://www.instagram.com/p/DJgIi0WSEDp/?",
        body: `Funny how "I didn't mean to..." starts sounding more like a defense than comfort. That's the irony, isn't it? That love, no matter how pure, doesn't always come without collateral damage. Such as the sophisticated term for it, "The Unintentional Hurt." The words we didn't mean, the silences we didn't break, or the things we failed to notice-those leave the deepest cuts. And here's the thing, we didn't mean to. That should count for something, right?

No. Intention can never dilute the impact. You may not have aimed to hurt them-but they're still hurting. You may have loved them deeply-but love alone doesn't make the pain disappear. And that's where the weight of it all sets in. Because now, you're left explaining something that can't really be explained. That's when it all starts to sound more like you're defending and justifying yourself. Maybe the real question isn't about justifying the hurt. Maybe it's about what we do after. Do we sit with the damage? Do we take accountability, even when it wasn't deliberate? Do we change? Because love isn't just about never hurting someone-it's about how you hold them after you do. Even when you didn't mean to. Especially then.

But then comes the hardest part-when giving them space becomes the only solution, and that very space starts suffocating you. You miss them even in silence. You crave their presence in moments they've asked not to be in. And while you're trying your best to respect the distance they need to breathe, you're the one gasping for air. The space they need to heal ends up hurting you. Not out of revenge, not out of spite, but just as a ripple effect of love in distress. It's not tit-for-tat. It's not "hurt for hurt" in the way anger works. It's unintentional pain-born from care, not malice.

But yeah, it still stings. Because love isn't always fair. One person pulls back to breathe, and the other feels like they're drowning. And you start questioning-Is this how it works? You give them what they ask for, and you quietly bleed in the background, hoping they find what they're looking for.
So maybe the answer is learning to sit with the silence all along, to let the space mean something-for them and for you. To understand that love sometimes asks for distance, not as a punishment, but as a pause. And if what you share is real, they'll always find their way back.`
    }
];
