export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
      .then(response => response.json())
}

export const postUrl = async (shortUrl, title) => {
  const response = await fetch(`http://localhost:3001/api/v1/urls`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ long_url: shortUrl, title: title }),
	});
	if (response.ok) {
		return await response.json();
	}
	console.log(response.statusText);
	throw response.statusText;
};
