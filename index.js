var policy = require('policyfile').createServer();
policy.listen(8433, function() {
  console.log('Socket Policy Server is listening on port 8433.');
});