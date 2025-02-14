# next-tag
Generates next github tag from current_tag by increasing the patch number by 1. Supports only semantic versioning formatted tags. <br/>
If current_tag is not formated correctly an error is thrown. <br/>

```
on:
  push:
    tags:
      - '*'
- name: Generate next tag
  id: next_tag
  uses: actions/next-tag@v1.0.0
  with:
    preserve_v: true        # Optional: True to preserve the "v" in the generated tag if present in the current_tag otherwise false. Default is false.
    current_tag: 'v1.2.3'   # Required: Current tag

- name: Use tag
  run: echo ${{steps.next_tag.outputs.tag}}
```
