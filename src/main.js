import { info, setOutput, setFailed } from '@actions/core';
import generateNextTag from './tag-helper.js';

function main() {
  try {
    const current_tag = process.env.INPUT_CURRENT_TAG
    const preserve_v = process.env.INPUT_PRESERVE_V
    const nextTag = generateNextTag(current_tag, preserve_v)

    info(`nextTag=${nextTag}`)
    setOutput("tag", nextTag);
  }
  catch (error) {
    setFailed(error);
  }
}

main()
