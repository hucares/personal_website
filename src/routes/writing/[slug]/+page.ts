export async function load({ params, url }) {
	const { slug } = params;
	const { pathname } = url;

	const postPromise = import(`../../../writing/${slug}.md`);
	const [postResult] = await Promise.all([postPromise]);

  const { default: page } = postResult;

	if (!page) {
		return {
			status: 404,
		};
	}

	return {
		slug,
		page,
	};
}
