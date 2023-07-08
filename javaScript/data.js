import { v4 as uuidv4 } from 'https://jspm.dev/uuid'

/*
template for adding article
**add articles to the top of array**

{
    id: uuidv4(),
    title: "",
    info: "date",
    link: "link to original article",
    img: "",

    summery: "",

    content: ``
},

*/

export const blogs =
[
    {
        id: uuidv4(),
        title: "Destiny 2's Groovy Graviton Lance Is Getting a Huge Buff In PvE",
        info: "July 7, 2023",
        link: "https://www.gamespot.com/articles/destiny-2-groovy-graviton-lance-is-getting-a-huge-buff-in-pve/1100-6515748/",
        img: "https://www.dexerto.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2023/07/07/graviton-lance-exotic-pulse-rifle-destiny-season-of-the-deep-min.jpg",

        summery: "Change is on the horizon for Destiny 2, as a mid-season patch will tweak several weapon archetypes and fine-tune some of the game's Exotics.",

        content: `Change is on the horizon for Destiny 2, as a mid-season patch will tweak several weapon archetypes and fine-tune some of the game's Exotics. 
                On the latter front, Bungie has Graviton Lance, No Time to Explain, and Fighting Lion prepped for an update, one that'll scale back the effectiveness of these weapons in certain scenarios.<br><br>
                
                Graviton Lance received a major overhaul--alongside several other Exotics--this season, shifting its design to provide a more even spread of damage across its two-tap build. 
                "While it is nice to see that Graviton Lance has been returned to glory after a long hiatus, at its current strength the gun is too easy to use for how rewarding it can be, and the Cosmology explosion 
                pushes it too close to 'primary ammo Cloudstrike' for comfort," Bungie explained, referencing its heavy use in Crucible.
                `

    },

    {
        id: uuidv4(),
        title: "All of the internet now belongs to Google’s AI",
        info: "July 5, 2023",
        link: "https://www.digitaltrends.com/computing/new-google-privacy-policy-will-favor-ai-over-human-content/",
        img: "https://www.digitaltrends.com/wp-content/uploads/2023/05/Screenshot-2023-05-11-at-1.12.46-PM.jpg?fit=720%2C720&p=1",
    
        summery: "Google’s latest update to its privacy policy will make it so that the company has free range to scrape the web for any content that can benefit building and improving its AI tools.",
    
        content: `Google’s latest update to its privacy policy will make it so that the company has free range to scrape the web for any content that can benefit building and improving its AI tools.<br><br>

        “Google uses information to improve our services and to develop new products, features, and technologies that benefit our users and the public,” the new Google policy says. 
        “For example, we use publicly available information to help train Google’s AI models and build products and features like Google Translate, Bard, and Cloud AI capabilities.”<br><br>

        Gizmodo notes that the policy has been updated to say “AI models” when it previously said, “for language models.” 
        Additionally, the policy added Bard and Cloud AI, when it previously only mentioned Google Translate, for which it collected data.
        
        `
    },

    {
        id: uuidv4(),
        title: "Is A.I. the Future of Astrology?",
        info: "July 4, 2023",
        link: "https://www.nytimes.com/2023/07/04/style/astrology-co-star-ai.html",
        img: "https://static01.nyt.com/images/2023/07/06/multimedia/04AI-ASTROLOGY-02-kmfg/04AI-ASTROLOGY-02-kmfg-superJumbo.jpg?quality=75&auto=webp",

        summery: "A new machine furthers a technology company’s aims at providing astrological readings using artificial intelligence.",

        content: `The machine stood beside a deli counter, towering over cardboard boxes piled near the entrance to the Iconic Magazines store in NoLIta. 
                It had the stature of a standing washer-dryer, with black buttons, rows of blinking lights and gauges labeled with celestial bodies — “sun,” “moon,” and the eight planets — on the front of its white facade.<br><br>

                “It could be something from NASA,” said Tim Wiedmann, a 27-year-old student from Germany who visited the store on a Wednesday night in June.<br><br>

                While Mr. Wiedmann stood in front of the machine, its front screen directed him to “ask the stars.” Using a knob, he cycled through some 100 questions. 
                Among them: How do I get better at my job? Should I leave New York? Should I start a cult?
        `

    },

    {
        id: uuidv4(),
        title: "The best AI chatbots",
        info: "June 21, 2023",
        link: "https://www.zdnet.com/article/best-ai-chatbot/",
        img: "https://www.zdnet.com/a/img/resize/0665c2caf3787186d12dcc94ccabec70347b2115/2023/05/03/db1dd215-0cb0-424a-95e3-9ec44538759a/bing-chat.jpg?auto=webp&fit=crop&height=360&width=640",
    
        summery: "ChatGPT is only one of the many increasingly popular chatbots. Our picks for the best AI chatbots and writers can lighten your workload by writing emails and essays.",
    
        content: `Whether unlocking your phone through face recognition or telling Alexa to play a song, artificial intelligence has filtered into our everyday lives. Now, you can harness 
                the power of AI to do your writing, too. At your command, AI chatbots can write that paper you have been dreading to start, write code, compose emails, generate art or even pass your MBA exam.<br><br>
                
                ChatGPT has made quite the buzz, recently even dropping a free mobile app for iPhones. Although, its mass popularity has made it unreliable for everyday use since it's often at capacity. 
                Luckily, there are a variety of other capable AI chatbots, which are available whenever you need them. 
                `
    },

    {
        id: uuidv4(),
        title: "What the New GPT-4 AI Can Do",
        info: "March 16, 2023",
        link: "https://www.scientificamerican.com/article/what-the-new-gpt-4-ai-can-do/",
        img: "https://static.scientificamerican.com/sciam/cache/file/636DDCE3-1361-4357-BB9C9762607FD3B6_source.jpg?w=590&h=800&4C44DC4E-1BEF-454A-9F232A8A93DD59AF",

        summery: "OpenAI just released an updated version of its text-generating artificial intelligence program. Here’s how GPT-4 improves on its predecessor",

        content: `Tech research company OpenAI has just released an updated version of its text-generating artificial intelligence program, called GPT-4, and demonstrated some of the language model’s new abilities.<br><br>
                    Not only can GPT-4 produce more natural-sounding text and solve problems more accurately than its predecessor. It can also process images in addition to text. But the AI is still vulnerable to some of the same problems that plagued earlier 
                    GPT models: displaying bias, overstepping the guardrails intended to prevent it from saying offensive or dangerous things and “hallucinating,” or confidently making up falsehoods not found in its training data.`
    }
]


