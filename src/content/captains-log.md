---

---
# Captain's Log

Yeah, this garden has a captain. Of course, silly.

## What do I have in mind?

This project is supposed to serve as my digital home and portfolio. A place to bring all the bytes and pieces that I am producing or have produced together. Show off, learn and develop.

A digital garden is the perfect approach to escape the concept of a stream. I like streams, as a consumer. But not as a producer.

Here, I can have a bunch of files on my hard drive. I can pick one, or another. Start here, switch over to there. No need to hit publish, because it is already out in the open anyway. Easy.

## So what do I have so far?

This project is build with Astro and so far I like it that way. Let's try to keep JS to a minimum.

I host the repository on a Gitea instance and deploy via Jenkins. Al of this is done on Uberspace. This way, I found, it is clear and relatively simple, while being self-hosted and under my control. Except for the actual server, agreed, but we'll get to that eventually.

## Documentation

Okay, I think I found a sidebar/nav bar that I am happy with for the time being.

### Navigation

The idea is to have a responsive navigation that is a vertical list on larger screens and a horizontal one on smaller screens. At the same time, it is sticky, so that it is on screen at all times.

I achieved this with a combination of techniques.

The first one is taken straight from the textbook Every Layout by Heydon Pickering and Andy Bell. I had the pleasure to see the talk 'Be the browser's mentor, not its micromanager' by Andy Bell at smashingConf in Freiburg this year (2022) and have to admit, that his approach to writing CSS resonated with me. 

Media queries always seemed like a non-elegant solution to layouts and designs, because there always was this gray-area where it was not yet time to break, but the design would start to fall apart. In other words, I never felt comfortable with them.

In the last days, I came to the realisation that one of the hard parts of development for browsers is the unpredictable nature of the client device. There is this huge fragmentation of screen sizes that it is impossible to tell, how things will look like on the client. Plus, some might not even use a screen to access our code. It's an interesting reality that wasn't as clear to me before. 

So now that I am working on my digital garden project, I aim to look at all these little design decisions calmly and with time. To try to understand and learn how to solve them in a modern way. A way that keeps the total amount of code to a minimum, since another eternal constraint on development for browsers is the need to keep everything as small as possible.

So a fluid approach to things, makes a lot of sense to me and is something that I strive for with this project.

First of all, the markup is sorted in two container. A navigation element and an article for the main content.

```html
<div class="with-sidebar">
	<nav class="navigation">
		<ul>
			<li><a href="/texts/">Texts</a></li>
			<li><a href="/images/">Image</a></li>
			<li><a href="/sounds/">Sound</a></li>
			<li><a href="/code/">Code</a></li>
		</ul>
	</nav>
	<article class="content">
		<slot />
	</article>
</div>
```

The idea is that the `.content` element is wider than the `.navigation` element and that when there is not enough space for the sidebar to be on the same row as the content, the sidebar is displayed above the content.

The accompanying css to achieve this effect, looks like this:

```css
.with-sidebar {
	display: flex;
	flex-wrap: wrap;
}

.with-sidebar > .navigation {
	flex-basis: 13rem;
	flex-grow: 1;
}

.with-sidebar > .content {
	flex-basis: 0;
	flex-grow: 999;
	min-inline-size: 75%;
}
```

I am relatively new to `flexbox` and so I was unaware  of how this way of combining values.

The last child, the `.content` in this case has a huge `flex-grow` value, causing it to use all of the available space that it can. It is limited by the `flex-basis` of the `.navigation`. 

Since the `flex-basis` value is not considered available space, so setting this on the smaller element ensures that this element has the space that it needs, but only that and not more. The rest is used up by the larger one.

The break point for this construct to switch to a vertical layout, displaying the navigation above the content, comes from setting the `min-inline-size` on the `.content`. If the available space is below this value, the navigation jumps above the content. Done.

I find this approach really neat and tidy, whle doing exactly what I want it to do.