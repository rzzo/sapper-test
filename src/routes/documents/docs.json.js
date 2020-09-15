// import marked from 'marked';
// import path from 'path';
// import fs from 'fs';
// import grayMatter from 'gray-matter';

// function getAllPosts(filesPath) {
// 	const data = fs.readdirSync(filesPath).map((fileName) => {
// 		const post = fs.readFileSync(path.resolve(filesPath, fileName), 'utf-8');
// 		const { data, content } = grayMatter(post);

// 		const renderer = new marked.Renderer();
// 		const html = marked(content, { renderer });

// 		return {
// 			html,
// 			slug: fileName.substring(0, fileName.length - 3),
// 			...data,
// 		};
// 	});

// 	return data;
// }

// function sortPosts(posts) {
// 	return posts.sort((post1, post2) => {
// 		const date1 = new Date(post1.date);
// 		const date2 = new Date(post2.date);
// 		return date2 - date1;
// 	});
// }

// export function get(req, res) {
// 	const posts = getAllPosts('src/content/docs/posts');
// 	const sortedPosts = sortPosts(posts);

// 	res.writeHead(200, {
// 		'Content-Type': 'application/json'
// 	});

// 	res.end(JSON.stringify(sortedPosts));
// }

import docs from '../../../content/docs/posts';

const docsWithNoHtml = docs.map(docPost => ({ ...docPost, html: 'N/A' }))
const content = JSON.stringify(docsWithNoHtml);

export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });

  res.end(content);
}
