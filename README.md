# next-tag
It generates next git tag from current_tag by increasing the patch number by 1. <br/>
It supports semantic versioning formatted tags only. <br/>
It throws an error when current_tag is not formated correctly. <br/>

```
on:
  push:
    tags:
      - '*'
- name: Generate next tag
  id: next_tag
  uses: SimpleBitware/next-tag@v1.0.0
  with:
    preserve_v: true        # Optional: True to preserve the "v" in the generated tag if present in the current_tag otherwise false. Default is false.
    current_tag: 'v1.2.3'   # Required: Current tag

- name: Use tag
  run: echo ${{steps.next_tag.outputs.tag}}
```
