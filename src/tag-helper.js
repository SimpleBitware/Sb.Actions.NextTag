function generateNextTag(current_tag, preserve_v) {
    if(!current_tag)
      throw new Error("current_tag is not defined");
    
    const match = current_tag.match(/^v?([0-9]+)\.([0-9]+)\.([0-9]+)/);
    if (!match || match.length <= 3)
        throw new Error("The provided current_tag format is not valid");

    let tag = `${match[1]}.${match[2]}.${parseInt(match[3]) + 1}`;
    if((preserve_v === "true" || preserve_v === true) && current_tag.startsWith("v"))
        tag = "v" + tag

    return tag;
}

export default generateNextTag;
