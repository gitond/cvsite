# Written by ChatGPT

# Relevant conversation below:

# ChatGPT: Do you want me to also show you a **quick Node script** that will
# automatically strip Inkscape metadata from all your SVGs (so you don’t have
# to clean them one by one)?

# Me: instead of node can you do it for python?

# ChatGPT: Absolutely - you can automate this cleanup in **Python** using
# `xml.etree.ElementTree`.
# Here’s a script that strips out all the Inkscape / Sodipodi namespaces and
# metadata so your SVGs become React/SVGR compatible:

# ```python
import xml.etree.ElementTree as ET
import sys
import re

def strip_namespace(tag):
    """Remove namespace from an XML tag"""
    return re.sub(r"\{.*\}", "", tag)

def clean_svg(input_file, output_file):
    tree = ET.parse(input_file)
    root = tree.getroot()

    # Remove namespaces from all tags
    for elem in root.iter():
        elem.tag = strip_namespace(elem.tag)

    # Strip namespaced attributes (inkscape:, sodipodi:, etc.)
    for elem in root.iter():
        attribs_to_remove = [k for k in elem.attrib if ":" in k]
        for k in attribs_to_remove:
            del elem.attrib[k]

    # Remove editor-specific elements (sodipodi, inkscape metadata)
    to_remove = []
    for elem in root:
        if any(x in elem.tag for x in ("sodipodi", "inkscape")):
            to_remove.append(elem)
    for elem in to_remove:
        root.remove(elem)

    # Remove xmlns:* attributes, keep only the default SVG one
    for key in list(root.attrib.keys()):
        if key.startswith("xmlns:"):
            del root.attrib[key]

    # Ensure root has a clean xmlns
    root.attrib["xmlns"] = "http://www.w3.org/2000/svg"

    # Write cleaned file
    tree.write(output_file, encoding="utf-8", xml_declaration=True)

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python clean_svg.py input.svg output.svg")
    else:
        clean_svg(sys.argv[1], sys.argv[2])
        print(f"OK! - Cleaned SVG saved to {sys.argv[2]}")
# ```

# ---

# # Usage

# 1. Save this as `clean_svg.py`.
# 2. Run it from terminal:
# ```bash
# python clean_svg.py blog.svg blog_clean.svg
# ```
# 3. Now `blog_clean.svg` will be stripped of Inkscape/Sodipodi metadata and
# safe to import with SVGR:
# ```jsx
# import { ReactComponent as BlogIcon } from './blog_clean.svg';
#
# function App() {
# 	return <BlogIcon />;
# }
# ```

# ---
