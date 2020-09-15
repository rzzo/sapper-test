import path from 'path';
import fs from 'fs';
import grayMatter from 'gray-matter';


export function get(req, res, next) {

		res.writeHead(200, {
			'Content-Type': 'application/json'
		});

	const rawData = fs.readFileSync(path.resolve('src/content/setup.md'), 'utf-8');

	//  parse front matter from post
	const { data, content } = grayMatter(rawData);

		res.end(JSON.stringify({
			...data,
		}));
}
