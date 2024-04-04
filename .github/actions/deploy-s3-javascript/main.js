const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

function run() {
 //1) Get input values from workflow file
  const bucket = core.getInput('bucket', { required: true });
  const bucketRegion  = core.getInput('bucket-region', { required: true });
  const distFolder = core.getInput('dist-folder', { required: true });

  // github.context.payload
  // 2) Upload my files to S3 bucket
  const s3Uri = `s3://${bucket}`;

  exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${bucketRegion}`);

  core.notice('HEllo fron my cutom java-sctipt action');
}

run();
