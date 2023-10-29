// Cloudfront function 
function handler(event) {
  var request = event.request;
  var host = request.headers.host.value;
  if (host.startsWith('www.')) return {
      statusCode: 308,
      statusDescription: 'Permanent Redirect',
      headers: {
          'location': { value: 'https://atombrenner.de' + request.uri }
      }
  };
  return event.request;
}