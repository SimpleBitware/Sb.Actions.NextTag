const core = require('@actions/core');
const generateNextTag = require('../src/tag-helper');

function main() {
  try {
    const current_tag = process.env.INPUT_CURRENT_TAG
    const preserve_v = process.env.INPUT_PRESERVE_V
    const nextTag = generateNextTag(current_tag, preserve_v)

    core.info(`nextTag=${nextTag}`)
    core.setOutput("tag", nextTag);
  }
  catch (error) {
    core.setFailed(error);
  }
}

main()
