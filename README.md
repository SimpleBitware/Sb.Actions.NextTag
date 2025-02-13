# action-get-next-tag
Generates next github tag from current_tag. Supports only semantic versioning. <br/>
If current_tag is not formated correctly an error is thrown.

```
on:
  push:
    tags:
      - '*'
- name: Generate next tag
  id: next_tag
  uses: actions/get-next-tag@v1.0.0
  with:
    strip_v: true           # Optional: Remove 'v' character from version. Defaults to true.
    current_tag: 'v1.2.3'   # Required: Current tag

- name: Use tag
  run: echo ${{steps.next_tag.outputs.tag}}
```
