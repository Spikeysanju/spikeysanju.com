import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { Q as Quote } from "./Quote.js";
const metadata = {
  "title": "Show your work",
  "date": "2021-12-14",
  "categories": ["creative"],
  "author": "Austin Kleon",
  "image": "https://cdn.spikeysanju.com/books/showyourwork.png",
  "excerpt": "Discover how to build an audience for your creative work with Show Your Work by Austin Kleon - read my review now!"
};
const Show_your_work = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h3 id="introduction" data-svelte-h="svelte-936vj0"><a aria-hidden="true" tabindex="-1" href="#introduction"><span class="icon icon-link"></span></a>Introduction</h3> <p data-svelte-h="svelte-1sbgu3x">Hi everyone, and welcome to my book review blog! I’m excited to share my thoughts on “Show Your Work” by Austin Kleon, a book about how to share your creative work and build an audience online.Discover how to build an audience for your creative work with ‘Show Your Work’ by Austin Kleon - read my review now!’</p> <h3 id="book-summary" data-svelte-h="svelte-17vr6f3"><a aria-hidden="true" tabindex="-1" href="#book-summary"><span class="icon icon-link"></span></a>Book Summary</h3> <p data-svelte-h="svelte-fjod7f"><strong>Show Your Work</strong> is a short and easy-to-read book that encourages creatives to share their work with the world. Kleon argues that in today’s digital age, it’s important to embrace “showing your work” as a way to connect with others, find new opportunities, and grow your career. The book is filled with practical advice and examples from successful artists, writers, and other creatives.</p> <h3 id="review" data-svelte-h="svelte-hyeaow"><a aria-hidden="true" tabindex="-1" href="#review"><span class="icon icon-link"></span></a>Review</h3> <p data-svelte-h="svelte-17s6jtu">I really enjoyed reading “Show Your Work” and found it to be a valuable resource for anyone who wants to share their creative work online. Kleon’s writing is engaging and easy to follow, and he presents his ideas in a way that’s both practical and inspiring.</p> <br> <p data-svelte-h="svelte-rg96sf">One of the things I appreciated most about this book was Kleon’s emphasis on the importance of sharing your process, not just your finished work. He encourages readers to document their work and share it on social media, blogs, or other platforms, in order to connect with others and build a following. As Kleon says,</p> ${validate_component(Quote, "Quote").$$render(
    $$result,
    {
      quote: "Become a documentarian of what you do, and why you do it.",
      author: "Austin Kleon",
      borderColor: "border-yellow-300",
      textColor: "text-gray-900"
    },
    {},
    {}
  )} <p data-svelte-h="svelte-1gbj2a9">I found this idea to be especially helpful, as it can be intimidating to share work that’s not “perfect” or complete. By sharing your process, you can show others that creativity is a messy, iterative process that takes time and effort.</p> <br> <p data-svelte-h="svelte-vdo42d">Another aspect of “Show Your Work” that I enjoyed was the wide range of examples Kleon provides, from artists and writers to musicians and designers. It was fascinating to see how different creatives approach sharing their work, and I found myself inspired to try out new techniques and strategies. As Kleon says,</p> ${validate_component(Quote, "Quote").$$render(
    $$result,
    {
      quote: "Share what you love, and the people who love the same things will find you.",
      author: "Austin Kleon",
      borderColor: "border-yellow-300",
      textColor: "text-gray-900"
    },
    {},
    {}
  )} <br> <p data-svelte-h="svelte-5gi23o">I also appreciated Kleon’s advice on dealing with the fear of others stealing your ideas. As he says,</p> ${validate_component(Quote, "Quote").$$render(
    $$result,
    {
      quote: "Don’t worry about people stealing your ideas. If your ideas are any good, you’ll have to ram them down people’s throats.",
      author: "Austin Kleon",
      borderColor: "border-yellow-300",
      textColor: "text-gray-900"
    },
    {},
    {}
  )} <p data-svelte-h="svelte-xl2r7q">This is a great reminder that the most important thing is to keep creating and sharing your work, regardless of what others may think or do.</p> <h3 id="rating" data-svelte-h="svelte-x04l9p"><a aria-hidden="true" tabindex="-1" href="#rating"><span class="icon icon-link"></span></a>Rating</h3> <p data-svelte-h="svelte-1ujcwma">I give “Show Your Work” 4.5 stars out of 5. It’s a well-written and thought-provoking book that’s packed with practical advice and inspiring examples.</p> <h3 id="conclusion" data-svelte-h="svelte-1jd8e63"><a aria-hidden="true" tabindex="-1" href="#conclusion"><span class="icon icon-link"></span></a>Conclusion</h3> <p data-svelte-h="svelte-142tjmi">Overall, I highly recommend “Show Your Work” to anyone who wants to build an online following for their creative work. It’s a quick and engaging read that’s full of helpful tips and insights. Whether you’re an artist, writer, musician, or any other type of creative, this book will give you the tools and inspiration you need to start sharing your work with the world. As Kleon says,</p> ${validate_component(Quote, "Quote").$$render(
    $$result,
    {
      quote: "Be open, generous, brave. Show your work, then show some more. Create a feedback loop and learn from the people who care about your stuff.",
      author: "Austin Kleon",
      borderColor: "border-yellow-300",
      textColor: "text-gray-900"
    },
    {},
    {}
  )} <br>`;
});
export {
  Show_your_work as default,
  metadata
};
