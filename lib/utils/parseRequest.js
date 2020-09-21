module.exports = rawRequest => {
  const [requestMethod, requestPath] = rawRequest
    .split('\n')[0]
    .split(' ');

  const body = rawRequest
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .split(/\n\n/g)[1];
    
  const parsedRequest = {
    method: requestMethod,
    path: requestPath
  };

  if(body) { parsedRequest.body = body; }

  return parsedRequest;
};
