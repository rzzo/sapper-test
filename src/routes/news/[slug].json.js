// import posts from './_posts.js';
import marked from 'marked';
import path from 'path';
import fs from 'fs';
import grayMatter from 'gray-matter';

// const lookup = new Map();
// posts.forEach(post => {
// 	lookup.set(post.slug, JSON.stringify(post));
// });

export function get(req, res, next) {
	// the `slug` parameter is available because
	// this file is called [slug].json.js
	const { slug } = req.params;

		res.writeHead(200, {
			'Content-Type': 'application/json'
		});

		// reading correct file
	const post = fs.readFileSync(path.resolve('src/posts', `${slug}.md`), 'utf-8');

	//  parse front matter from post
	const { data, content } = grayMatter(post);

		// render html from string
		const renderer = new marked.Renderer();
		const html = marked(content, { renderer });

		res.end(JSON.stringify({
			html,
			...data,
		}));
}
