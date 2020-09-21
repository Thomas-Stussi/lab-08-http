module.exports = rawRequest => {
  const [method, path] = rawRequest
    .toString()
    .split('\n')[0]
    .split(' ');

  const body = rawRequest.toString()
    .replace(/\n\r/g, '\n')
    .replace(/\r/g, '\n')
    .split(/\n{2,}/g)[1];
    
  const parsedRequest = {
    method: `${method}`,
    path: `${path}`
  };

  if(body) { parsedRequest.body = body; }

  return parsedRequest;
};
