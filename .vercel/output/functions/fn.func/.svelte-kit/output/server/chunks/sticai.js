import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { Q as Quote } from "./Quote.js";
import { E as Embedd } from "./Embedd.js";
const metadata = {
  "title": "Introducing SticAI",
  "date": "2023-12-14",
  "categories": ["design", "development", "engineering"],
  "author": "Spikey Sanju",
  "image": "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
};
const Sticai = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h3 id="how-i-followed-my-passion-and-created-sticai-from-scratch" data-svelte-h="svelte-49ijbm"><a aria-hidden="true" tabindex="-1" href="#how-i-followed-my-passion-and-created-sticai-from-scratch"><span class="icon icon-link"></span></a>How I Followed My Passion and Created SticAI from Scratch</h3> <p data-svelte-h="svelte-1d5sq9a">Last year, I took a huge leap of faith and decided to quit my job so I could build my own design agency. Being someone with ADHD, I have always been obsessed with technology and design. To me, these passions are not just a hobby, but a way to solve problems and make a difference.</p> ${validate_component(Embedd, "Embedd").$$render($$result, {}, {}, {})} <h3 id="my-journey-to-efficiency-how-self-built-tools-transformed-my-workflow" data-svelte-h="svelte-1sv399w"><a aria-hidden="true" tabindex="-1" href="#my-journey-to-efficiency-how-self-built-tools-transformed-my-workflow"><span class="icon icon-link"></span></a>My Journey to Efficiency: How Self-Built Tools Transformed My Workflow</h3> <p data-svelte-h="svelte-1aeq2sp">This mindset has helped me to raise quality questions and understand problems much more deeply. Today, I rely on many self-built tools that arguably make up 50% of my day-to-day workflow. From a Todo app to project management and even an entire social media management tool for scheduling tweets and posts across six different platforms - I’ve built them all.</p> <p data-svelte-h="svelte-13ueha6">This mindset has also allowed me to gain a deeper knowledge of many frameworks and backend infrastructures. As a solo founder, I must be involved in every process, from design to production. This has taught me a lot and has allowed me to fine-tune my skills in many different areas.</p> <h3 id="simplifying-user-experience-how-chatgpt-api-and-sticai-became-my-solution" data-svelte-h="svelte-qo3okv"><a aria-hidden="true" tabindex="-1" href="#simplifying-user-experience-how-chatgpt-api-and-sticai-became-my-solution"><span class="icon icon-link"></span></a>Simplifying User Experience: How ChatGPT API and SticAI Became My Solution</h3> <p data-svelte-h="svelte-1wyows">ChatGPT was made available to the public on 30 November 2022, and many people began using it. They figured out how to talk to ChatGPT in a way that works well and gets good results.</p> <p data-svelte-h="svelte-t2ujh2">As time passed, I found using ChatGPT to be quite inconvenient. Having to manually type out prompts every time I used it was a real hassle. Even though I came across a few third-party extensions that could generate prompts, they still required me to go through 3-6 clicks just to create them. Needless to say, I was not a fan of this added friction.</p> <p data-svelte-h="svelte-zh9um9">But then, an opportunity presented itself. ChatGPT offered its API for commercial use and I was intrigued. Sure, I had to pay for the service, but the deal was too good to pass up. So, I decided to give it a go and began exploring how to use the API.</p> <p data-svelte-h="svelte-16tiynq">Since I was already familiar with GPT-3 from using it for my social media scheduling tool, AboGrow, I had some experience with prompt engineering. This prompted me to start playing around with the ChatGPT API.</p> <h3 id="from-hassle-to-ease-the-story-behind-sticais-mmvp-for-chatgpt-prompts" data-svelte-h="svelte-3bj3q1"><a aria-hidden="true" tabindex="-1" href="#from-hassle-to-ease-the-story-behind-sticais-mmvp-for-chatgpt-prompts"><span class="icon icon-link"></span></a>From Hassle to Ease: The Story Behind SticAI’s MMVP for ChatGPT Prompts</h3> <p data-svelte-h="svelte-tbqyx2">Fast forward two weeks, and I had created an MMVP, a Most Minimum Viable Product - a workable prototype, with just the essential features. With this product, users could browse through over 1000 prompts with just a single click and use them with SticAI. They no longer had to go to ChatGPT and manually paste the prompts to generate results. While it’s not rocket science, it definitely reduces friction for users.</p> <p data-svelte-h="svelte-1t29ffa">But I didn’t stop there. I realised that people needed a way to save the generated responses by categories. So, I added a feature that would allow users to save the responses for later use.</p> <h3 id="why-personalisation-matters-a-deeper-look-into-sticais-chatgpt-experience" data-svelte-h="svelte-ydveko"><a aria-hidden="true" tabindex="-1" href="#why-personalisation-matters-a-deeper-look-into-sticais-chatgpt-experience"><span class="icon icon-link"></span></a>Why Personalisation Matters: A Deeper Look into SticAI’s ChatGPT Experience</h3> <p data-svelte-h="svelte-kkxtx6">Even though SticAI had over 1000 prompts, it wasn’t always personalised for every user’s workflow. That’s why I added a feature that allowed users to create and use their own prompts with just two clicks. Users could update their prompts at any time and reuse them as many times as they needed to.</p> <p data-svelte-h="svelte-5n8jro">One of the great things about SticAI is its smart navigation between prompt placeholders. By simply pressing the alt key, you could navigate between the next occurrences of placeholders and replace them with your own content. This made the process of creating prompts even smoother and more seamless for users.</p> <h3 id="the-excitement-of-validation-how-sticais-customer-base-grew-beyond-my-dreams" data-svelte-h="svelte-119p21l"><a aria-hidden="true" tabindex="-1" href="#the-excitement-of-validation-how-sticais-customer-base-grew-beyond-my-dreams"><span class="icon icon-link"></span></a>The Excitement of Validation: How SticAI’s Customer Base Grew Beyond My Dreams</h3> <p data-svelte-h="svelte-eyotii">When I launched my app on Twitter and LinkedIn, I was thrilled to find that I had made 3 sales from random internet users on the first day. It was truly one of the happiest moments of my life.</p> <p data-svelte-h="svelte-1cl7g0v">I had already been running my own design agency successfully for almost a year prior to this, but that first $19 from a stranger was particularly special to me. It was a feeling of validation that made all the hard work worth it.</p> <p data-svelte-h="svelte-aphj94">However, I ran into an issue when I reached out to my first customer personally. They reported that something wasn’t working for them and it was related to a Vercel function throwing a timeout error, which was not supposed to happen. In order to correct the problem, I scheduled a meeting with the customer and made some changes to the app. I then messaged them indicating the fix and they confirmed that everything was working as expected. To my delight, I gained 4 customers on that very 1st day!</p> <h3 id="sticai-prompts-my-ultimate-collection-of-chatgpt-prompts" data-svelte-h="svelte-1640ey8"><a aria-hidden="true" tabindex="-1" href="#sticai-prompts-my-ultimate-collection-of-chatgpt-prompts"><span class="icon icon-link"></span></a>SticAI Prompts: My Ultimate Collection of ChatGPT Prompts</h3> <p data-svelte-h="svelte-x5xog4">On day three, I released my collection of ChatGPT prompts called <a href="https://www.sticai.com/prompts" rel="nofollow">SticAI – Prompts</a>, which included more than 1000 prompts across 60+ categories, on SticAI Prompts. I shared it on Twitter, LinkedIn, and Reddit before going to bed, completely exhausted from working on the app for the entire week.</p> <p data-svelte-h="svelte-8ktdj">When I woke up, what I found was truly amazing. People had shown their love and support, and I received a huge amount of responses and website visits. By the end of the day, my customer base had grown from 4 to 14, and I couldn’t have been happier. This had been the moment I had been waiting for, for so many years.</p> <h3 id="sticchat-my-solution-for-a-smarter-chatgpt-experience" data-svelte-h="svelte-11x5bch"><a aria-hidden="true" tabindex="-1" href="#sticchat-my-solution-for-a-smarter-chatgpt-experience"><span class="icon icon-link"></span></a>SticChat: My Solution for a Smarter ChatGPT Experience</h3> <p data-svelte-h="svelte-1plousz">I then introduced SticChat, which had a ChatGPT-style UI, but with SticAI’s features included. Within just 8 days of launching, I had already gained 20 customers for SticAI, which was pretty impressive.</p> <p data-svelte-h="svelte-aukdow">But the features of SticAI are just the proverbial tip of the iceberg. I have a lot of interesting milestones and features in development that I can’t wait to share with everyone. I hope that this beautiful journey of mine with SticAI continues and that it takes me to new heights.</p> <h3 id="never-giving-up-on-my-dream-lessons-i-learned-from-building-sticai" data-svelte-h="svelte-10xrkub"><a aria-hidden="true" tabindex="-1" href="#never-giving-up-on-my-dream-lessons-i-learned-from-building-sticai"><span class="icon icon-link"></span></a>Never Giving Up on My Dream: Lessons I Learned from Building SticAI</h3> <p data-svelte-h="svelte-5f1vio">My advice to fellow indie hackers is to never give up on your dreams, no matter how difficult or challenging the journey may be. You need to be willing to put in long hours and hard work to make your ideas come to life.</p> ${validate_component(Embedd, "Embedd").$$render($$result, {}, {}, {})} <p data-svelte-h="svelte-15b1u5h">When you launch your products, remember to share them with the world through multiple platforms and put your heart and soul into every aspect of the launch. Monitor responses and feedback, as these will help you to continuously improve your product and its features.</p> <p data-svelte-h="svelte-gmi4z6">Celebrate every win, no matter how small it may seem. Each success is a stepping stone towards greater things. Finally, have faith in yourself and your product. Believe that you can do it, and you will. With hard work, dedication, and perseverance, anything is possible!</p> <h3 id="the-winning-formula-how-simplicity-and-functionality-helped-me-build-a-successful-product" data-svelte-h="svelte-shhadm"><a aria-hidden="true" tabindex="-1" href="#the-winning-formula-how-simplicity-and-functionality-helped-me-build-a-successful-product"><span class="icon icon-link"></span></a>The Winning Formula: How Simplicity and Functionality Helped Me Build a Successful Product</h3> <p data-svelte-h="svelte-1d2z2tc">In the end, it’s important to remember that your goal is to create the best product possible, and that means using whatever tools will make your workload easier and more efficient. Don’t be afraid to experiment with multiple options, and always prioritise simplicity and functionality over anything else.</p> ${validate_component(Quote, "Quote").$$render(
    $$result,
    {
      quote: "After all, the success of your product depends on providing value to your customers, not on having the fanciest tech stack or framework.",
      author: "Spikey Sanju",
      borderColor: "border-yellow-300",
      textColor: "text-gray-900"
    },
    {},
    {}
  )} <p data-svelte-h="svelte-hfdnf8">With love,
Spikey Sanju ♥️</p>`;
});
export {
  Sticai as default,
  metadata
};
