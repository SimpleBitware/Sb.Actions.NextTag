import { info, setOutput, setFailed } from "@actions/core"
import * as tagHelper from './tag-helper'

function main() {
  try {
    const current_tag = process.env.INPUT_CURRENT_TAG
    const preserve_v = process.env.INPUT_PRESERVE_V
    const nextTag = tagHelper.generateNextTag(current_tag, preserve_v)

    info(`nextTag=${nextTag}`)
    setOutput("tag", nextTag);
  }
  catch (error) {
    setFailed(error);
  }
}

main()
