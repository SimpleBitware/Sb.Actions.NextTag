import { info, setOutput, setFailed } from '@actions/core';
import generateNextTag from './tag-helper.js';

function main() {
  try {
    const current_tag = process.env.INPUT_CURRENT_TAG
    const preserve_v = process.env.INPUT_PRESERVE_V
    const tag = generateNextTag(current_tag, preserve_v)

    info(`tag=${tag}`)
    setOutput("tag", tag);
  }
  catch (error) {
    setFailed(error);
  }
}

main()
