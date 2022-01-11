const axios = require('axios')

exports.handler = async () => {
  const contents = []
  let isLastPage = false
  const url = 'https://note.com/api/v2/creators/ydah/contents'
  for (let i = 1; ; i++) {
    if (isLastPage) break
    await axios
      .get(url, {
        params: {
          kind: 'note',
          page: i,
        },
      })
      .then((res) => {
        contents.push(...res.data.data.contents)
        isLastPage = res.data.data.isLastPage
      })
  }
  return {
    statusCode: 200,
    body: JSON.stringify(contents),
  }
}
